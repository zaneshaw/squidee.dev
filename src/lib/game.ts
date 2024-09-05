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
	playerSide: "above" | "below" | "left" | "right" | null = null;

	constructor(pos: Vector, size: Vector) {
		super(pos);
		this.size = size;
	}
}

class Player extends Box {
	readonly speed = 0.2;
	velocity: Vector = new Vector();
	isFalling: boolean = false;
	isHoldingJump: boolean = false;
	jumpPower: number = 0;
	jumpDir: number = 0;

	constructor(pos: Vector, size: Vector) {
		super(pos, size);
	}
}

const width = 40;
const height = 40;
const unitSize = 12.75;

let player = new Player(new Vector(12, 0), Vector.one);

let debugCtx: CanvasRenderingContext2D;
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
	if (debugCtx) {
		debugCtx.clearRect(0, 0, width * unitSize, height * unitSize);

		// debugCtx.fillStyle = player.isHoldingJump ? "red" : player.isFalling ? "magenta" : "lime";
		// debugCtx.fillRect(player.pos.x * unitSize, player.pos.y * unitSize, unitSize, unitSize);

		debugCtx.strokeStyle = "white";
		debugCtx.lineWidth = 2;
		for (const geometry of worldGeometry) {
			if (geometry instanceof Box) {
				debugCtx.strokeRect(geometry.pos.x * unitSize, geometry.pos.y * unitSize, geometry.size.x * unitSize, geometry.size.y * unitSize);
			}
		}
	}
}

export function holdJump() {
	if (!player.isFalling) {
		player.isHoldingJump = true;
		player.velocity.x = 0;
	}
}

export function releaseJump() {
	player.velocity.x = 0.5 * player.jumpDir;
	player.velocity.y -= Number(player.jumpPower.toFixed(1));

	player.jumpPower = 0;
	player.isHoldingJump = false;
	player.isFalling = true;
}

export function processPhysics() {
	for (const geometry of worldGeometry) {
		if (geometry instanceof Box) {
			if (player.pos.y > geometry.pos.y + geometry.size.y) {
				geometry.playerSide = "below";
			} else if (player.pos.y + 1 < geometry.pos.y) {
				geometry.playerSide = "above";
			} else if (player.pos.x > geometry.pos.x + geometry.size.x) {
				geometry.playerSide = "right";
			} else if (player.pos.x + 1 < geometry.pos.x) {
				geometry.playerSide = "left";
			} else {
				geometry.playerSide = null;
			}
		}
	}

	if (player.isFalling) {
		player.velocity.y += 0.05; // gravity
		player.velocity.y = clamp(player.velocity.y, -Infinity, 1);
	}

	player.pos.x += player.velocity.x;
	player.pos.y += player.velocity.y;

	if (player.pos.y >= height - 1) {
		player.velocity.y = 0;
		player.isFalling = false;
	} else {
		for (const geometry of worldGeometry) {
			if (geometry instanceof Box) {
				player.isFalling = !isColliding(new Box(new Vector(player.pos.x + 0.25, player.pos.y + 1), new Vector(player.size.x * 0.5, player.size.y * 0.5)), geometry);
			}
		}
	}

	// geometry collision
	for (const geometry of worldGeometry) {
		if (geometry instanceof Box) {
			if (isColliding(player, geometry)) {
				if (geometry.playerSide) {
					if (geometry.playerSide == "above") {
						player.pos.y -= player.velocity.y;
						player.velocity.y = 0;
						player.velocity.x = 0;
						player.isFalling = false;
					} else if (geometry.playerSide == "below") {
						player.pos.y -= player.velocity.y;
						player.velocity.y = 0;
					} else if (geometry.playerSide == "right") {
						player.pos.x -= player.velocity.x;
						player.velocity.x = 0.1;
						player.velocity.y = -0.2;
					} else if (geometry.playerSide == "left") {
						player.pos.x -= player.velocity.x;
						player.velocity.x = -0.1;
						player.velocity.y = -0.2;
					}
				}
			}
		}
	}

	if (player.isHoldingJump) player.jumpPower = (player.jumpPower + 0.02) ** 0.95;
	player.jumpPower = clamp(player.jumpPower, 0, 1.2);

	player.pos.x = clamp(player.pos.x, 0, width - 1);
	player.pos.y = clamp(player.pos.y, 0, height - 1);

	clear();
	drawPlayer();
}

export function move(xDir: number) {
	xDir = Math.sign(xDir);
	if (player.isHoldingJump) {
		player.jumpDir = xDir;
	} else if (!player.isFalling) {
		player.velocity.x = xDir * player.speed;
	}
}

function drawPlayer() {
	screen[Math.round(player.pos.y)][Math.round(player.pos.x)] = player.isHoldingJump ? "o" : "O";
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

function isColliding(a: Box, b: Box) {
	return a.pos.x < b.pos.x + b.size.x && a.pos.x + a.size.x > b.pos.x && a.pos.y < b.pos.y + b.size.y && a.pos.y + a.size.y > b.pos.y;
}

init();
