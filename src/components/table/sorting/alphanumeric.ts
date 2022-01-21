// Copyied from node_modules/react-table/src/sortTypes.js
import { Row } from 'react-table';
/* eslint-disable  no-restricted-globals , no-continue */

export const alphanumeric = (rowA: Row, rowB: Row, columnId: string, desc: boolean) => {
  let [a, b] = getRowValuesByColumnID(rowA, rowB, columnId);

  // Force to strings (or "" for unsupported types)
  a = toString(a);
  b = toString(b);

  // Split on number groups, but keep the delimiter
  // Then remove falsey split values
  a = a.split(reSplitAlphaNumeric).filter(Boolean);
  b = b.split(reSplitAlphaNumeric).filter(Boolean);

  // While
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();

    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);

    const combo = [an, bn].sort();

    // Both are string
    if (isNaN(combo[0])) {
      const aaa = aa.toLowerCase();
      const bbb = bb.toLowerCase();
      if (aaa === bbb) { // no sort if values is equal
        return desc ? -1 : 1;
      }
      if (aaa > bbb) {
        return 1;
      }
      if (bbb > aaa) {
        return -1;
      }
      continue;
    }

    // One is a string, one is a number
    if (isNaN(combo[1])) {
      return isNaN(an) ? 1 : -1; // in react-table source code isNaN(an) ? -1 : 1, i changed it so the number is less than the string
    }

    // Both are numbers
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }

  return a.length - b.length;
};

function getRowValuesByColumnID(row1: Row, row2: Row, columnId: string) {
  return [row1.values[columnId], row2.values[columnId]];
}

const reSplitAlphaNumeric = /([0-9]+)/gm;

function toString<T>(a: T): string {
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }
    return String(a);
  }
  if (typeof a === 'string') {
    return a;
  }
  return '';
}
