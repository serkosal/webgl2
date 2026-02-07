import './style.css'

import { VBO } from './gl_buffers.ts';
import VAO from './vao.ts';
import createShaders from './shaders.ts';
import vertShaderSource from './shaders/default.vert?raw';
import fragShaderSource from './shaders/default.frag?raw';

function init() : {
  cntx: WebGL2RenderingContext,
  program: WebGLProgram,
  vao: VAO
} | undefined {
  // check html canvas and WebGL2 context
  const canv = document.querySelector<HTMLCanvasElement>('#webgl-canvas');
  if (!canv) {
    console.log("Could not initialize canvas element!");
    return;
  }
  const cntx = canv?.getContext("webgl2");
  if (!cntx) {
    console.log('WebGL 2 is not supported on this system!');
    return;
  }

  // shader program
  const program = createShaders(cntx, vertShaderSource, fragShaderSource);
  if (!program) {
    console.log('Could not compile shaders into the program!');
    return;
  }
  
  const vao = new VAO(cntx, new VBO(cntx, [
    -1.0, -1.0,
     1.0,  1.0,
    -1.0,  1.0
  ]));

  vao.link(program, {
    name: "a_position", 
    size: 2, 
    type: cntx.FLOAT, 
    normalized: false,
    stride: 0, offset: 0
  });

  
  // viewport
  cntx.viewport(0, 0, cntx.canvas.width, cntx.canvas.height);

  return {cntx, program, vao};
}

function draw(
  cntx: WebGL2RenderingContext,
  program: WebGLProgram,
  vao: VAO,
  primitive = cntx.TRIANGLES,
  offset = 0,
  num = 3,
) {

  // clearing 
  cntx.clearColor(0, 0, 0, 0);
  cntx.clear(cntx.COLOR_BUFFER_BIT);
  cntx.useProgram(program);

  // binding verticies
  vao.bind();

  // draw call
  cntx.drawArrays(primitive, offset, num); 
}

function main() {
  const init_res = init();
  if (init_res) {
    const {cntx, program, vao} = init_res;
    draw(cntx, program, vao);
  }
}

main();
