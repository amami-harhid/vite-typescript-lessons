import { shaderCode } from "./shader-code";
import { flagmentShaderCode } from "./fragment-shader";
const createVertexShader = (gl:WebGLRenderingContext):WebGLShader => {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if(vertexShader == null){
        throw new Error('vertexShader is null');
    }
    gl.shaderSource(
        vertexShader,
        shaderCode
    );
    gl.compileShader(vertexShader);
    return vertexShader;
}
const createFragmentShader = (gl:WebGLRenderingContext):WebGLShader => {
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if(fragmentShader == null){
        throw new Error('fragmentShader is null');
    }
    gl.shaderSource(
        fragmentShader,
        flagmentShaderCode
    );
    gl.compileShader(fragmentShader);
    return fragmentShader;
}
const createShaderProgram = (gl:WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram => {
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);
	gl.useProgram(shaderProgram);

	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());

    return shaderProgram;
}

export const NUM = {
    /** パーティクルの数 */
    PARTICLES : 200, 
    /** 頂点の数 */
    VERTICES : 4,
    /** パーティクルに存在する点の数 */
    INDICES : 6, // 奇数の場合不安点。 
} as const;

const process = (gl:WebGLRenderingContext, shaderProgram:WebGLProgram): [WebGLUniformLocation, number]=> {
    const attrs = [
	    { name: "a_position", length: 2, offset: 0 }, // e.g. x and y represent 2 spaces in memory
		{ name: "a_startAngle", length: 1, offset: 2 }, // but angle is just 1 value
		{ name: "a_angularVelocity", length: 1, offset: 3 },
		{ name: "a_rotationAxisAngle", length: 1, offset: 4 },
		{ name: "a_particleDistance", length: 1, offset: 5 },
		{ name: "a_particleAngle", length: 1, offset: 6 },
		{ name: "a_particleY", length: 1, offset: 7 },
	];
    const STRIDE = Object.keys(attrs).length + 1;
    for (var i = 0; i < attrs.length; i++) {
		const name = attrs[i].name;
		const length = attrs[i].length;
		const offset = attrs[i].offset;
		const attribLocation = gl.getAttribLocation(shaderProgram, name);
		gl.vertexAttribPointer(attribLocation, length, gl.FLOAT, false, STRIDE * 4, offset * 4);
		gl.enableVertexAttribArray(attribLocation);
	}
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
	// Set up some constants for rendering:

	// Create the arrays of inputs for the vertex shaders
	const vertices = new Float32Array(NUM.PARTICLES * STRIDE * NUM.VERTICES);
	const indices = new Uint16Array(NUM.PARTICLES * NUM.INDICES);

	for (let i = 0; i < NUM.PARTICLES; i++) {
		const axisAngle = Math.random() * Math.PI * 2;
		const startAngle = Math.random() * Math.PI * 2;
		const groupPtr = i * STRIDE * NUM.VERTICES;

		const particleDistance = Math.sqrt(Math.random());
		const particleAngle = Math.random() * Math.PI * 2;
		const particleY = Math.random() * 2.2;
		const angularVelocity = Math.random() * 2 + 1;

		for (let j = 0; j < 4; j++) {
	    	const vertexPtr = groupPtr + j * STRIDE;
			vertices[vertexPtr + 2] = startAngle; // Start angle
			vertices[vertexPtr + 3] = angularVelocity; // Angular velocity
			vertices[vertexPtr + 4] = axisAngle; // Angle diff
			vertices[vertexPtr + 5] = particleDistance; // Distance of the particle from the (0,0,0)
			vertices[vertexPtr + 6] = particleAngle; // Angle around Y axis
			vertices[vertexPtr + 7] = particleY; // Angle around Y axis
		}

		// Coordinates
		vertices[groupPtr] = vertices[groupPtr + STRIDE * 2] = -1;
		vertices[groupPtr + STRIDE] = vertices[groupPtr + STRIDE * 3] = +1;
		vertices[groupPtr + 1] = vertices[groupPtr + STRIDE + 1] = -1;
		vertices[groupPtr + STRIDE * 2 + 1] = vertices[groupPtr + STRIDE * 3 + 1] = +1;

		const indicesPtr = i * NUM.INDICES;
		const vertexPtr = i * NUM.VERTICES;
		indices[indicesPtr] = vertexPtr;
		indices[indicesPtr + 4] = indices[indicesPtr + 1] = vertexPtr + 1;
		indices[indicesPtr + 3] = indices[indicesPtr + 2] = vertexPtr + 2;
		indices[indicesPtr + 5] = vertexPtr + 3;
	}

	// Pass in the data to the WebGL context
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

	const timeUniformLocation = gl.getUniformLocation(shaderProgram, "u_time");
    if(timeUniformLocation == null) {
        throw new Error('timeUniformLocation is null');
    }
	const startTime = (window.performance || Date).now();

	// Start the background colour as black
	gl.clearColor(0, 0, 0, 1);

	// Allow alpha channels on in the vertex shader
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

	// Set the WebGL context to be the full size of the canvas
    const canvas = gl.canvas;
	gl.viewport(0, 0, canvas.width, canvas.height);
    return [timeUniformLocation, startTime];
}
export const createShader = (gl:WebGLRenderingContext):[WebGLUniformLocation, number] => {
    const vertexShader = createVertexShader(gl);
    const fragmentShader = createFragmentShader(gl);
    const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
    const [timeUniformLocation, startTime] = process(gl, shaderProgram);

    return [timeUniformLocation, startTime];
}