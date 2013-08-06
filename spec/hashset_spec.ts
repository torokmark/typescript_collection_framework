///<reference path="../qunit.d.ts" />
///<reference path="../lib/hashset.ts" />
///<reference path="nodeelement.ts" />

QUnit.module("Test of HashSet", {
    setup: function () {
    },
    teardown: function () {
    }
});

test("Init hashset with empty constructor", function () {
    var hashSet: Collections.HashSet<number> = new Collections.HashSet();
    
    equal(0, hashSet.count, "count should be zero");
});

test("Init hashset with a collection", function () {
    var coll: Collections.HashSet<number> = new Collections.HashSet(),
        hashSet: Collections.HashSet<number>;
    
    coll.add(1);
    coll.add(2);
    coll.add(3);
    coll.add(4);
    coll.add(5);

    hashSet = new Collections.HashSet(coll);

    equal(5, hashSet.count, "count should be five");
});

test("Add 2 elements to the hashset using by `add` method", function () {
    var hashSet: Collections.HashSet<number> = new Collections.HashSet();

    hashSet.add(11);
    hashSet.add(10);

    equal(2, hashSet.count, "should be 2 ");
});

test("Add the same element twice to the hashset using by `add` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);

    hashSet.add(e1);
    hashSet.add(e1);
    hashSet.add(e2);

    equal(2, hashSet.count, "should be 1 ");
});

test("Clear elements from the hashset using by `clear` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.clear();

    equal(0, hashSet.count, "should result an empty hashset!");
});

test("Check an element whether is in the hashset or not using by `contain` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);

    hashSet.add(e1);
    hashSet.add(e2);

    equal(true, hashSet.contains(e2), "should be true!");
});

test("Copy elements into the hashset using by `copyTo` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        arr: NodeElement[] = [],
        e1: NodeElement = new NodeElement(1);

    arr.push(e1);
    arr.push(new NodeElement(2));
    arr.push(new NodeElement(2));
    arr.push(new NodeElement(2));

    hashSet.copyTo(arr, 1);

    equal(false, hashSet.contains(e1), "should contain the given element!");
    equal(3, hashSet.count, "should contain 3 elements");
});

test("Remove elements from the hashset except with some of them using `exceptWith` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        coll: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    coll.add(e1);
    coll.add(e4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.add(e5);

    hashSet.exceptWith(coll);

    equal(false, hashSet.contains(e1), "should not contain e1!");
    equal(true, hashSet.contains(e2), "should contain e2!");
    equal(3, hashSet.count, "should be 3 length!");
});

test("Relation of the hashset with another set using", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        coll: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    coll.add(e1);
    coll.add(e2);
    coll.add(e4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.add(e5);

    equal(true, coll.isProperSubsetOf(hashSet), "should be proper subset!");
    equal(true, hashSet.isProperSupersetOf(coll), "should be proper superset!");
    equal(true, coll.isSubsetOf(hashSet), "should be subset!");
    equal(true, hashSet.isSupersetOf(coll), "should be superset!");

    coll.add(e3);
    coll.add(e5);

    notEqual(true, coll.isProperSubsetOf(hashSet), "should not be proper subset!");
    notEqual(true, hashSet.isProperSupersetOf(coll), "should not be proper superset!");
});

test("Overlaps another hashset using `overlaps` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        coll: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.add(e5);

    notEqual(true, hashSet.overlaps(coll), "should not overlap!");

    coll.add(e1);
    coll.add(e4);

    equal(true, hashSet.overlaps(coll), "should overlap!");
});

test("Remove elements from the hashset using `remove` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.remove(e5);

    equal(4, hashSet.count, "remove non-existing element does nothing!");

    hashSet.remove(e4);

    equal(false, hashSet.contains(e4), "removed element should not be in the set!");
});

test("Remove all the elements from the hashset using `removeAll` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        coll: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    coll.add(e1);
    coll.add(e4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.add(e5);

    hashSet.removeAll(coll);

    equal(false, hashSet.contains(e4), "removed element should not be in the set!");
    equal(3, hashSet.count, "length should be smaller!");
});

test("Remove all the elements where a predicate is true using `removeWhere` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.add(e5);

    hashSet.removeWhere(function isMod2(t: NodeElement) {
        if (t.N % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });

    equal(3, hashSet.count, "length should be smaller!");
});

test("Check whether the two hashsets are equal using `setEqual` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        coll: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    coll.add(e1);
    coll.add(e4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e4);
    hashSet.add(e5);

    equal(false, hashSet.setEquals(coll), "should not equal!");

    coll.add(e2);
    coll.add(e3);
    coll.add(e5);

    equal(true, hashSet.setEquals(coll), "should equal!");
});

test("Merge two hashsets using `unionWith` method", function () {
    var hashSet: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        coll: Collections.HashSet<NodeElement> = new Collections.HashSet(),
        e1, e2, e3, e4, e5: NodeElement;

    e1 = new NodeElement(1);
    e2 = new NodeElement(2);
    e3 = new NodeElement(3);
    e4 = new NodeElement(4);
    e5 = new NodeElement(5);

    coll.add(e1);
    coll.add(e4);

    hashSet.add(e1);
    hashSet.add(e2);
    hashSet.add(e3);
    hashSet.add(e5);

    hashSet.unionWith(coll);

    equal(5, hashSet.count, "should be 5!");
    equal(true, hashSet.contains(e4), "should contain new element!");
});