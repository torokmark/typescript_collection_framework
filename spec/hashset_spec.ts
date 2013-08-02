///<reference path="../qunit.d.ts" />
///<reference path="../lib/hashset.ts" />

QUnit.test("deepEqual test", function () {
    var obj = new Collections.HashSet();

    QUnit.deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});

test("deepEqual test", function () {
    var obj = { foo: "bar" };

    deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});