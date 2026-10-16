import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as layout from '../src/layout.mjs';
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-6, `${actual} ≠ ${expected}`);

test('MØDE 4 and MØDE 3 use the dimensions printed on the PDF', () => {
  assert.ok(layout.spaceInvaders, 'MØDE 4 has explicit plan bounds');
  close(layout.spaceInvaders.maxX - layout.spaceInvaders.minX, 7.758);
  close(layout.spaceInvaders.maxZ - layout.spaceInvaders.minZ, 6.205);
  close(layout.minecraft.maxX - layout.minecraft.minX, 4.835);
  close(layout.minecraft.maxZ - layout.minecraft.minZ, 4.362);
});

test('the meeting rooms share the west facade and MØDE 2 follows Minecraft', () => {
  close(layout.minecraft.minX, layout.spaceInvaders.minX);
  assert.ok(layout.minecraft.minZ > layout.spaceInvaders.maxZ);
  close(layout.meeting2.minX, layout.minecraft.minX);
  assert.ok(layout.meeting2.minZ > layout.minecraft.maxZ);
  assert.ok(layout.meeting2.maxX < layout.hallway.minX);
  assert.ok(layout.minecraftDoor.maxZ < layout.restrooms.entrance.minZ, 'The two entrances are staggered on the PDF');
});

test('the kitchen uses the printed dimensions and connects to the west lobby', () => {
  close(layout.kitchen.maxX - layout.kitchen.minX, 6.567);
  close(layout.kitchen.maxZ - layout.kitchen.minZ, 3.1);
  close(layout.lobby.maxX, layout.kitchenNorthDoor.minX);
  close(layout.kitchenNorthDoor.maxX, layout.kitchen.minX);
  assert.ok(layout.lobby.minZ > layout.meeting2.maxZ);
});
