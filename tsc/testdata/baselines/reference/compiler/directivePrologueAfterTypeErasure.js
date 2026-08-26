//// [tests/cases/compiler/directivePrologueAfterTypeErasure.ts] ////

//// [source.ts]
"use source";
type SourceType = string;
"use client";

function afterTypeAlias() {
    type T = string;
    "use client";
}

function afterInterface() {
    interface I {}
    "use server";
}

function escapedUseStrict(parameter = 0) {
    "use\x20strict";
}

namespace N {
    type T = string;
    "use client";
}

//// [dependency.ts]
export interface Dependency {}

//// [importType.ts]
import type { Dependency } from "./dependency";
"use client";


//// [source.js]
"use strict";
"use source";
("use client");
function afterTypeAlias() {
    ("use client");
}
function afterInterface() {
    ("use server");
}
function escapedUseStrict(parameter = 0) {
    "use\x20strict";
}
var N;
(function (N) {
    ("use client");
})(N || (N = {}));
//// [dependency.js]
//// [importType.js]
("use client");
