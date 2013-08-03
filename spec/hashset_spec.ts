///<reference path="qunit.d.ts" />
///<reference path="../lib/hashset.ts" />

import C = require("../lib/hashset");
var require;
var qunit = require("qunit")

qunit.test("deepEqual test", function () {
    var obj = new C.Collections.HashSet();

    qunit.deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});

qunit.test("deepEqual test", function () {
    var obj = { foo: "bar" };

    qunit.deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});