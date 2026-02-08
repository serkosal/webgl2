import './style.css'

import { mat4, vec3 } from 'gl-matrix';

import { VBO } from './gl_buffers.ts';
import VAO from './vao.ts';
import createShaders from './shaders.ts';
import vertShaderSource from './shaders/default.vert?raw';
import fragShaderSource from './shaders/default.frag?raw';

let cam_velocity = vec3.create(); vec3.zero(cam_velocity);
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

function perspective(fov: number, aspect: number, near: number, far: number): mat4 {
    const f = 1.0 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return mat4.fromValues(
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, (2 * far * near) * nf, 0
    );
}

function main() {
  const init_res = init();

  if (init_res) {
    const {cntx, program, vao} = init_res;
    
    let cam_movement = vec3.create();
    let model_mat = mat4.create();
    let view_mat = mat4.create();
    mat4.translate(view_mat, view_mat, vec3.fromValues(0, 0, -5));

    // getting shaders uniforms 
    cntx.useProgram(program);
    const uniformModel = cntx.getUniformLocation(program, "model");
    const uniformView  = cntx.getUniformLocation(program, "view");
    const proj_mat = perspective(90, cntx.canvas.width / cntx.canvas.height, 0.1, 100);
    cntx.uniformMatrix4fv(
      cntx.getUniformLocation(program, "proj"), false, proj_mat, 0, 0);
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

      vec3.scale(cam_movement, cam_velocity, dt);
      mat4.translate(view_mat, view_mat, cam_movement);

      // pass matrices into the vertex shader
      cntx.uniformMatrix4fv(uniformModel, false, model_mat, 0, 0);
      cntx.uniformMatrix4fv(uniformView, false, view_mat, 0, 0);

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
      cam_velocity[2] = -10;
      break;
    case 'ArrowRight':
      cam_velocity[0] = -10;
      break;
    case 'ArrowUp':
      cam_velocity[2] = 10;
      break;
    case 'ArrowLeft':
      cam_velocity[0] = 10;
      break;
    case ' ':
      cam_velocity[1] = -10;
      break;
    case 'Control':
      cam_velocity[1] = 10;
      break;
  
    default:
      break;
  }


  
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowDown':
      cam_velocity[2] = 0;
      break;

    case 'ArrowRight':
      cam_velocity[0] = 0;
      break;

    case 'ArrowUp':
      cam_velocity[2] = 0;
      break;

    case 'ArrowLeft':
      cam_velocity[0] = 0;
      break;

    case ' ':
      cam_velocity[1] = 0;
      break;
    case 'Control':
      cam_velocity[1] = 0;
      break;
  
    default:
      break;
  }
});

main();
