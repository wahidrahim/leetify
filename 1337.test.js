import leetify from './1337';
import { CHAR } from 'xmlchars/xml/1.0/ed5';

const CHAR_MAP = {
  a: 4,
  A: 4,
  e: 3,
  E: 3,
  i: 1,
  I: 1,
  o: 0,
  O: 0,
  s: 5,
  S: 5,
  t: 7,
  T: 7,
};

test('individual character translations', () => {
  expect(leetify('a', CHAR_MAP)).toBe('4');
  expect(leetify('A', CHAR_MAP)).toBe('4');
  expect(leetify('e', CHAR_MAP)).toBe('3');
  expect(leetify('E', CHAR_MAP)).toBe('3');
  expect(leetify('i', CHAR_MAP)).toBe('1');
  expect(leetify('I', CHAR_MAP)).toBe('1');
  expect(leetify('o', CHAR_MAP)).toBe('0');
  expect(leetify('O', CHAR_MAP)).toBe('0');
  expect(leetify('s', CHAR_MAP)).toBe('5');
  expect(leetify('S', CHAR_MAP)).toBe('5');
  expect(leetify('t', CHAR_MAP)).toBe('7');
  expect(leetify('T', CHAR_MAP)).toBe('7');
});

test('blank string', () => {
  expect(leetify('', CHAR_MAP)).toBe('');
});

test('non-translatable characters', () => {
  expect(leetify('x', CHAR_MAP)).toBe('x');
  expect(leetify('y', CHAR_MAP)).toBe('y');
  expect(leetify('z', CHAR_MAP)).toBe('z');
});

test('example sentences', () => {
  expect(leetify("Let's have some fun.", CHAR_MAP)).toBe(
    "L37'5 h4v3 50m3 fun."
  );
  expect(leetify("C is for cookie, that's good enough for me", CHAR_MAP)).toBe(
    "C 15 f0r c00k13, 7h47'5 g00d 3n0ugh f0r m3"
  );
  expect(leetify('By the power of Grayskull!', CHAR_MAP)).toBe(
    'By 7h3 p0w3r 0f Gr4y5kull!'
  );
});
