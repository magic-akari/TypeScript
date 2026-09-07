//// [tests/cases/compiler/parenthesizedComputedNameNamespaceMerge.ts] ////

//// [parenthesizedComputedNameNamespaceMerge.ts]
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


//// [parenthesizedComputedNameNamespaceMerge.js]
"use strict";
class C {
    static ['x']() { return 'x'; }
    static [('y')]() { return 'y'; }
    static [((`z`))]() { return 'z'; }
}
function A() { return 1; }
function B() { return 2; }
function D() { return 3; }
var N;
(function (N) {
    var A = C.x;
    var B = C.y;
    var D = C.z;
    console.log(A(), B(), D());
})(N || (N = {}));


//// [parenthesizedComputedNameNamespaceMerge.d.ts]
declare class C {
    static ['x'](): string;
    static [('y')](): string;
    static [((`z`))](): string;
}
declare namespace C {
    interface x {
    }
    interface y {
    }
    interface z {
    }
}
declare function A(): number;
declare function B(): number;
declare function D(): number;
declare namespace N {
}
