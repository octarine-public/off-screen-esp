import assert from "node:assert/strict"
import test from "node:test"

import { CIndicatorStacks, SeePiles } from "../src/offscreen/stack.ts"

const DEG = Math.PI / 180
const ANGLE = 25 * DEG

function target(key, degrees, distance, { group = 5, alpha = 0 } = {}) {
	const entry = {
		key,
		group,
		alpha,
		wanted: true,
		goal: 0,
		stack: 1,
		stackedInto: -1,
		distanceSqr: distance ** 2,
		directionX: 0,
		directionY: 0
	}
	turn(entry, degrees)
	return entry
}

function turn(entry, degrees) {
	entry.directionX = Math.cos(degrees * DEG)
	entry.directionY = Math.sin(degrees * DEG)
}

/** One frame: every wanted target heads for full opacity, then the stacks take theirs away. */
function frame(stacks, entries, angle = ANGLE) {
	for (const entry of entries) {
		entry.goal = entry.wanted ? 1 : 0
	}
	stacks.Update(entries, entry => entry.group, angle)
}

test("runes of one group within the angle fold into the nearest, which counts them", () => {
	const stacks = new CIndicatorStacks()
	const entries = [
		target(1, 0, 2600),
		target(2, 10, 2000),
		target(3, -12, 3000),
		target(4, 90, 1000),
		target(5, 2, 1500, { group: 1 })
	]
	frame(stacks, entries)
	assert.deepEqual(
		entries.map(entry => [entry.key, entry.stack, entry.goal, entry.stackedInto]),
		[
			[1, 0, 0, 2],
			[2, 3, 1, -1],
			[3, 0, 0, 2],
			[4, 1, 1, -1],
			[5, 1, 1, -1]
		]
	)
})

test("the card on screen keeps leading when a nearer rune joins it", () => {
	const stacks = new CIndicatorStacks()
	const shown = target(1, 0, 3000, { alpha: 1 })
	const nearer = target(2, 5, 1000)
	frame(stacks, [nearer, shown])
	assert.equal(shown.stack, 2)
	assert.equal(shown.goal, 1)
	assert.equal(nearer.stack, 0)
	assert.equal(nearer.goal, 0)
})

test("a folded rune leaves only once it strays past the margin, and joins again inside the angle", () => {
	const stacks = new CIndicatorStacks()
	const lead = target(1, 0, 1000, { alpha: 1 })
	const other = target(2, 20, 2000)
	const entries = [lead, other]
	frame(stacks, entries)
	assert.equal(other.stackedInto, 1)
	turn(other, 29)
	frame(stacks, entries)
	assert.equal(other.stackedInto, 1)
	assert.equal(lead.stack, 2)
	turn(other, 32)
	frame(stacks, entries)
	assert.equal(other.stackedInto, -1)
	assert.equal(other.goal, 1)
	assert.equal(lead.stack, 1)
	turn(other, 29)
	frame(stacks, entries)
	assert.equal(other.stackedInto, -1)
	turn(other, 24)
	frame(stacks, entries)
	assert.equal(other.stackedInto, 1)
	assert.equal(lead.stack, 2)
})

test("a target of no group, or one not wanted, neither stacks nor takes others in", () => {
	const stacks = new CIndicatorStacks()
	const hero = target(1, 0, 500, { group: -1, alpha: 1 })
	const fading = target(2, 1, 600, { alpha: 1 })
	fading.wanted = false
	const rune = target(3, 2, 700)
	const entries = [hero, fading, rune]
	frame(stacks, entries)
	assert.deepEqual(
		entries.map(entry => [entry.stack, entry.goal]),
		[
			[1, 1],
			[1, 0],
			[1, 1]
		]
	)
})

test("a wide angle stays bounded, and clearing gives every target its own card back", () => {
	const stacks = new CIndicatorStacks()
	const entries = [target(1, 0, 1000), target(2, 179, 2000), target(3, -179, 3000)]
	frame(stacks, entries, Math.PI)
	assert.equal(entries[0].stack, 3)
	frame(stacks, entries, Math.PI)
	assert.equal(entries[0].stack, 3)
	stacks.Clear(entries)
	assert.ok(entries.every(entry => entry.stack === 1 && entry.stackedInto === -1))
})

test("a card on its way out keeps the count it stood at, and counts afresh coming back", () => {
	const stacks = new CIndicatorStacks()
	const entries = [target(1, 0, 1000), target(2, 5, 1100), target(3, -5, 1200)]
	frame(stacks, entries)
	assert.equal(entries[0].stack, 3)
	for (const entry of entries) {
		entry.wanted = false
	}
	frame(stacks, entries)
	assert.deepEqual(
		entries.map(entry => entry.stack),
		[3, 0, 0]
	)
	entries[0].wanted = true
	entries[1].wanted = true
	frame(stacks, entries)
	assert.deepEqual(
		entries.map(entry => entry.stack),
		[2, 0, 0]
	)
})

test("once the screen shows a rune of a pile the whole pile is seen, other spots and groups not", () => {
	const at = (entry, spot) => Object.assign(entry, { spot, inView: false, goal: 1 })
	const pile = [0, 1, 2].map(order => at(target(1 + order, order, 1000 + order * 10), 0))
	const further = at(target(4, 3, 3000), 1)
	const haste = at(target(5, 0, 1000, { group: 1 }), 0)
	const hero = at(target(6, 0, 900, { group: -1 }), 0)
	const entries = [...pile, further, haste, hero]
	const together = (left, right) => left.spot === right.spot
	// the rune on the screen is let go of by its own aim; the rest of its pile goes with it
	pile[1].inView = true
	pile[1].goal = 0
	SeePiles(entries, entry => entry.group, together)
	assert.deepEqual(
		entries.map(entry => entry.goal),
		[0, 0, 0, 1, 1, 1]
	)
	// a target of no group has no pile, on the screen or not
	for (const entry of entries) {
		entry.inView = false
		entry.goal = 1
	}
	hero.inView = true
	SeePiles(entries, entry => entry.group, together)
	assert.ok(entries.every(entry => entry.goal === 1))
})
