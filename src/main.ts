import './style.css'

import { mat4, vec3 } from 'gl-matrix';

import { Camera } from './camera.ts'; 
import { VBO } from './gl_buffers.ts';
import VAO from './vao.ts';
import createShaders from './shaders.ts';
import vertShaderSource from './shaders/default.vert?raw';
import fragShaderSource from './shaders/default.frag?raw';

const cam = new Camera();
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
  const cntx = canv?.getContext("webgl2", {depth: true});
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
  const vbo = new VBO(cntx, [
    -0.5, -0.5, -0.5,  0.0,  0.0, -1.0,
     0.5, -0.5, -0.5,  0.0,  0.0, -1.0,
     0.5,  0.5, -0.5,  0.0,  0.0, -1.0,
     0.5,  0.5, -0.5,  0.0,  0.0, -1.0,
    -0.5,  0.5, -0.5,  0.0,  0.0, -1.0,
    -0.5, -0.5, -0.5,  0.0,  0.0, -1.0,

    -0.5, -0.5,  0.5,  0.0,  0.0,  1.0,
     0.5, -0.5,  0.5,  0.0,  0.0,  1.0,
     0.5,  0.5,  0.5,  0.0,  0.0,  1.0,
     0.5,  0.5,  0.5,  0.0,  0.0,  1.0,
    -0.5,  0.5,  0.5,  0.0,  0.0,  1.0,
    -0.5, -0.5,  0.5,  0.0,  0.0,  1.0,

    -0.5,  0.5,  0.5, -1.0,  0.0,  0.0,
    -0.5,  0.5, -0.5, -1.0,  0.0,  0.0,
    -0.5, -0.5, -0.5, -1.0,  0.0,  0.0,
    -0.5, -0.5, -0.5, -1.0,  0.0,  0.0,
    -0.5, -0.5,  0.5, -1.0,  0.0,  0.0,
    -0.5,  0.5,  0.5, -1.0,  0.0,  0.0,

     0.5,  0.5,  0.5,  1.0,  0.0,  0.0,
     0.5,  0.5, -0.5,  1.0,  0.0,  0.0,
     0.5, -0.5, -0.5,  1.0,  0.0,  0.0,
     0.5, -0.5, -0.5,  1.0,  0.0,  0.0,
     0.5, -0.5,  0.5,  1.0,  0.0,  0.0,
     0.5,  0.5,  0.5,  1.0,  0.0,  0.0,

    -0.5, -0.5, -0.5,  0.0, -1.0,  0.0,
     0.5, -0.5, -0.5,  0.0, -1.0,  0.0,
     0.5, -0.5,  0.5,  0.0, -1.0,  0.0,
     0.5, -0.5,  0.5,  0.0, -1.0,  0.0,
    -0.5, -0.5,  0.5,  0.0, -1.0,  0.0,
    -0.5, -0.5, -0.5,  0.0, -1.0,  0.0,

    -0.5,  0.5, -0.5,  0.0,  1.0,  0.0,
     0.5,  0.5, -0.5,  0.0,  1.0,  0.0,
     0.5,  0.5,  0.5,  0.0,  1.0,  0.0,
     0.5,  0.5,  0.5,  0.0,  1.0,  0.0,
    -0.5,  0.5,  0.5,  0.0,  1.0,  0.0,
    -0.5,  0.5, -0.5,  0.0,  1.0,  0.0
  ], 6);
  const vao = new VAO(cntx, vbo);

  vao.link(program, {
    name: "aPos", 
    size: 3,
    type: cntx.FLOAT, 
    normalized: false,
    stride: 6 * Float32Array.BYTES_PER_ELEMENT, offset: 0
  });
  vao.link(program, {
    name: "aNorm", 
    size: 3,
    type: cntx.FLOAT, 
    normalized: false,
    stride: 6 * Float32Array.BYTES_PER_ELEMENT, offset: 3 * Float32Array.BYTES_PER_ELEMENT
  });
  
  // viewport
  cntx.viewport(0, 0, cntx.canvas.width, cntx.canvas.height);

  cntx.clearColor(0, 0, 0, 0);

  cntx.enable(cntx.DEPTH_TEST);
  cntx.depthFunc(cntx.LESS);
  cntx.clearDepth(1.0);

  // cntx.enable(cntx.CULL_FACE);
  // cntx.cullFace(cntx.BACK);  
  // cntx.frontFace(cntx.CW);

  return {cntx, program, vao};
}

function main() {
  const init_res = init();

  if (init_res) {
    const {cntx, program, vao} = init_res;
    
    let model_mat = mat4.create();
    // let view_mat = mat4.create();
    cam.move(vec3.fromValues(0, 0, -5));

    // getting shaders uniforms 
    cntx.useProgram(program);
    const uniformModel = cntx.getUniformLocation(program, "model");
    const uniformView  = cntx.getUniformLocation(program, "view");
    cntx.uniformMatrix4fv(
      cntx.getUniformLocation(program, "proj"), false, cam.proj, 0, 0);
    const LightPos = cntx.getUniformLocation(program, "lightPos");
    let LightPosV = vec3.fromValues(5, 10, 5);
    cntx.uniform3fv(LightPos, LightPosV);

    function render(time: number)
    {
      // clearing 
      cntx.clear(cntx.COLOR_BUFFER_BIT | cntx.DEPTH_BUFFER_BIT);

      // elapsed time
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      
      // update matrices
      mat4.rotateY(model_mat, model_mat, dt * Math.PI / 4);
      // mat4.rotateZ(model_mat, model_mat, dt * Math.PI / 2);

      // move camera
      cam.move(cam.velocity, dt);

      // pass matrices into the vertex shader
      cntx.uniformMatrix4fv(uniformModel, false, model_mat, 0, 0);
      cntx.uniformMatrix4fv(uniformView, false, cam.view, 0, 0);

      // drawing
      vao.draw(program);

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render);
  }
}

window.addEventListener('keydown', (e) => {
  
  switch (e.key) {
    case 'ArrowDown':
      cam.velocity[2] = -10;
      break;
    case 'ArrowRight':
      cam.velocity[0] = -10;
      break;
    case 'ArrowUp':
      cam.velocity[2] = 10;
      break;
    case 'ArrowLeft':
      cam.velocity[0] = 10;
      break;
    case ' ':
      cam.velocity[1] = -10;
      break;
    case 'Control':
      cam.velocity[1] = 10;
      break;
  
    default:
      break;
  }


  
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowDown':
      cam.velocity[2] = 0;
      break;

    case 'ArrowRight':
      cam.velocity[0] = 0;
      break;

    case 'ArrowUp':
      cam.velocity[2] = 0;
      break;

    case 'ArrowLeft':
      cam.velocity[0] = 0;
      break;

    case ' ':
      cam.velocity[1] = 0;
      break;
    case 'Control':
      cam.velocity[1] = 0;
      break;
  
    default:
      break;
  }
});

main();
