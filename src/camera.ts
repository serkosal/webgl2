import { mat4, vec3, quat } from 'gl-matrix';

export class Camera {
  //readonly view = mat4.create();
  readonly proj = mat4.create();
  private dir = quat.fromValues(0, 0, -1, 0);
  private up = quat.fromValues(0, 1, 0, 0);

  private pos = vec3.create();
  rot_vel = vec3.create();
  velocity = vec3.create();

  constructor(
    pos = vec3.fromValues(0, 0, -10),
    fov: number=45, aspectRation=2, near=0.1, far=10
  ) {
    this.setPos(pos);
    
    const proj = this.orthoFromFOV(fov, aspectRation, near, far);
    mat4.mul(proj, this.getProj(near, far), proj);

    this.proj = proj;
  }

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

  getDir(): vec3 {
    return vec3.fromValues(this.dir[0], this.dir[1], this.dir[2]);
  }

  getRight(): vec3 {
    let r = vec3.create(); vec3.cross(r, this.getDir(), this.getUp());
    return r;
  }

  getUp(): vec3 {
    return vec3.fromValues(this.up[0], this.up[1], this.up[2]);
  }

  getRotMatrix(): mat4 {
    const r = this.getRight();
    const u = this.getUp();
    const d = this.getDir();

    return mat4.fromValues(
      r[0], u[0], d[0], 0,
      r[1], u[1], d[1], 0,
      r[2], u[2], d[2], 0,
        0,    0,    0,  1
    );
  }

  lookAt(): mat4 {
    let res = mat4.create();
    mat4.mul(
      res, 
      this.getRotMatrix(), 
      mat4.fromValues(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        -this.pos[0], -this.pos[1], -this.pos[2], 1
      )
    );
    return res;
  }

  setPos(newPos: vec3) {
    vec3.add(this.pos, vec3.create(), newPos);
  }

  move(movement: vec3, dt = 1) {
    let d = this.getDir();    vec3.scale(d, d, -movement[2] * dt);
    let u = this.getUp();     vec3.scale(u, u, movement[1] * dt);
    let r = this.getRight();  vec3.scale(r, r, movement[0] * dt);

    vec3.add(this.pos, this.pos, d);
    vec3.add(this.pos, this.pos, u);
    vec3.add(this.pos, this.pos, r);
  }

  rotate(axis: vec3, degrees: number = 90, dt = 1): void {
    const phi_halved = degrees/180*Math.PI/2 * dt;
    //const q = quat.create();
    const q = quat.fromValues(
      Math.sin(phi_halved) * axis[0], 
      Math.sin(phi_halved) * axis[1], 
      Math.sin(phi_halved) * axis[2],
      Math.cos(phi_halved),
    )

    let q_conj = quat.create(); 
    quat.conjugate(q_conj, q);

    quat.mul(this.dir, q, this.dir);
    quat.mul(this.dir, this.dir, q_conj);
    quat.normalize(this.dir, this.dir);

    quat.mul(this.up, q, this.up);
    quat.mul(this.up, this.up, q_conj);
    quat.normalize(this.up, this.up);
  }

}
