import assert from "node:assert/strict"
import test from "node:test"

import {
	RingBand,
	RingDegrees,
	RingEnd,
	RingFilled,
	RingStart,
	RingSweep
} from "../src/offscreen/ring.ts"

/** Where an angle points on the face, in screen coordinates: x right, y down. */
function face(angle) {
	// `+ 0` turns the -0 a cosine rounds to into the 0 the face is named by
	return [
		Math.round(Math.cos(angle) * 1000) / 1000 + 0,
		Math.round(Math.sin(angle) * 1000) / 1000 + 0
	]
}

const TWELVE = [0, -1]
const THREE = [1, 0]
const SIX = [0, 1]
const NINE = [-1, 0]

test("the band is the width the menu asks for, scaled with the screen and a pixel at least", () => {
	assert.equal(RingBand(2, 1), 2)
	assert.equal(RingBand(6, 1), 6)
	assert.equal(RingBand(2, 1440 / 1080), 3)
	assert.equal(RingBand(3, 2160 / 1080), 6)
	assert.equal(RingBand(1, 720 / 1080), 1)
	assert.equal(RingBand(1, 0.1), 1)
})

test("what is left of the ring is whole degrees, a degree at least for any health at all", () => {
	assert.equal(RingFilled(1), RingDegrees)
	assert.equal(RingFilled(0.5), 180)
	assert.equal(RingFilled(0.999), RingDegrees)
	assert.equal(RingFilled(0.0001), 1)
	assert.equal(RingFilled(0), 0)
	assert.equal(RingFilled(-1), 0)
	assert.equal(RingSweep(RingDegrees), Math.PI * 2)
	assert.equal(RingSweep(90), Math.PI / 2)
})

test("the ring ends at twelve o'clock and its start comes round clockwise as health runs out", () => {
	assert.deepEqual(face(RingEnd), TWELVE)
	for (const filled of [360, 270, 180, 90, 45, 1]) {
		assert.deepEqual(face(RingStart(filled) + RingSweep(filled)), TWELVE)
	}
	// the first quarter to go is the top right one: the start has come round to three o'clock
	assert.deepEqual(face(RingStart(270)), THREE)
	assert.deepEqual(face(RingStart(180)), SIX)
	assert.deepEqual(face(RingStart(90)), NINE)
	assert.deepEqual(face(RingStart(360)), TWELVE)
	// and it keeps coming round clockwise, which is the direction angles grow in on screen
	assert.ok(RingStart(90) > RingStart(180))
	assert.ok(RingStart(180) > RingStart(270))
	assert.ok(RingStart(270) > RingStart(360))
})
