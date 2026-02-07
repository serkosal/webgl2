import {VBO} from './gl_buffers'


export interface IAttrib {
    name: string;
    type: GLenum;
    normalized: GLboolean;

    size: GLint;
    stride: GLsizei;
    offset: GLintptr;
}

export default class VAO {
    private cntx: WebGL2RenderingContext;
    private vao: WebGLVertexArrayObject;
    readonly vbo: VBO;
    
    constructor(
        cntx: WebGL2RenderingContext, 
        vbo: VBO //, ebo: EBO | undefined = undefined
    ) {
        this.cntx = cntx;
        this.vbo = vbo;

        this.vao = cntx.createVertexArray();
    }

    bind(): void {
        this.vbo.bind();
        this.cntx.bindVertexArray(this.vao);
    }

    link(program: WebGLProgram, attribs: IAttrib): void {
        this.bind();
        const index = this.cntx.getAttribLocation(program, attribs.name);
        this.cntx.enableVertexAttribArray(index);

        this.cntx.vertexAttribPointer(index, attribs.size, attribs.type, 
            attribs.normalized, attribs.stride, attribs.offset);
    }
}