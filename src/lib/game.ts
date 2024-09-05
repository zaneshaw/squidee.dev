class Vector {
	x: number;
	y: number;
	static readonly zero: Vector = new Vector(0, 0);
	static readonly one: Vector = new Vector(1, 1);

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}
}

class Geometry {
	pos: Vector;

	constructor(pos: Vector) {
		this.pos = pos;
	}
}

class Box extends Geometry {
	size: Vector;

	constructor(pos: Vector, size: Vector) {
		super(pos);
		this.size = size;
	}
}

const width = 40;
const height = 40;
const speed = 0.2;
const unitSize = 12.75;

let playerPosition = new Vector();
export let playerVelocity = new Vector();

let debugCtx: CanvasRenderingContext2D;
let jumpPower = 0;
let jumpDir = 0;
let isFalling = false;
let isHoldingJump = false;
export let screen: string[][];
let worldGeometry: Geometry[] = [new Box(new Vector(10, 30), new Vector(5, 5))];

function init() {
	clear();
	drawPlayer();

	setInterval(() => {
		debugDraw();
	}, 20);
}

function clear() {
	screen = new Array(height).fill(null).map(() => new Array(width).fill(null));
}

export function setCanvas(canvas: HTMLCanvasElement) {
	canvas.width = width * unitSize;
	canvas.height = height * unitSize;
	debugCtx = canvas.getContext("2d")!;
}

function debugDraw() {
	debugCtx.clearRect(0, 0, width * unitSize, height * unitSize);
	if (debugCtx) {
		debugCtx.fillStyle = isHoldingJump ? "red" : isFalling ? "magenta" : "lime";
		debugCtx.fillRect(playerPosition.x * unitSize, playerPosition.y * unitSize, unitSize, unitSize);
	}

	debugCtx.strokeStyle = "white";
	debugCtx.lineWidth = 2;
	for (const geometry of worldGeometry) {
		if (geometry instanceof Box) {
			debugCtx.strokeRect(geometry.pos.x * unitSize, geometry.pos.y * unitSize, geometry.size.x * unitSize, geometry.size.y * unitSize);
		}
	}
}

export function holdJump() {
	if (!isFalling) {
		isHoldingJump = true;
		playerVelocity.x = 0;
	}
}

export function releaseJump() {
	playerVelocity.x = 0.5 * jumpDir;
	playerVelocity.y -= Number(jumpPower.toFixed(1));

	jumpPower = 0;
	isHoldingJump = false;
}

export function processPhysics() {
	playerVelocity.y += 0.05; // gravity
	playerVelocity.y = clamp(playerVelocity.y, -Infinity, 1);

	playerPosition.x += playerVelocity.x;
	playerPosition.y += playerVelocity.y;

	// bounds collision
	if (playerPosition.y >= height - 1) {
		playerVelocity.y = 0;
		isFalling = false;
	} else {
		isFalling = true;
	}

	// geometry collision
	for (const geometry of worldGeometry) {
		if (geometry instanceof Box) {
			// idk lol
		}
	}

	if (isHoldingJump) jumpPower = (jumpPower + 0.02) ** 0.95;
	jumpPower = clamp(jumpPower, 0, 1.2);

	playerPosition.x = clamp(playerPosition.x, 0, width - 1);
	playerPosition.y = clamp(playerPosition.y, 0, height - 1);

	clear();
	// drawPlayer();
}

export function move(xDir: number) {
	xDir = Math.sign(xDir);
	if (isHoldingJump) {
		jumpDir = xDir;
	} else if (!isFalling) {
		playerVelocity.x = xDir * speed;
	}
}

function drawPlayer() {
	screen[Math.round(playerPosition.y)][Math.round(playerPosition.x)] = isHoldingJump ? "o" : "O";
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

init();
