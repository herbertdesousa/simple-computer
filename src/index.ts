enum Bit {
  Zero = 0,
  One = 1
}


function And(input1: Bit, input2: Bit) {
  return input1 === Bit.One && input2 === Bit.One ? Bit.One : Bit.Zero;
}

function Or(input1: Bit, input2: Bit) {
  return input1 === Bit.One || input2 === Bit.One ? Bit.One : Bit.Zero;
}

function Inv(input: Bit) {
  return input === Bit.One ? Bit.Zero : Bit.One;
}

const table = [
  { sel: 0, a: 0, b: 0, out: 0 },
  { sel: 0, a: 0, b: 1, out: 0 },
  { sel: 0, a: 1, b: 0, out: 1 },
  { sel: 0, a: 1, b: 1, out: 1 },
  { sel: 1, a: 0, b: 0, out: 0 },
  { sel: 1, a: 0, b: 1, out: 1 },
  { sel: 1, a: 1, b: 0, out: 0 },
  { sel: 1, a: 1, b: 1, out: 1 },
];

for (const { sel, a, b, out } of table) {
  const and1 = And(a, Inv(sel));
  const and2 = And(sel, b);

  console.log(Or(and1, and2) === out);
}
