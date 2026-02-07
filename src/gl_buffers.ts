export class VBO {
    private buffer: WebGLBuffer;
    private cntx: WebGL2RenderingContext;
    readonly vert_num: number;

    constructor(cntx: WebGL2RenderingContext, data: number[]) {
        this.cntx = cntx;
        this.buffer = cntx.createBuffer();
        this.vert_num = data.length;

        this.bind();
        cntx.bufferData(
            cntx.ARRAY_BUFFER, 
            new Float32Array(data), 
            cntx.STATIC_DRAW
        );
    }

    bind(): void {
        this.cntx.bindBuffer(this.cntx.ARRAY_BUFFER, this.buffer);
    }
}

export class EBO {
    
}