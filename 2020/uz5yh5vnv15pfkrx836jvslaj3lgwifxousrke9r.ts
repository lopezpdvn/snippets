//////////////////////////////////////////////////
abstract class A {
  abstract m(): void;
	otherM() { console.log('otherm');	}
}

class C implements A {
    m() { console.log('m') }; }

const x = new C();
x.m();

// tsc
// tmp.ts:8:7 - error TS2720: Class 'C'
// incorrectly implements class 'A'. Did you mean
// to extend 'A' and inherit its members as a
// subclass?
//   Property 'otherM' is missing in type 'C' but
// required in type 'A'.