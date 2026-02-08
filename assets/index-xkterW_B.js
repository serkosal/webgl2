(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var b=typeof Float32Array<"u"?Float32Array:Array;function y(){var e=new b(16);return b!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function F(e,r,t,n,o,i,c,a,l,m,d,h,v,u,g,p){var s=new b(16);return s[0]=e,s[1]=r,s[2]=t,s[3]=n,s[4]=o,s[5]=i,s[6]=c,s[7]=a,s[8]=l,s[9]=m,s[10]=d,s[11]=h,s[12]=v,s[13]=u,s[14]=g,s[15]=p,s}function S(e,r,t){var n=t[0],o=t[1],i=t[2],c,a,l,m,d,h,v,u,g,p,s,A;return r===e?(e[12]=r[0]*n+r[4]*o+r[8]*i+r[12],e[13]=r[1]*n+r[5]*o+r[9]*i+r[13],e[14]=r[2]*n+r[6]*o+r[10]*i+r[14],e[15]=r[3]*n+r[7]*o+r[11]*i+r[15]):(c=r[0],a=r[1],l=r[2],m=r[3],d=r[4],h=r[5],v=r[6],u=r[7],g=r[8],p=r[9],s=r[10],A=r[11],e[0]=c,e[1]=a,e[2]=l,e[3]=m,e[4]=d,e[5]=h,e[6]=v,e[7]=u,e[8]=g,e[9]=p,e[10]=s,e[11]=A,e[12]=c*n+d*o+g*i+r[12],e[13]=a*n+h*o+p*i+r[13],e[14]=l*n+v*o+s*i+r[14],e[15]=m*n+u*o+A*i+r[15]),e}function L(e,r,t){var n=Math.sin(t),o=Math.cos(t),i=r[0],c=r[1],a=r[2],l=r[3],m=r[8],d=r[9],h=r[10],v=r[11];return r!==e&&(e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e[0]=i*o-m*n,e[1]=c*o-d*n,e[2]=a*o-h*n,e[3]=l*o-v*n,e[8]=i*n+m*o,e[9]=c*n+d*o,e[10]=a*n+h*o,e[11]=l*n+v*o,e}function w(){var e=new b(3);return b!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function E(e,r,t){var n=new b(3);return n[0]=e,n[1]=r,n[2]=t,n}function T(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e}function R(e){return e[0]=0,e[1]=0,e[2]=0,e}(function(){var e=w();return function(r,t,n,o,i,c){var a,l;for(t||(t=3),n||(n=0),o?l=Math.min(o*t+n,r.length):l=r.length,a=n;a<l;a+=t)e[0]=r[a],e[1]=r[a+1],e[2]=r[a+2],i(e,e,c),r[a]=e[0],r[a+1]=e[1],r[a+2]=e[2];return r}})();class N{buffer;cntx;vert_num;vertex_size;constructor(r,t,n=3){this.cntx=r,this.buffer=r.createBuffer(),this.vert_num=t.length,this.vertex_size=n,this.bind(),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW)}bind(){this.cntx.bindBuffer(this.cntx.ARRAY_BUFFER,this.buffer)}}class k{cntx;vao;vbo;ebo=void 0;constructor(r,t,n=void 0){this.cntx=r,this.vbo=t,this.ebo=n,this.vao=r.createVertexArray()}bind(){this.cntx.bindVertexArray(this.vao),this.vbo.bind(),this.ebo&&this.ebo.bind()}link(r,t){this.bind();const n=this.cntx.getAttribLocation(r,t.name);this.cntx.enableVertexAttribArray(n),this.cntx.vertexAttribPointer(n,t.size,t.type,t.normalized,t.stride,t.offset)}draw(r,t=this.cntx.TRIANGLES,n=0){this.cntx.useProgram(r),this.bind(),this.ebo?this.cntx.drawElements(t,this.ebo.ind_num,this.cntx.UNSIGNED_SHORT,n):this.cntx.drawArrays(t,n,this.vbo.vert_num/this.vbo.vertex_size)}}function C(e,r,t){const n=P(e,e.VERTEX_SHADER,r);if(!n){console.log("Could not compile vertex shader!");return}const o=P(e,e.FRAGMENT_SHADER,t);if(!o){console.log("Could not compile fragment shader!");return}const i=M(e,n,o);return e.deleteShader(n),e.deleteShader(o),i}function P(e,r,t){let n=e.createShader(r);if(!n)return;if(e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n}function M(e,r,t){const n=e.createProgram();if(e.attachShader(n,r),e.attachShader(n,t),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS))return n;console.log(e.getProgramInfoLog(n)),e.deleteProgram(n)}const z=`#version 300 es
     
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNorm;

out vec3 Normal;
out vec3 FragPos;

uniform mat4 model;
uniform mat4 view; 
uniform mat4 proj;

void main() {
  Normal = mat3(transpose(inverse(model))) * aNorm;

  FragPos = vec3(model * vec4(aPos, 1.0));
  gl_Position = proj * view * vec4(FragPos, 1.0);
}
`,O=`#version 300 es

precision highp float;

in vec3 Normal;
in vec3 FragPos; 

uniform vec3 lightPos;
     
out vec4 outColor;
 
void main() {

  vec3 lightColor = vec3(1.0);

  float ambientStrength = 0.1;
  vec3 ambient = ambientStrength * lightColor;

  vec3 norm = normalize(Normal);
  vec3 lightDir = normalize(lightPos - FragPos);
  float diff = max(dot(norm, lightDir), 0.0);
  vec3 diffuse = diff * lightColor;

  vec3 result = (ambient + diffuse) * vec3(0.1, 0.6, 0.5);
  outColor = vec4(result, 1.0);
}
`;let f=w();R(f);let _=Date.now();function D(){const e=document.querySelector("#webgl-canvas");if(!e){console.log("Could not initialize canvas element!");return}const r=e?.getContext("webgl2",{depth:!0});if(!r){console.log("WebGL 2 is not supported on this system!");return}const t=C(r,z,O);if(!t){console.log("Could not compile shaders into the program!");return}const n=new N(r,[-.5,-.5,-.5,0,0,-1,.5,-.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1,-.5,.5,-.5,0,0,-1,-.5,-.5,-.5,0,0,-1,-.5,-.5,.5,0,0,1,.5,-.5,.5,0,0,1,.5,.5,.5,0,0,1,.5,.5,.5,0,0,1,-.5,.5,.5,0,0,1,-.5,-.5,.5,0,0,1,-.5,.5,.5,-1,0,0,-.5,.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,-.5,.5,-1,0,0,-.5,.5,.5,-1,0,0,.5,.5,.5,1,0,0,.5,.5,-.5,1,0,0,.5,-.5,-.5,1,0,0,.5,-.5,-.5,1,0,0,.5,-.5,.5,1,0,0,.5,.5,.5,1,0,0,-.5,-.5,-.5,0,-1,0,.5,-.5,-.5,0,-1,0,.5,-.5,.5,0,-1,0,.5,-.5,.5,0,-1,0,-.5,-.5,.5,0,-1,0,-.5,-.5,-.5,0,-1,0,-.5,.5,-.5,0,1,0,.5,.5,-.5,0,1,0,.5,.5,.5,0,1,0,.5,.5,.5,0,1,0,-.5,.5,.5,0,1,0,-.5,.5,-.5,0,1,0],6),o=new k(r,n);return o.link(t,{name:"aPos",size:3,type:r.FLOAT,normalized:!1,stride:6*Float32Array.BYTES_PER_ELEMENT,offset:0}),o.link(t,{name:"aNorm",size:3,type:r.FLOAT,normalized:!1,stride:6*Float32Array.BYTES_PER_ELEMENT,offset:3*Float32Array.BYTES_PER_ELEMENT}),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clearColor(0,0,0,0),r.enable(r.DEPTH_TEST),r.depthFunc(r.LESS),r.clearDepth(1),{cntx:r,program:t,vao:o}}function U(e,r,t,n){const o=1/Math.tan(e/2),i=1/(t-n);return F(o/r,0,0,0,0,o,0,0,0,0,(n+t)*i,-1,0,0,2*n*t*i,0)}function B(){const e=D();if(e){let r=function(u){t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const g=(u-_)/1e3;_=u,L(c,c,g*Math.PI/4),T(i,f,g),S(a,a,i),t.uniformMatrix4fv(l,!1,c,0,0),t.uniformMatrix4fv(m,!1,a,0,0),o.draw(n),requestAnimationFrame(r)};const{cntx:t,program:n,vao:o}=e;let i=w(),c=y(),a=y();S(a,a,E(0,0,-5)),t.useProgram(n);const l=t.getUniformLocation(n,"model"),m=t.getUniformLocation(n,"view"),d=U(90,t.canvas.width/t.canvas.height,.1,100);t.uniformMatrix4fv(t.getUniformLocation(n,"proj"),!1,d,0,0);const h=t.getUniformLocation(n,"lightPos");let v=E(5,10,5);t.uniform3fv(h,v),requestAnimationFrame(r)}}window.addEventListener("keydown",e=>{switch(e.key){case"ArrowDown":f[2]=-10;break;case"ArrowRight":f[0]=-10;break;case"ArrowUp":f[2]=10;break;case"ArrowLeft":f[0]=10;break;case" ":f[1]=-10;break;case"Control":f[1]=10;break}});window.addEventListener("keyup",e=>{switch(e.key){case"ArrowDown":f[2]=0;break;case"ArrowRight":f[0]=0;break;case"ArrowUp":f[2]=0;break;case"ArrowLeft":f[0]=0;break;case" ":f[1]=0;break;case"Control":f[1]=0;break}});B();
