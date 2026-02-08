import './style.css'

import { mat4, vec3 } from 'gl-matrix';

import { VBO, EBO } from './gl_buffers.ts';
import VAO from './vao.ts';
import createShaders from './shaders.ts';
import vertShaderSource from './shaders/default.vert?raw';
import fragShaderSource from './shaders/default.frag?raw';

const proj_mat = mat4.fromValues(
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, -1,
  0, 0, 0, 1
);
let model_mat = mat4.create();
mat4.translate(model_mat, model_mat, vec3.fromValues(0, 0, -5));

let lastTime = Date.now();

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
  
  const vbo = new VBO(cntx, [//      5---------------6
     1.0, -1.0, -1.0,   // 0        /|              /|
     1.0,  1.0, -1.0,   // 1       / |             / |
    -1.0,  1.0, -1.0,   // 2      2---------------1  |
    -1.0, -1.0, -1.0,   // 3      |  |            |  |
                        //        |  |            |  |
    -1.0, -1.0,  1.0,   // 4      |  4------------|--7
    -1.0,  1.0,  1.0,   // 5      | /             | /
     1.0,  1.0,  1.0,   // 6      |/              |/
     1.0, -1.0,  1.0,   // 7      3---------------0
  ]);
  const ebo = new EBO(cntx, [
    0, 1, 2,            // front
    2, 3, 0,            
    3, 4, 5,            // left
    5, 2, 3,
    3, 0, 7,            // bottom
    7, 4, 0,
    0, 7, 6,            // right
    6, 1, 0,
    4, 7, 6,            // back
    6, 5, 4,
    2, 1, 6,            // top
    6, 5, 1
  ]);
  const vao = new VAO(cntx, vbo, ebo);

  vao.link(program, {
    name: "a_position", 
    size: 3, 
    type: cntx.FLOAT, 
    normalized: false,
    stride: 0, offset: 0
  });

  
  // viewport
  cntx.viewport(0, 0, cntx.canvas.width, cntx.canvas.height);

  return {cntx, program, vao};
}

function main() {
  const init_res = init();

  if (init_res) {
    const {cntx, program, vao} = init_res;
    cntx.clearColor(0, 0, 0, 0);
    let trans_mat = mat4.create();

    // setting trans matrix
    cntx.useProgram(program);
    const uniformLoc = cntx.getUniformLocation(program, "trans");

    function render(time: number)
    {
      // clearing 
      cntx.clear(cntx.COLOR_BUFFER_BIT);

      // elapsed time
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      
      // update matrices
      mat4.rotateY(model_mat, model_mat, dt * Math.PI / 4);
      mat4.rotateZ(model_mat, model_mat, dt * Math.PI / 2);
      mat4.mul(trans_mat, proj_mat, model_mat);
      cntx.uniformMatrix4fv(uniformLoc, false, trans_mat, 0, 0);

      // drawing
      vao.draw(program);

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render);
  }
}

main();
