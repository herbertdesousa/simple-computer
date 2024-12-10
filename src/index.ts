import { Bit } from "./bit";
import { And, Inv, Or } from "./logic-gates";

const table = [
  { sel: Bit.Zero, a: Bit.Zero, b: Bit.Zero, out: Bit.Zero },
  { sel: Bit.Zero, a: Bit.Zero, b: Bit.One, out: Bit.Zero },
  { sel: Bit.Zero, a: Bit.One, b: Bit.Zero, out: Bit.One },
  { sel: Bit.Zero, a: Bit.One, b: Bit.One, out: Bit.One },
  { sel: Bit.One, a: Bit.Zero, b: Bit.Zero, out: Bit.Zero },
  { sel: Bit.One, a: Bit.Zero, b: Bit.One, out: Bit.One },
  { sel: Bit.One, a: Bit.One, b: Bit.Zero, out: Bit.Zero },
  { sel: Bit.One, a: Bit.One, b: Bit.One, out: Bit.One },
];

for (const { sel, a, b, out } of table) {
  const and1 = And(a, Inv(sel));
  const and2 = And(sel, b);

  console.log(Or(and1, and2) === out);
}
