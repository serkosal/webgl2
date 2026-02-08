#version 300 es
     
in vec4 a_position;

uniform mat4 trans;

void main() {
  gl_Position = trans * a_position;
}
