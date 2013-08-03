///<reference path="../qunit.d.ts" />
//<reference path="../lib/hashset.ts" />

import q = require("../lib/hashset");


QUnit.test("deepEqual test", function () {
    var obj = new q.Collections.HashSet();

    QUnit.deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});

test("deepEqual test", function () {
    var obj = { foo: "bar" };

    deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});