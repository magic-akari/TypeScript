// @target: es2015
// @module: preserve

// @filename: source.ts
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

// @filename: dependency.ts
export interface Dependency {}

// @filename: importType.ts
import type { Dependency } from "./dependency";
"use client";
