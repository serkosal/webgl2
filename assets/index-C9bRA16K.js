(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var $=1e-6,y=typeof Float32Array<"u"?Float32Array:Array;function j(){var e=new y(9);return y!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function k(){var e=new y(16);return y!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function b(e,r,t,n,o,i,a,s,l,d,g,E,p,P,A,_){var f=new y(16);return f[0]=e,f[1]=r,f[2]=t,f[3]=n,f[4]=o,f[5]=i,f[6]=a,f[7]=s,f[8]=l,f[9]=d,f[10]=g,f[11]=E,f[12]=p,f[13]=P,f[14]=A,f[15]=_,f}function Y(e,r,t){var n=r[0],o=r[1],i=r[2],a=r[3],s=r[4],l=r[5],d=r[6],g=r[7],E=r[8],p=r[9],P=r[10],A=r[11],_=r[12],f=r[13],M=r[14],T=r[15],v=t[0],h=t[1],u=t[2],m=t[3];return e[0]=v*n+h*s+u*E+m*_,e[1]=v*o+h*l+u*p+m*f,e[2]=v*i+h*d+u*P+m*M,e[3]=v*a+h*g+u*A+m*T,v=t[4],h=t[5],u=t[6],m=t[7],e[4]=v*n+h*s+u*E+m*_,e[5]=v*o+h*l+u*p+m*f,e[6]=v*i+h*d+u*P+m*M,e[7]=v*a+h*g+u*A+m*T,v=t[8],h=t[9],u=t[10],m=t[11],e[8]=v*n+h*s+u*E+m*_,e[9]=v*o+h*l+u*p+m*f,e[10]=v*i+h*d+u*P+m*M,e[11]=v*a+h*g+u*A+m*T,v=t[12],h=t[13],u=t[14],m=t[15],e[12]=v*n+h*s+u*E+m*_,e[13]=v*o+h*l+u*p+m*f,e[14]=v*i+h*d+u*P+m*M,e[15]=v*a+h*g+u*A+m*T,e}var V=Y;function S(){var e=new y(3);return y!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function H(e){var r=e[0],t=e[1],n=e[2];return Math.sqrt(r*r+t*t+n*n)}function w(e,r,t){var n=new y(3);return n[0]=e,n[1]=r,n[2]=t,n}function F(e,r,t){return e[0]=r[0]+t[0],e[1]=r[1]+t[1],e[2]=r[2]+t[2],e}function N(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e}function G(e,r){var t=r[0],n=r[1],o=r[2],i=t*t+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),e[0]=r[0]*i,e[1]=r[1]*i,e[2]=r[2]*i,e}function K(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}function R(e,r,t){var n=r[0],o=r[1],i=r[2],a=t[0],s=t[1],l=t[2];return e[0]=o*l-i*s,e[1]=i*a-n*l,e[2]=n*s-o*a,e}var W=H;(function(){var e=S();return function(r,t,n,o,i,a){var s,l;for(t||(t=3),n||(n=0),o?l=Math.min(o*t+n,r.length):l=r.length,s=n;s<l;s+=t)e[0]=r[s],e[1]=r[s+1],e[2]=r[s+2],i(e,e,a),r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2];return r}})();function X(){var e=new y(4);return y!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function J(e,r,t,n){var o=new y(4);return o[0]=e,o[1]=r,o[2]=t,o[3]=n,o}function Q(e,r){var t=r[0],n=r[1],o=r[2],i=r[3],a=t*t+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t*a,e[1]=n*a,e[2]=o*a,e[3]=i*a,e}(function(){var e=X();return function(r,t,n,o,i,a){var s,l;for(t||(t=4),n||(n=0),o?l=Math.min(o*t+n,r.length):l=r.length,s=n;s<l;s+=t)e[0]=r[s],e[1]=r[s+1],e[2]=r[s+2],e[3]=r[s+3],i(e,e,a),r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2],r[s+3]=e[3];return r}})();function U(){var e=new y(4);return y!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Z(e,r,t){t=t*.5;var n=Math.sin(t);return e[0]=n*r[0],e[1]=n*r[1],e[2]=n*r[2],e[3]=Math.cos(t),e}function ee(e,r,t){var n=r[0],o=r[1],i=r[2],a=r[3],s=t[0],l=t[1],d=t[2],g=t[3];return e[0]=n*g+a*s+o*d-i*l,e[1]=o*g+a*l+i*s-n*d,e[2]=i*g+a*d+n*l-o*s,e[3]=a*g-n*s-o*l-i*d,e}function L(e,r,t,n){var o=r[0],i=r[1],a=r[2],s=r[3],l=t[0],d=t[1],g=t[2],E=t[3],p,P,A,_,f;return P=o*l+i*d+a*g+s*E,P<0&&(P=-P,l=-l,d=-d,g=-g,E=-E),1-P>$?(p=Math.acos(P),A=Math.sin(p),_=Math.sin((1-n)*p)/A,f=Math.sin(n*p)/A):(_=1-n,f=n),e[0]=_*o+f*l,e[1]=_*i+f*d,e[2]=_*a+f*g,e[3]=_*s+f*E,e}function re(e,r){return e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e[3]=r[3],e}function te(e,r){var t=r[0]+r[4]+r[8],n;if(t>0)n=Math.sqrt(t+1),e[3]=.5*n,n=.5/n,e[0]=(r[5]-r[7])*n,e[1]=(r[6]-r[2])*n,e[2]=(r[1]-r[3])*n;else{var o=0;r[4]>r[0]&&(o=1),r[8]>r[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(r[o*3+o]-r[i*3+i]-r[a*3+a]+1),e[o]=.5*n,n=.5/n,e[3]=(r[i*3+a]-r[a*3+i])*n,e[i]=(r[i*3+o]+r[o*3+i])*n,e[a]=(r[a*3+o]+r[o*3+a])*n}return e}var z=J,O=ee,D=Q;(function(){var e=S(),r=w(1,0,0),t=w(0,1,0);return function(n,o,i){var a=K(o,i);return a<-.999999?(R(e,r,o),W(e)<1e-6&&R(e,t,o),G(e,e),Z(n,e,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(R(e,o,i),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+a,D(n,n))}})();(function(){var e=U(),r=U();return function(t,n,o,i,a,s){return L(e,n,a,s),L(r,o,i,s),L(t,e,r,2*s*(1-s)),t}})();(function(){var e=j();return function(r,t,n,o){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=o[0],e[4]=o[1],e[7]=o[2],e[2]=-t[0],e[5]=-t[1],e[8]=-t[2],D(r,te(r,e))}})();class ne{proj=k();dir=z(0,0,-1,0);up=z(0,1,0,0);pos=S();rot_vel=S();velocity=S();constructor(r=w(0,0,-10),t=45,n=2,o=.1,i=10){this.setPos(r);const a=this.orthoFromFOV(t,n,o,i);V(a,this.getProj(o,i),a),this.proj=a}orthoFromPlanes(r,t,n,o,i,a){return b(2/(n-o),0,0,(n+o)/(o-n),0,2/(i-a),0,(i+a)/(a-i),0,0,2/(r-t),(t+r)/(r-t),0,0,0,1)}orthoFromFOV(r,t,n,o){const i=n*Math.tan(r/2/180*Math.PI),a=i*t;return this.orthoFromPlanes(n,o,a,-a,i,-i)}getProj(r,t){return b(1,0,0,0,0,1,0,0,0,0,t+r,t,0,0,-1,0)}getDir(){return w(this.dir[0],this.dir[1],this.dir[2])}getRight(){let r=S();return R(r,this.getDir(),this.getUp()),r}getUp(){return w(this.up[0],this.up[1],this.up[2])}getRotMatrix(){const r=this.getRight(),t=this.getUp(),n=this.getDir();return b(r[0],t[0],n[0],0,r[1],t[1],n[1],0,r[2],t[2],n[2],0,0,0,0,1)}lookAt(){let r=k();return V(r,this.getRotMatrix(),b(1,0,0,0,0,1,0,0,0,0,1,0,-this.pos[0],-this.pos[1],-this.pos[2],1)),r}setPos(r){F(this.pos,S(),r)}move(r,t=1){let n=this.getDir();N(n,n,-r[2]*t);let o=this.getUp();N(o,o,r[1]*t);let i=this.getRight();N(i,i,r[0]*t),F(this.pos,this.pos,n),F(this.pos,this.pos,o),F(this.pos,this.pos,i)}rotate(r,t=90,n=1){const o=t/180*Math.PI/2*n,i=z(Math.sin(o)*r[0],Math.sin(o)*r[1],Math.sin(o)*r[2],Math.cos(o));let a=U();re(a,i),O(this.dir,i,this.dir),O(this.dir,this.dir,a),D(this.dir,this.dir),O(this.up,i,this.up),O(this.up,this.up,a),D(this.up,this.up)}}class C{buffer;cntx;vert_num;vertex_size;constructor(r,t,n=3){this.cntx=r,this.buffer=r.createBuffer(),this.vert_num=t.length,this.vertex_size=n,this.bind(),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW)}bind(){this.cntx.bindBuffer(this.cntx.ARRAY_BUFFER,this.buffer)}}class x{cntx;vao;vbo;ebo=void 0;constructor(r,t,n=void 0){this.cntx=r,this.vbo=t,this.ebo=n,this.vao=r.createVertexArray()}bind(){this.cntx.bindVertexArray(this.vao),this.vbo.bind(),this.ebo&&this.ebo.bind()}link(r,t){this.bind();const n=this.cntx.getAttribLocation(r,t.name);this.cntx.enableVertexAttribArray(n),this.cntx.vertexAttribPointer(n,t.size,t.type,t.normalized,t.stride,t.offset)}draw(r,t=this.cntx.TRIANGLES,n=0){this.cntx.useProgram(r),this.bind(),this.ebo?this.cntx.drawElements(t,this.ebo.ind_num,this.cntx.UNSIGNED_SHORT,n):this.cntx.drawArrays(t,n,this.vbo.vert_num/this.vbo.vertex_size)}}function I(e,r,t){const n=q(e,e.VERTEX_SHADER,r);if(!n){console.log("Could not compile vertex shader!");return}const o=q(e,e.FRAGMENT_SHADER,t);if(!o){console.log("Could not compile fragment shader!");return}const i=oe(e,n,o);return e.deleteShader(n),e.deleteShader(o),i}function q(e,r,t){let n=e.createShader(r);if(!n)return;if(e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n}function oe(e,r,t){const n=e.createProgram();if(e.attachShader(n,r),e.attachShader(n,t),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS))return n;console.log(e.getProgramInfoLog(n)),e.deleteProgram(n)}const ie=`#version 300 es
     
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNorm;

uniform mat4 model;
uniform mat4 view; 
uniform mat4 proj;

out vec3 Normal;
out vec3 FragPos;

void main() {
  Normal = mat3(transpose(inverse(model))) * aNorm;

  FragPos = vec3(model * vec4(aPos, 1.0));
  gl_Position = proj * view * vec4(FragPos, 1.0);
}
`,ae=`#version 300 es

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
`,se=`#version 300 es

precision highp float;

in vec3 aPos;

uniform mat4 view;
uniform mat4 proj;

out vec3 FragPos;

void main() {
    FragPos = aPos;
    vec4 vertPos = proj * view * vec4(FragPos, 1.0);
    gl_Position = vertPos;
}
`,ce=`#version 300 es

precision highp float;

in vec3 FragPos; 

uniform vec3 lightPos;
     
out vec4 outColor;
 
void main() {

  vec3 lightColor = vec3(1.0);

  float ambientStrength = 0.1;
  vec3 ambient = ambientStrength * lightColor;

  vec3  norm = vec3(0.0, 1.0, 0.0);
  vec3  lightDir = normalize(lightPos - FragPos);
  float diff = max(dot(norm, lightDir), 0.0);
  vec3 diffuse = diff * lightColor;

  vec3 result = (ambient + diffuse) * vec3(0.2, 0.2, 0.2);

  outColor = vec4(result, 1.0);
}
`,c=new ne;let B=Date.now();function le(){const e=document.querySelector("#webgl-canvas");if(!e){console.log("Could not initialize canvas element!");return}const r=e?.getContext("webgl2",{depth:!0});if(!r){console.log("WebGL 2 is not supported on this system!");return}const t=I(r,ie,ae);if(!t){console.log("Could not compile shaders into the program!");return}const n=I(r,se,ce);if(!n){console.log("Could not compile floor shaders into the program!");return}const o=new C(r,[-.5,-.5,-.5,0,0,-1,.5,-.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1,-.5,.5,-.5,0,0,-1,-.5,-.5,-.5,0,0,-1,-.5,-.5,.5,0,0,1,.5,-.5,.5,0,0,1,.5,.5,.5,0,0,1,.5,.5,.5,0,0,1,-.5,.5,.5,0,0,1,-.5,-.5,.5,0,0,1,-.5,.5,.5,-1,0,0,-.5,.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,-.5,.5,-1,0,0,-.5,.5,.5,-1,0,0,.5,.5,.5,1,0,0,.5,.5,-.5,1,0,0,.5,-.5,-.5,1,0,0,.5,-.5,-.5,1,0,0,.5,-.5,.5,1,0,0,.5,.5,.5,1,0,0,-.5,-.5,-.5,0,-1,0,.5,-.5,-.5,0,-1,0,.5,-.5,.5,0,-1,0,.5,-.5,.5,0,-1,0,-.5,-.5,.5,0,-1,0,-.5,-.5,-.5,0,-1,0,-.5,.5,-.5,0,1,0,.5,.5,-.5,0,1,0,.5,.5,.5,0,1,0,.5,.5,.5,0,1,0,-.5,.5,.5,0,1,0,-.5,.5,-.5,0,1,0],6),i=new x(r,o);r.useProgram(t),i.link(t,{name:"aPos",size:3,type:r.FLOAT,normalized:!1,stride:6*Float32Array.BYTES_PER_ELEMENT,offset:0}),i.link(t,{name:"aNorm",size:3,type:r.FLOAT,normalized:!1,stride:6*Float32Array.BYTES_PER_ELEMENT,offset:3*Float32Array.BYTES_PER_ELEMENT});const a=new C(r,[-100,-.5,100,100,-.5,100,100,-.5,-100,100,-.5,-100,-100,-.5,-100,-100,-.5,100]),s=new x(r,a);return r.useProgram(n),s.link(n,{name:"aPos",size:3,type:r.FLOAT,normalized:!1,stride:3*Float32Array.BYTES_PER_ELEMENT,offset:0}),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clearColor(0,0,0,1),r.enable(r.DEPTH_TEST),r.depthFunc(r.LESS),r.clearDepth(1),{cntx:r,program:t,floor_program:n,vao:i,floor_vao:s}}function fe(){const e=le();if(e){let r=function(E){t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const p=(E-B)/1e3;B=E,c.move(c.velocity,p),c.rotate(c.getRight(),c.rot_vel[0],p),c.rotate(c.getUp(),c.rot_vel[1],p),c.rotate(c.getDir(),c.rot_vel[2],p),t.useProgram(o),t.uniformMatrix4fv(g,!1,c.lookAt(),0,0),a.draw(o),t.useProgram(n),t.uniformMatrix4fv(l,!1,s,0,0),t.uniformMatrix4fv(d,!1,c.lookAt(),0,0),i.draw(n),requestAnimationFrame(r)};const{cntx:t,program:n,floor_program:o,vao:i,floor_vao:a}=e;let s=k();t.useProgram(n);const l=t.getUniformLocation(n,"model"),d=t.getUniformLocation(n,"view");t.uniformMatrix4fv(t.getUniformLocation(n,"proj"),!1,c.proj,0,0),t.uniform3fv(t.getUniformLocation(n,"lightPos"),w(5,10,5)),t.useProgram(o),t.uniform3fv(t.getUniformLocation(o,"lightPos"),w(5,10,5)),t.uniformMatrix4fv(t.getUniformLocation(o,"proj"),!1,c.proj);const g=t.getUniformLocation(o,"view");requestAnimationFrame(r)}}window.addEventListener("keydown",e=>{switch(e.key){case"s":c.velocity[2]=-5;break;case"d":c.velocity[0]=5;break;case"w":c.velocity[2]=5;break;case"a":c.velocity[0]=-5;break;case" ":c.velocity[1]=5;break;case"Control":c.velocity[1]=-5;break;case"ArrowDown":c.rot_vel[0]=15;break;case"ArrowRight":c.rot_vel[1]=15;break;case"ArrowUp":c.rot_vel[0]=-15;break;case"ArrowLeft":c.rot_vel[1]=-15;break;case"q":c.rot_vel[2]=-15;break;case"e":c.rot_vel[2]=15;break}});window.addEventListener("keyup",e=>{switch(e.key){case"s":c.velocity[2]=0;break;case"d":c.velocity[0]=0;break;case"w":c.velocity[2]=0;break;case"a":c.velocity[0]=0;break;case" ":c.velocity[1]=0;break;case"Control":c.velocity[1]=0;break;case"ArrowDown":c.rot_vel[0]=0;break;case"ArrowRight":c.rot_vel[1]=0;break;case"ArrowUp":c.rot_vel[0]=0;break;case"ArrowLeft":c.rot_vel[1]=0;break;case"q":c.rot_vel[2]=0;break;case"e":c.rot_vel[2]=0;break}});fe();
