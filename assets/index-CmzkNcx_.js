(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var B=1e-6,_=typeof Float32Array<"u"?Float32Array:Array;function Y(){var e=new _(9);return _!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function x(){var e=new _(16);return _!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function b(e,r,t,n,o,i,a,s,f,h,u,P,y,p,S,E){var l=new _(16);return l[0]=e,l[1]=r,l[2]=t,l[3]=n,l[4]=o,l[5]=i,l[6]=a,l[7]=s,l[8]=f,l[9]=h,l[10]=u,l[11]=P,l[12]=y,l[13]=p,l[14]=S,l[15]=E,l}function j(e,r,t){var n=r[0],o=r[1],i=r[2],a=r[3],s=r[4],f=r[5],h=r[6],u=r[7],P=r[8],y=r[9],p=r[10],S=r[11],E=r[12],l=r[13],T=r[14],A=r[15],v=t[0],m=t[1],d=t[2],g=t[3];return e[0]=v*n+m*s+d*P+g*E,e[1]=v*o+m*f+d*y+g*l,e[2]=v*i+m*h+d*p+g*T,e[3]=v*a+m*u+d*S+g*A,v=t[4],m=t[5],d=t[6],g=t[7],e[4]=v*n+m*s+d*P+g*E,e[5]=v*o+m*f+d*y+g*l,e[6]=v*i+m*h+d*p+g*T,e[7]=v*a+m*u+d*S+g*A,v=t[8],m=t[9],d=t[10],g=t[11],e[8]=v*n+m*s+d*P+g*E,e[9]=v*o+m*f+d*y+g*l,e[10]=v*i+m*h+d*p+g*T,e[11]=v*a+m*u+d*S+g*A,v=t[12],m=t[13],d=t[14],g=t[15],e[12]=v*n+m*s+d*P+g*E,e[13]=v*o+m*f+d*y+g*l,e[14]=v*i+m*h+d*p+g*T,e[15]=v*a+m*u+d*S+g*A,e}var U=j;function w(){var e=new _(3);return _!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function H(e){var r=e[0],t=e[1],n=e[2];return Math.sqrt(r*r+t*t+n*n)}function M(e,r,t){var n=new _(3);return n[0]=e,n[1]=r,n[2]=t,n}function F(e,r,t){return e[0]=r[0]+t[0],e[1]=r[1]+t[1],e[2]=r[2]+t[2],e}function N(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e}function G(e,r){var t=r[0],n=r[1],o=r[2],i=t*t+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),e[0]=r[0]*i,e[1]=r[1]*i,e[2]=r[2]*i,e}function X(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}function D(e,r,t){var n=r[0],o=r[1],i=r[2],a=t[0],s=t[1],f=t[2];return e[0]=o*f-i*s,e[1]=i*a-n*f,e[2]=n*s-o*a,e}var K=H;(function(){var e=w();return function(r,t,n,o,i,a){var s,f;for(t||(t=3),n||(n=0),o?f=Math.min(o*t+n,r.length):f=r.length,s=n;s<f;s+=t)e[0]=r[s],e[1]=r[s+1],e[2]=r[s+2],i(e,e,a),r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2];return r}})();function W(){var e=new _(4);return _!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Z(e,r,t,n){var o=new _(4);return o[0]=e,o[1]=r,o[2]=t,o[3]=n,o}function J(e,r){var t=r[0],n=r[1],o=r[2],i=r[3],a=t*t+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t*a,e[1]=n*a,e[2]=o*a,e[3]=i*a,e}(function(){var e=W();return function(r,t,n,o,i,a){var s,f;for(t||(t=4),n||(n=0),o?f=Math.min(o*t+n,r.length):f=r.length,s=n;s<f;s+=t)e[0]=r[s],e[1]=r[s+1],e[2]=r[s+2],e[3]=r[s+3],i(e,e,a),r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2],r[s+3]=e[3];return r}})();function k(){var e=new _(4);return _!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Q(e,r,t){t=t*.5;var n=Math.sin(t);return e[0]=n*r[0],e[1]=n*r[1],e[2]=n*r[2],e[3]=Math.cos(t),e}function ee(e,r,t){var n=r[0],o=r[1],i=r[2],a=r[3],s=t[0],f=t[1],h=t[2],u=t[3];return e[0]=n*u+a*s+o*h-i*f,e[1]=o*u+a*f+i*s-n*h,e[2]=i*u+a*h+n*f-o*s,e[3]=a*u-n*s-o*f-i*h,e}function L(e,r,t,n){var o=r[0],i=r[1],a=r[2],s=r[3],f=t[0],h=t[1],u=t[2],P=t[3],y,p,S,E,l;return p=o*f+i*h+a*u+s*P,p<0&&(p=-p,f=-f,h=-h,u=-u,P=-P),1-p>B?(y=Math.acos(p),S=Math.sin(y),E=Math.sin((1-n)*y)/S,l=Math.sin(n*y)/S):(E=1-n,l=n),e[0]=E*o+l*f,e[1]=E*i+l*h,e[2]=E*a+l*u,e[3]=E*s+l*P,e}function re(e,r){return e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e[3]=r[3],e}function te(e,r){var t=r[0]+r[4]+r[8],n;if(t>0)n=Math.sqrt(t+1),e[3]=.5*n,n=.5/n,e[0]=(r[5]-r[7])*n,e[1]=(r[6]-r[2])*n,e[2]=(r[1]-r[3])*n;else{var o=0;r[4]>r[0]&&(o=1),r[8]>r[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(r[o*3+o]-r[i*3+i]-r[a*3+a]+1),e[o]=.5*n,n=.5/n,e[3]=(r[i*3+a]-r[a*3+i])*n,e[i]=(r[i*3+o]+r[o*3+i])*n,e[a]=(r[a*3+o]+r[o*3+a])*n}return e}var z=Z,O=ee,R=J;(function(){var e=w(),r=M(1,0,0),t=M(0,1,0);return function(n,o,i){var a=X(o,i);return a<-.999999?(D(e,r,o),K(e)<1e-6&&D(e,t,o),G(e,e),Q(n,e,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(D(e,o,i),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+a,R(n,n))}})();(function(){var e=k(),r=k();return function(t,n,o,i,a,s){return L(e,n,a,s),L(r,o,i,s),L(t,e,r,2*s*(1-s)),t}})();(function(){var e=Y();return function(r,t,n,o){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=o[0],e[4]=o[1],e[7]=o[2],e[2]=-t[0],e[5]=-t[1],e[8]=-t[2],R(r,te(r,e))}})();class ne{proj=x();dir=z(0,0,-1,0);up=z(0,1,0,0);pos=w();rot_vel=w();velocity=w();constructor(r=M(0,0,-10),t=45,n=2,o=.1,i=10){this.setPos(r);const a=this.orthoFromFOV(t,n,o,i);U(a,this.getProj(o,i),a),this.proj=a}orthoFromPlanes(r,t,n,o,i,a){return b(2/(n-o),0,0,(n+o)/(o-n),0,2/(i-a),0,(i+a)/(a-i),0,0,2/(r-t),(t+r)/(r-t),0,0,0,1)}orthoFromFOV(r,t,n,o){const i=n*Math.tan(r/2/180*Math.PI),a=i*t;return this.orthoFromPlanes(n,o,a,-a,i,-i)}getPos(){return this.pos}getProj(r,t){return b(1,0,0,0,0,1,0,0,0,0,t+r,t,0,0,-1,0)}getDir(){return M(this.dir[0],this.dir[1],this.dir[2])}getRight(){let r=w();return D(r,this.getDir(),this.getUp()),r}getUp(){return M(this.up[0],this.up[1],this.up[2])}getRotMatrix(){const r=this.getRight(),t=this.getUp(),n=this.getDir();return b(r[0],t[0],n[0],0,r[1],t[1],n[1],0,r[2],t[2],n[2],0,0,0,0,1)}lookAt(){let r=x();return U(r,this.getRotMatrix(),b(1,0,0,0,0,1,0,0,0,0,1,0,-this.pos[0],-this.pos[1],-this.pos[2],1)),r}setPos(r){F(this.pos,w(),r)}move(r,t=1){let n=this.getDir();N(n,n,-r[2]*t);let o=this.getUp();N(o,o,r[1]*t);let i=this.getRight();N(i,i,r[0]*t),F(this.pos,this.pos,n),F(this.pos,this.pos,o),F(this.pos,this.pos,i)}rotate(r,t=90,n=1){const o=t/180*Math.PI/2*n,i=z(Math.sin(o)*r[0],Math.sin(o)*r[1],Math.sin(o)*r[2],Math.cos(o));let a=k();re(a,i),O(this.dir,i,this.dir),O(this.dir,this.dir,a),R(this.dir,this.dir),O(this.up,i,this.up),O(this.up,this.up,a),R(this.up,this.up)}}class V{buffer;cntx;vert_num;vertex_size;constructor(r,t,n=3){this.cntx=r,this.buffer=r.createBuffer(),this.vert_num=t.length,this.vertex_size=n,this.bind(),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW)}bind(){this.cntx.bindBuffer(this.cntx.ARRAY_BUFFER,this.buffer)}}class C{cntx;vao;vbo;ebo=void 0;constructor(r,t,n=void 0){this.cntx=r,this.vbo=t,this.ebo=n,this.vao=r.createVertexArray()}bind(){this.cntx.bindVertexArray(this.vao),this.vbo.bind(),this.ebo&&this.ebo.bind()}link(r,t){this.bind();const n=this.cntx.getAttribLocation(r,t.name);this.cntx.enableVertexAttribArray(n),this.cntx.vertexAttribPointer(n,t.size,t.type,t.normalized,t.stride,t.offset)}draw(r=this.cntx.TRIANGLES,t=0){this.bind(),this.ebo?this.cntx.drawElements(r,this.ebo.ind_num,this.cntx.UNSIGNED_SHORT,t):this.cntx.drawArrays(r,t,this.vbo.vert_num/this.vbo.vertex_size)}}function I(e,r,t){const n=q(e,e.VERTEX_SHADER,r);if(!n){console.log("Could not compile vertex shader!");return}const o=q(e,e.FRAGMENT_SHADER,t);if(!o){console.log("Could not compile fragment shader!");return}const i=oe(e,n,o);return e.deleteShader(n),e.deleteShader(o),i}function q(e,r,t){let n=e.createShader(r);if(!n)return;if(e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n}function oe(e,r,t){const n=e.createProgram();if(e.attachShader(n,r),e.attachShader(n,t),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS))return n;console.log(e.getProgramInfoLog(n)),e.deleteProgram(n)}const ie=`#version 300 es
     
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
`,c=new ne;let $=Date.now();function le(){const e=document.querySelector("#webgl-canvas");if(!e){console.log("Could not initialize canvas element!");return}const r=e?.getContext("webgl2",{depth:!0});if(!r){console.log("WebGL 2 is not supported on this system!");return}const t=I(r,ie,ae);if(!t){console.log("Could not compile shaders into the program!");return}const n=I(r,se,ce);if(!n){console.log("Could not compile floor shaders into the program!");return}const o=new V(r,[-.5,-.5,-.5,0,0,-1,.5,-.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1,-.5,.5,-.5,0,0,-1,-.5,-.5,-.5,0,0,-1,-.5,-.5,.5,0,0,1,.5,-.5,.5,0,0,1,.5,.5,.5,0,0,1,.5,.5,.5,0,0,1,-.5,.5,.5,0,0,1,-.5,-.5,.5,0,0,1,-.5,.5,.5,-1,0,0,-.5,.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,-.5,.5,-1,0,0,-.5,.5,.5,-1,0,0,.5,.5,.5,1,0,0,.5,.5,-.5,1,0,0,.5,-.5,-.5,1,0,0,.5,-.5,-.5,1,0,0,.5,-.5,.5,1,0,0,.5,.5,.5,1,0,0,-.5,-.5,-.5,0,-1,0,.5,-.5,-.5,0,-1,0,.5,-.5,.5,0,-1,0,.5,-.5,.5,0,-1,0,-.5,-.5,.5,0,-1,0,-.5,-.5,-.5,0,-1,0,-.5,.5,-.5,0,1,0,.5,.5,-.5,0,1,0,.5,.5,.5,0,1,0,.5,.5,.5,0,1,0,-.5,.5,.5,0,1,0,-.5,.5,-.5,0,1,0],6),i=new C(r,o);r.useProgram(t),i.link(t,{name:"aPos",size:3,type:r.FLOAT,normalized:!1,stride:6*Float32Array.BYTES_PER_ELEMENT,offset:0}),i.link(t,{name:"aNorm",size:3,type:r.FLOAT,normalized:!1,stride:6*Float32Array.BYTES_PER_ELEMENT,offset:3*Float32Array.BYTES_PER_ELEMENT});const a=new V(r,[-100,-.5,100,100,-.5,100,100,-.5,-100,100,-.5,-100,-100,-.5,-100,-100,-.5,100]),s=new C(r,a);return r.useProgram(n),s.link(n,{name:"aPos",size:3,type:r.FLOAT,normalized:!1,stride:3*Float32Array.BYTES_PER_ELEMENT,offset:0}),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clearColor(0,0,0,1),r.enable(r.DEPTH_TEST),r.depthFunc(r.LESS),r.clearDepth(1),{cntx:r,program:t,floor_program:n,vao:i,floor_vao:s}}function fe(){const e=le();if(e){let r=function(T){t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const A=(T-$)/1e3;if($=T,s&&f&&h){const v=c.getPos();s.innerText=`x: ${v[0]}`,f.innerText=`y: ${v[1]}`,h.innerText=`z: ${v[2]}`}if(u&&P&&y){const v=c.getDir();u.innerText=`x: ${v[0]}`,P.innerText=`y: ${v[1]}`,y.innerText=`z: ${v[2]}`}c.move(c.velocity,A),c.rotate(c.getRight(),c.rot_vel[0],A),c.rotate(c.getUp(),c.rot_vel[1],A),c.rotate(c.getDir(),c.rot_vel[2],A),t.useProgram(o),t.uniformMatrix4fv(l,!1,c.lookAt(),0,0),a.draw(),t.useProgram(n),t.uniformMatrix4fv(S,!1,p,0,0),t.uniformMatrix4fv(E,!1,c.lookAt(),0,0),i.draw(),requestAnimationFrame(r)};const{cntx:t,program:n,floor_program:o,vao:i,floor_vao:a}=e,s=document.querySelector("#cam-pos-x"),f=document.querySelector("#cam-pos-y"),h=document.querySelector("#cam-pos-z"),u=document.querySelector("#cam-dir-x"),P=document.querySelector("#cam-dir-y"),y=document.querySelector("#cam-dir-z");let p=x();t.useProgram(n);const S=t.getUniformLocation(n,"model"),E=t.getUniformLocation(n,"view");t.uniformMatrix4fv(t.getUniformLocation(n,"proj"),!1,c.proj,0,0),t.uniform3fv(t.getUniformLocation(n,"lightPos"),M(5,10,5)),t.useProgram(o),t.uniform3fv(t.getUniformLocation(o,"lightPos"),M(5,10,5)),t.uniformMatrix4fv(t.getUniformLocation(o,"proj"),!1,c.proj);const l=t.getUniformLocation(o,"view");requestAnimationFrame(r)}}window.addEventListener("keydown",e=>{switch(e.key){case"s":c.velocity[2]=-5;break;case"d":c.velocity[0]=5;break;case"w":c.velocity[2]=5;break;case"a":c.velocity[0]=-5;break;case" ":c.velocity[1]=5;break;case"c":c.velocity[1]=-5;break;case"ArrowDown":c.rot_vel[0]=15;break;case"ArrowRight":c.rot_vel[1]=15;break;case"ArrowUp":c.rot_vel[0]=-15;break;case"ArrowLeft":c.rot_vel[1]=-15;break;case"q":c.rot_vel[2]=-15;break;case"e":c.rot_vel[2]=15;break}});window.addEventListener("keyup",e=>{switch(e.key){case"s":c.velocity[2]=0;break;case"d":c.velocity[0]=0;break;case"w":c.velocity[2]=0;break;case"a":c.velocity[0]=0;break;case" ":c.velocity[1]=0;break;case"c":c.velocity[1]=0;break;case"ArrowDown":c.rot_vel[0]=0;break;case"ArrowRight":c.rot_vel[1]=0;break;case"ArrowUp":c.rot_vel[0]=0;break;case"ArrowLeft":c.rot_vel[1]=0;break;case"q":c.rot_vel[2]=0;break;case"e":c.rot_vel[2]=0;break}});fe();
