import './style.css'

import { mat4, vec3 } from 'gl-matrix';

import { Camera } from './camera.ts'; 
import { VBO } from './gl_buffers.ts';
import VAO from './vao.ts';
import createShaders from './shaders.ts';
import vertShaderSource from './shaders/default.vert?raw';
import fragShaderSource from './shaders/default.frag?raw';
import floorVertShaderSource from './shaders/floor.vert?raw';
import floorFragShaderSource from './shaders/floor.frag?raw';

const cam = new Camera();
let lastTime = Date.now();

function init() : {
  cntx: WebGL2RenderingContext,
  program: WebGLProgram,
  floor_program: WebGLProgram,
  vao: VAO,
  floor_vao: VAO
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
  const floor_program = createShaders(cntx, 
    floorVertShaderSource, floorFragShaderSource);
  if (!floor_program) {
    console.log('Could not compile floor shaders into the program!');
    return;
  }

  // cube 
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
  cntx.useProgram(program);
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
    stride: 6 * Float32Array.BYTES_PER_ELEMENT, 
    offset: 3 * Float32Array.BYTES_PER_ELEMENT
  });
  // floor
  const floor_vbo = new VBO(cntx, [
    -100.0, -0.5,  100.0,
     100.0, -0.5,  100.0,
     100.0, -0.5, -100.0,
     100.0, -0.5, -100.0,
    -100.0, -0.5, -100.0,
    -100.0, -0.5,  100.0,
  ]);
  const floor_vao = new VAO(cntx, floor_vbo);
  cntx.useProgram(floor_program);
  floor_vao.link(floor_program, {
    name: "aPos", 
    size: 3,
    type: cntx.FLOAT, 
    normalized: false,
    stride: 3 * Float32Array.BYTES_PER_ELEMENT, offset: 0
  });
  
  // viewport
  cntx.viewport(0, 0, cntx.canvas.width, cntx.canvas.height);

  cntx.clearColor(0, 0, 0, 1.0);

  cntx.enable(cntx.DEPTH_TEST);
  cntx.depthFunc(cntx.LESS);
  cntx.clearDepth(1.0);

  // cntx.enable(cntx.CULL_FACE);
  // cntx.cullFace(cntx.BACK);  
  // cntx.frontFace(cntx.CW);

  //return {cntx, floor_program, floor_vao};
  return {cntx, program, floor_program, vao, floor_vao};
}

function main() {
  const init_res = init();

  if (init_res) {
    const { cntx, program, floor_program, vao, floor_vao } = init_res;
    
    const camPosXEl = document.querySelector<HTMLDivElement>('#cam-pos-x');
    const camPosYEl = document.querySelector<HTMLDivElement>('#cam-pos-y');
    const camPosZEl = document.querySelector<HTMLDivElement>('#cam-pos-z');
    const camDirXEl = document.querySelector<HTMLDivElement>('#cam-dir-x');
    const camDirYEl = document.querySelector<HTMLDivElement>('#cam-dir-y');
    const camDirZEl = document.querySelector<HTMLDivElement>('#cam-dir-z');

    let model_mat = mat4.create();

    // getting shaders uniforms
    cntx.useProgram(program);
    const uniformModel = cntx.getUniformLocation(program, "model");
    const uniformView  = cntx.getUniformLocation(program, "view");
    cntx.uniformMatrix4fv(
      cntx.getUniformLocation(program, "proj"), false, cam.proj, 0, 0);
    cntx.uniform3fv(
      cntx.getUniformLocation(program, "lightPos"), vec3.fromValues(5, 10, 5));

    cntx.useProgram(floor_program);
    cntx.uniform3fv(
      cntx.getUniformLocation(floor_program, "lightPos"), 
      vec3.fromValues(5, 10, 5)
    );
    cntx.uniformMatrix4fv(
      cntx.getUniformLocation(floor_program, "proj"), false, cam.proj
    );
    const floorUniformView = cntx.getUniformLocation(floor_program, "view");

    function render(time: number)
    {
      // clearing 
      cntx.clear(cntx.COLOR_BUFFER_BIT | cntx.DEPTH_BUFFER_BIT);

      // elapsed time
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Update HTML elements
      if (camPosXEl && camPosYEl && camPosZEl) {
        const cam_pos = cam.getPos();
        camPosXEl.innerText = `x: ${cam_pos[0]}`;
        camPosYEl.innerText = `y: ${cam_pos[1]}`;
        camPosZEl.innerText = `z: ${cam_pos[2]}`;
      }
      if (camDirXEl && camDirYEl && camDirZEl) {
        const cam_dir = cam.getDir();
        camDirXEl.innerText = `x: ${cam_dir[0]}`;
        camDirYEl.innerText = `y: ${cam_dir[1]}`;
        camDirZEl.innerText = `z: ${cam_dir[2]}`;
      }
      
      
      // update matrices
      //mat4.rotateY(model_mat, model_mat, dt * Math.PI / 8);
      // mat4.rotateZ(model_mat, model_mat, dt * Math.PI / 2);

      //move camera
      cam.move(cam.velocity, dt);
      cam.rotate(cam.getRight(), cam.rot_vel[0], dt);
      cam.rotate(cam.getUp(), cam.rot_vel[1], dt);
      cam.rotate(cam.getDir(), cam.rot_vel[2], dt);

      // draw floor
      cntx.useProgram(floor_program);
      cntx.uniformMatrix4fv(floorUniformView, false, cam.lookAt(), 0, 0);
      floor_vao.draw();

      // pass matrices into the vertex shader
      cntx.useProgram(program);
      cntx.uniformMatrix4fv(uniformModel, false, model_mat, 0, 0);
      cntx.uniformMatrix4fv(uniformView, false, cam.lookAt(), 0, 0);

      // drawing
      vao.draw();

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render);
  }
}

window.addEventListener('keydown', (e) => {
  const MOVEMENT_SPEED = 5;
  const ROTATION_SPEED = 15;
  switch (e.key) {
    
    case 's':
      cam.velocity[2] = -MOVEMENT_SPEED;
      break;
    case 'd':
      cam.velocity[0] = MOVEMENT_SPEED;
      break;
    case 'w':
      cam.velocity[2] = MOVEMENT_SPEED;
      break;
    case 'a':
      cam.velocity[0] = -MOVEMENT_SPEED;
      break;
    case ' ':
      cam.velocity[1] = MOVEMENT_SPEED;
      break;
    case 'c':
      cam.velocity[1] = -MOVEMENT_SPEED;
      break;
    case 'ArrowDown':
      cam.rot_vel[0] = ROTATION_SPEED;
      break;
    case 'ArrowRight':
      cam.rot_vel[1] = ROTATION_SPEED;
      break;
    case 'ArrowUp':
      cam.rot_vel[0] = -ROTATION_SPEED;
      break;
    case 'ArrowLeft':
      cam.rot_vel[1] = -ROTATION_SPEED;
      break;
    case 'q':
      cam.rot_vel[2] = -ROTATION_SPEED;
      break;
    case 'e':
      cam.rot_vel[2] = ROTATION_SPEED;
      break;
  
    default:
      break;
  }


  
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {

    case 's':
      cam.velocity[2] = 0;
      break;
    case 'd':
      cam.velocity[0] = 0;
      break;
    case 'w':
      cam.velocity[2] = 0;
      break;
    case 'a':
      cam.velocity[0] = 0;
      break;
    case ' ':
      cam.velocity[1] = 0;
      break;
    case 'c':
      cam.velocity[1] = 0;
      break;

    case 'ArrowDown':
      cam.rot_vel[0] = 0;
      break;
    case 'ArrowRight':
      cam.rot_vel[1] = 0;
      break;
    case 'ArrowUp':
      cam.rot_vel[0] = 0;
      break;
    case 'ArrowLeft':
      cam.rot_vel[1] = 0;
      break;
    case 'q':
      cam.rot_vel[2] = 0;
      break;
    case 'e':
      cam.rot_vel[2] = 0;
      break;
  
    default:
      break;
  }
});

main();
