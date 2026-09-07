// @strict: true
// @target: esnext
// @module: esnext
// @declaration: true

class C {
    static ['x']() { return 'x'; }
    static [('y')]() { return 'y'; }
    static [((`z`))]() { return 'z'; }
}

namespace C {
    export interface x {}
    export interface y {}
    export interface z {}
}

function A() { return 1; }
function B() { return 2; }
function D() { return 3; }

namespace N {
    import A = C.x;
    import B = C.y;
    import D = C.z;
    console.log(A(), B(), D());
}
