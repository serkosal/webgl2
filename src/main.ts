import './style.css'

import vertShaderSource from './shaders/default.vert?raw';
import fragShaderSource from './shaders/default.frag?raw';

import './shaders.ts';
import createShaders from './shaders.ts';

const positions = [
    -1.0, -1.0,
     1.0,  1.0,
    -1.0,  1.0
]

function init() : {
  cntx: WebGL2RenderingContext,
  program: WebGLProgram,
  vao: WebGLVertexArrayObject
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
  
  // position buffer 
  const posBuffer = cntx.createBuffer();
  cntx.bindBuffer(cntx.ARRAY_BUFFER, posBuffer);
  cntx.bufferData(cntx.ARRAY_BUFFER, new Float32Array(positions), cntx.STATIC_DRAW);

  // vertex array
  const vao = cntx.createVertexArray();
  cntx.bindVertexArray(vao);
  
  // vertex shader input attrib
  const posAttribLoc = cntx.getAttribLocation(program, "a_position");
  cntx.enableVertexAttribArray(posAttribLoc);  
  const sz     = 2; const type   = cntx.FLOAT; const norm   = false;
  const stride = 0; const vap_offset = 0;
  cntx.vertexAttribPointer(posAttribLoc, sz, type, norm, stride, vap_offset);

  // viewport
  cntx.viewport(0, 0, cntx.canvas.width, cntx.canvas.height);

  return {cntx, program, vao};
}

function draw(
  cntx: WebGL2RenderingContext,
  program: WebGLProgram,
  vao: WebGLVertexArrayObject,
  primitive = cntx.TRIANGLES,
  offset = 0,
  num = 3,
) {

  // clearing 
  cntx.clearColor(0, 0, 0, 0);
  cntx.clear(cntx.COLOR_BUFFER_BIT);
  cntx.useProgram(program);

  // binding verticies
  cntx.bindVertexArray(vao);

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
