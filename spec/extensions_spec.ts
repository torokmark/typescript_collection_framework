///<reference path="../qunit.d.ts" />

import my = require("../lib/extensions");

QUnit.module("Test of HashSet", {
    setup: function () { },
    teardown: function () { }
});

test("Convert Array<T> to List<T>", function () {
    var array = [1,2,3,4];
    var list = my.toList(array);
    
    equal(array.length, list.count, "count should be equal");

    for (var key in array) {
    	equal(array[key], list.at(key), "array[" + key + "] should be equal to list.at(" + key + ")");
    }
});
