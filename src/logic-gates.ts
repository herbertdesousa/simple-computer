import { Bit } from "./bit";

export function And(input1: Bit, input2: Bit) {
  return input1 === Bit.One && input2 === Bit.One ? Bit.One : Bit.Zero;
}

export function Or(input1: Bit, input2: Bit) {
  return input1 === Bit.One || input2 === Bit.One ? Bit.One : Bit.Zero;
}

export function Inv(input: Bit) {
  return input === Bit.One ? Bit.Zero : Bit.One;
}

export function Xor(input1: Bit, input2: Bit) {
  return input1 !== input2 ? Bit.One : Bit.Zero;
}

export function Nand(input1: Bit, input2: Bit) {
  return And(input1, input2) === Bit.One ? Bit.Zero : Bit.One;
}

export function Nor(input1: Bit, input2: Bit) {
  return Or(input1, input2) === Bit.One ? Bit.Zero : Bit.One;
}

export function Xnor(input1: Bit, input2: Bit) {
  return Xor(input1, input2) === Bit.One ? Bit.Zero : Bit.One;
}
