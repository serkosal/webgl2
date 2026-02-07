import {VBO, EBO} from './gl_buffers'


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
    private vbo: VBO;
    private ebo: EBO | undefined = undefined;
    

    
    constructor(
        cntx: WebGL2RenderingContext, 
        vbo: VBO,
        ebo: EBO | undefined = undefined
    ) {
        this.cntx = cntx;
        this.vbo = vbo;
        this.ebo = ebo;

        this.vao = cntx.createVertexArray();
    }

    bind(): void {
        this.vbo.bind();
        if (this.ebo)
            this.ebo.bind();
        this.cntx.bindVertexArray(this.vao);
    }

    link(program: WebGLProgram, attribs: IAttrib): void {
        this.bind();
        const index = this.cntx.getAttribLocation(program, attribs.name);
        this.cntx.enableVertexAttribArray(index);

        this.cntx.vertexAttribPointer(index, attribs.size, attribs.type, 
            attribs.normalized, attribs.stride, attribs.offset);
    }

    draw(program: WebGLProgram, primitive = this.cntx.TRIANGLES, offset = 0): void {

        this.cntx.useProgram(program);
        this.bind();

        if (this.ebo) {
            this.cntx.drawElements(
                primitive, 
                this.ebo.ind_num, 
                this.cntx.UNSIGNED_SHORT, offset
            );
        } else {
            this.cntx.drawArrays(
                primitive, offset, this.vbo.vert_num / this.vbo.vertex_size
            ); 
        }
    }
}