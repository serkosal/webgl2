import { mat4, vec3 } from 'gl-matrix';

export class Camera {
  readonly view = mat4.create();
  proj = mat4.create();

  velocity = vec3.create();

  orthoFromPlanes(n: number, f:number, r: number, l: number, t: number, b: number): 
  mat4 {
    return mat4.fromValues(
      2/(r-l),  0,          0,     (r+l)/(l-r),   
      0,        2/(t-b),    0,     (t+b)/(b-t), 
      0,        0,       2/(n-f),  (f+n)/(n-f),
      0,        0,          0,          1
    );
  }

  orthoFromFOV(fov: number, aspectRatio: number, n: number, f: number) {
    const t = n * Math.tan(fov/2/180*Math.PI);
    const r = t * aspectRatio;

    return this.orthoFromPlanes(n, f, r, -r, t, -t);
  }

  getProj(n: number, f: number): mat4 {
    return mat4.fromValues(
      1, 0,     0,     0,
      0, 1,     0,     0,
      0, 0,  (f + n),  f,
      0, 0,    -1,     0
    );
  }


  constructor(
    pos = vec3.fromValues(0, 0, -1),
    fov: number=45, aspectRation=2, near=0.1, far=10
  ) {
    mat4.translate(this.view, this.view, pos);
    
    const proj = this.orthoFromFOV(fov, aspectRation, near, far);
    mat4.mul(proj, this.getProj(near, far), proj);

    this.proj = proj;
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
