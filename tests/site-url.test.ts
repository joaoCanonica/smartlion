import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';

// Carrega astro.config.mjs num processo separado, simulando `astro build` ou `astro dev`.
function carregar(comando: 'build' | 'dev', env: Record<string, string | undefined>) {
  const codigo = `process.argv.push(${JSON.stringify(comando)});const c=(await import('./astro.config.mjs')).default;console.log(c.site)`;
  const base = { ...process.env, SITE_URL: undefined, VERCEL_ENV: undefined, VERCEL_URL: undefined };
  const r = spawnSync(process.execPath, ['--input-type=module', '-e', codigo], { env: { ...base, ...env } as NodeJS.ProcessEnv, encoding: 'utf8' });
  return { ok: r.status === 0, saida: r.stdout.trim(), erro: r.stderr };
}

describe('SITE_URL no astro.config.mjs', () => {
  it('falha no build sem SITE_URL', () => {
    const r = carregar('build', {});
    expect(r.ok).toBe(false);
    expect(r.erro).toContain('SITE_URL é obrigatório');
  });
  it('usa SITE_URL no build e normaliza para a origem', () => {
    expect(carregar('build', { SITE_URL: 'https://www.exemplo.com.br/' }).saida).toBe('https://www.exemplo.com.br');
  });
  it('recusa http fora de localhost e URL com caminho', () => {
    expect(carregar('build', { SITE_URL: 'http://exemplo.com.br' }).ok).toBe(false);
    expect(carregar('build', { SITE_URL: 'https://exemplo.com.br/loja' }).ok).toBe(false);
  });
  it('prévia da Vercel sem SITE_URL usa a URL da prévia', () => {
    expect(carregar('build', { VERCEL_ENV: 'preview', VERCEL_URL: 'smartlion-abc.vercel.app' }).saida).toBe('https://smartlion-abc.vercel.app');
  });
  it('produção da Vercel sem SITE_URL falha', () => {
    expect(carregar('build', { VERCEL_ENV: 'production', VERCEL_URL: 'smartlion-abc.vercel.app' }).ok).toBe(false);
  });
  it('dev sem SITE_URL usa localhost e não há domínio de teste antigo', () => {
    const r = carregar('dev', {});
    expect(r.saida).toBe('http://localhost:4321');
    expect(r.saida).not.toContain('chatgpt');
  });
});
