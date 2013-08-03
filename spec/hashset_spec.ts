///<reference path="../qunit.d.ts" />

import q = require("../lib/hashset");
import e = require("./nodeelement");

QUnit.module("Test of HashSet", {
    setup: function () {
    },
    teardown: function () {
    }
});

test("Init hashset with empty constructor", function () {
    var hashSet: q.Collections.HashSet<number> = new q.Collections.HashSet();
    
    equal(0, hashSet.count, "count should be zero");
});

test("Init hashset with a collection", function () {
    var coll: q.Collections.HashSet<number> = new q.Collections.HashSet(),
        hashSet: q.Collections.HashSet<number>;
    
    coll.add(1);
    coll.add(2);
    coll.add(3);
    coll.add(4);
    coll.add(5);

    hashSet = new q.Collections.HashSet(coll);

    equal(5, hashSet.count, "count should be five");
});

test("Add 2 elements to the hashset using by `add` method", function () {
    var hashSet: q.Collections.HashSet<number> = new q.Collections.HashSet();

    hashSet.add(11);
    hashSet.add(10);

    equal(2, hashSet.count, "should be 2 ");
});

test("Add the same element twice to the hashset using by `add` method", function () {
    var hashSet: q.Collections.HashSet<e.Element> = new q.Collections.HashSet(),
        e1, e2: e.Element;

    e1 = new e.Element(1);
    e2 = new e.Element(2);

    hashSet.add(e1);
    hashSet.add(e1);
    hashSet.add(e2);

    equal(2, hashSet.count, "should be 1 ");
});

test("Clear elements from the hashset using by `clear` method", function () {
    var hashSet: q.Collections.HashSet<e.Element> = new q.Collections.HashSet(),
        e1, e2, e3, e4: e.Element;

    e1 = new e.Element(1);
    e2 = new e.Element(2);
    e3 = new e.Element(3);
    e4 = new e.Element(4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.clear();

    equal(0, hashSet.count, "should result an empty hashset!");
});

test("Check an element whether is in the hashset or not using by `contain` method", function () {
    var hashSet: q.Collections.HashSet<e.Element> = new q.Collections.HashSet(),
        e1, e2: e.Element;

    e1 = new e.Element(1);
    e2 = new e.Element(2);

    hashSet.add(e1);
    hashSet.add(e2);

    equal(true, hashSet.contains(e2), "should be true!");
});
