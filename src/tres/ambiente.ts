/**
 * Iluminação compartilhada das cenas 3D (leão do hero e reparo): RoomEnvironment
 * pré-filtrado pelo PMREMGenerator UMA vez, com um painel âmbar fraco acima/atrás da câmera
 * e uma faixa fria à direita. Em metal, o que dá cor é o que ele reflete, por isso as
 * "luzes" moram no ambiente. Importado pelas duas ilhas: o Rollup põe Three.js, o
 * RoomEnvironment e este módulo num pedaço compartilhado.
 */
import { BoxGeometry, Color, DirectionalLight, Mesh, MeshBasicMaterial, PMREMGenerator, type Texture, type WebGLRenderer } from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const AMBAR = new Color('#E3A857');
export const FRIA = new Color('#C8D8F0');

/** Gera a textura de ambiente (chamar uma vez; o chamador faz dispose()). */
export function criarAmbiente(renderer: WebGLRenderer): Texture {
  const pmrem = new PMREMGenerator(renderer);
  const sala = new RoomEnvironment();
  const geo = new BoxGeometry(1, 1, 1);
  const painelQuente = new Mesh(geo, new MeshBasicMaterial({ color: AMBAR.clone().multiplyScalar(1.9) }));
  painelQuente.position.set(-3, 6.5, 12); painelQuente.scale.set(11, 6, 0.5);
  const faixaFria = new Mesh(geo, new MeshBasicMaterial({ color: FRIA.clone().multiplyScalar(10) }));
  faixaFria.position.set(12, 2, 1); faixaFria.scale.set(0.5, 12, 2.5);
  sala.add(painelQuente, faixaFria);
  const textura = pmrem.fromScene(sala, 0.04).texture;
  sala.traverse(o => { const m = o as Mesh; if (m.isMesh) { m.geometry.dispose(); (m.material as MeshBasicMaterial).dispose(); } });
  pmrem.dispose();
  return textura;
}

/** Direcional âmbar (chave) + contraluz fria, nas mesmas posições do leão. */
export function luzesPadrao(): DirectionalLight[] {
  const quente = new DirectionalLight(AMBAR, 3.2);
  quente.position.set(1.6, 1.1, 2.8);
  const fria = new DirectionalLight(FRIA, 4);
  fria.position.set(2.6, 1.4, -1.4);
  return [quente, fria];
}
