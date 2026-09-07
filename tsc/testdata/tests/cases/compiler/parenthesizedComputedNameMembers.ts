// @strict: true
// @target: esnext
// @declaration: true

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
