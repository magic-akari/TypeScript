//// [tests/cases/compiler/parenthesizedComputedNameMembers.ts] ////

//// [parenthesizedComputedNameMembers.ts]
class ParenthesizedMembers {
    [(0)] = "zero";
    [((-1))]() { return "negative"; }
    [(+2)]() { return "positive"; }

    get [("value")]() { return 1; }
    set [(("value"))](value: number) {}

    get [("other")]() { return "other"; }
    set ["other"](value: string) {}
}

const members = new ParenthesizedMembers();
members[0];
members[-1]();
members[2]();
members.value = 1;
members.other = "other";

const dynamicKey: string = "dynamic";
const object = {
    [(("literal"))]: 1,
    [(dynamicKey)]: 2,
};
object.literal;


//// [parenthesizedComputedNameMembers.js]
"use strict";
class ParenthesizedMembers {
    [(0)] = "zero";
    [((-1))]() { return "negative"; }
    [(+2)]() { return "positive"; }
    get [("value")]() { return 1; }
    set [(("value"))](value) { }
    get [("other")]() { return "other"; }
    set ["other"](value) { }
}
const members = new ParenthesizedMembers();
members[0];
members[-1]();
members[2]();
members.value = 1;
members.other = "other";
const dynamicKey = "dynamic";
const object = {
    [(("literal"))]: 1,
    [(dynamicKey)]: 2,
};
object.literal;


//// [parenthesizedComputedNameMembers.d.ts]
declare class ParenthesizedMembers {
    [(0)]: string;
    [((-1))](): string;
    [(+2)](): string;
    get [("value")](): number;
    set [(("value"))](value: number);
    get [("other")](): string;
    set ["other"](value: string);
}
declare const members: ParenthesizedMembers;
declare const dynamicKey: string;
declare const object: {
    [x: string]: number;
    literal: number;
};
