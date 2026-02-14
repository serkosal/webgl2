#version 300 es

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
