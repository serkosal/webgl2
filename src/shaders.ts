export default function createShaders(
  cntx: WebGL2RenderingContext,
  vertShaderSrc: string,
  fragShaderSrc: string
) {
  const vertShader = createShader(cntx, cntx.VERTEX_SHADER, vertShaderSrc);
  if (!vertShader) {
    console.log("Could not compile vertex shader!");
    return;
  }

  const fragShader = createShader(cntx, cntx.FRAGMENT_SHADER, fragShaderSrc);
  if (!fragShader) {
    console.log("Could not compile fragment shader!");
    return;
  }

  const program = linkShaders(cntx, vertShader, fragShader);

  if (!program) {
    console.log("Could not link shader program!");
    return;
  }

  cntx.deleteShader(vertShader);
  cntx.deleteShader(fragShader);

  return program;
}

export function createShader(cntx: WebGL2RenderingContext, type: GLenum, source: string) {
  let shader = cntx.createShader(type);

  if (!shader)
    return;

  cntx.shaderSource(shader, source);
  cntx.compileShader(shader);

  let success = cntx.getShaderParameter(shader, cntx.COMPILE_STATUS);

  if (success)
    return shader;
}

export function linkShaders(cntx: WebGL2RenderingContext, vertShader: WebGLShader, fragShader: WebGLShader) {
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

