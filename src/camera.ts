import { mat4, vec3 } from 'gl-matrix';

export class Camera {
  readonly view = mat4.create();
  readonly proj: mat4;

  velocity = vec3.create();

  constructor(
    pos = vec3.fromValues(0, 0, -1),
    fov: number=90, aspect=16/9, near=0.1, far=100
  ) {
    mat4.translate(this.view, this.view, pos);
     
    const f = 1.0 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    this.proj = mat4.fromValues(
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, (2 * far * near) * nf, 0
    );
  }

  setPos(newPos: vec3) {
    mat4.translate(this.view, mat4.create(), newPos);
  }

  move(movement: vec3, dt = 1) {
    let movementScaled = vec3.create();
    vec3.scale(movementScaled, movement, dt);
    mat4.translate(this.view, this.view, movementScaled);
  }

}
