export class VBO {
    private buffer: WebGLBuffer;
    private cntx: WebGL2RenderingContext;
    readonly vert_num: number;
    readonly vertex_size;

    constructor(
        cntx: WebGL2RenderingContext, vertices: number[], 
        vertex_size = 3
    ) {
        this.cntx = cntx;
        this.buffer = cntx.createBuffer();
        this.vert_num = vertices.length;
        this.vertex_size = vertex_size;

        this.bind();
        cntx.bufferData(
            cntx.ARRAY_BUFFER, 
            new Float32Array(vertices), 
            cntx.STATIC_DRAW
        );
    }

    bind(): void {
        this.cntx.bindBuffer(this.cntx.ARRAY_BUFFER, this.buffer);
    }
}

export class EBO {
    private buffer: WebGLBuffer;
    private cntx: WebGL2RenderingContext;
    readonly ind_num: number;

    constructor(cntx: WebGL2RenderingContext, indices: number[]) {
        this.cntx = cntx;
        this.buffer = cntx.createBuffer();
        this.ind_num = indices.length;

        this.bind();
        cntx.bufferData(
            cntx.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices),
            cntx.STATIC_DRAW
        )
    }

    bind(): void {
        this.cntx.bindBuffer(this.cntx.ELEMENT_ARRAY_BUFFER, this.buffer);
    }
}