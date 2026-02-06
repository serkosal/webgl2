import './style.css'

const canv = document.querySelector<HTMLCanvasElement>('#webgl-canvas');

const vertShaderSource =
`#version 300 es
     
in vec4 a_position;
     
void main() {
  gl_Position = a_position;
}`;

const fragShaderSource =
`#version 300 es

precision highp float;
     
out vec4 outColor;
 
void main() {
  outColor = vec4(1, 0, 0.5, 1);
}`;

function createShader(cntx: WebGL2RenderingContext, type: GLenum, source: string) {
  let shader = cntx.createShader(type);

  if (!shader)
    return;

  cntx.shaderSource(shader, source);
  cntx.compileShader(shader);

  let success = cntx.getShaderParameter(shader, cntx.COMPILE_STATUS);

  if (success)
    return shader;
}

function linkShaders(cntx: WebGL2RenderingContext, vertShader: WebGLShader, fragShader: WebGLShader) {
  const program = cntx.createProgram();
  cntx.attachShader(program, vertShader);
  cntx.attachShader(program, fragShader);
  cntx.linkProgram(program);

  const success = cntx.getProgramParameter(program, cntx.LINK_STATUS);
  if (success)
    return program;

  console.log(cntx.getProgramInfoLog(program));
  cntx.deleteProgram(program);
}


function main() {
  if (!canv || !canv.getContext) {
    console.log("Could not initialize canvas element!");
    return;
  }
  
  let cntx = canv?.getContext("webgl2");

  if (!cntx) {
    console.log('WebGL 2 is not supported on this system!');
    return;
  }

  // shaders creation
  const vertShader = createShader(cntx, cntx.VERTEX_SHADER, vertShaderSource);
  const fragShader = createShader(cntx, cntx.FRAGMENT_SHADER, fragShaderSource);

  if (!vertShader) {
    console.log('Could not compile vertex shader!');
    return;
  }
  if (!fragShader) {
    console.log('Could not compile fragment shader!');
    return;
  }

  const program = linkShaders(cntx, vertShader, fragShader);

  if (!program) {
    console.log('Could not compile shaders into the program!');
    return;
  }
  
  const posAttribLoc = cntx.getAttribLocation(program, "a_position");

  
    // position buffer 
  const posBuffer = cntx.createBuffer();
  cntx.bindBuffer(cntx.ARRAY_BUFFER, posBuffer);
  const positions = [
    -1.0, -1.0,
     1.0,  1.0,
    -1.0,  1.0
  ]
  cntx.bufferData(cntx.ARRAY_BUFFER, new Float32Array(positions), cntx.STATIC_DRAW);

  const vao = cntx.createVertexArray();
  cntx.bindVertexArray(vao);
  cntx.enableVertexAttribArray(posAttribLoc);

  const sz     = 2;
  const type   = cntx.FLOAT;
  const norm   = false;
  const stride = 0;
  const vap_offset = 0;
  cntx.vertexAttribPointer(posAttribLoc, sz, type, norm, stride, vap_offset);

  cntx.viewport(0, 0, cntx.canvas.width, cntx.canvas.height);

  cntx.clearColor(0, 0, 0, 0);
  cntx.clear(cntx.COLOR_BUFFER_BIT);
  cntx.useProgram(program);

  cntx.bindVertexArray(vao);
  const primitiveType = cntx.TRIANGLES;
  const offset = 0;
  const count = 3;

  cntx.drawArrays(primitiveType, offset, count); 
  
}

main();
