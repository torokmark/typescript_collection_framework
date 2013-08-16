///<reference path="../qunit.d.ts" />
///<reference path="../lib/sortedset.ts" />
///<reference path="compareelement.ts" />

QUnit.module("Test of SortedSet", {
    setup: function () {
    },
    teardown: function () {
    }
});

test("Init sortedset with empty constructor", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet();
    
    equal(0, sortedSet.count, "count should be zero");
});

test("Init sortedset with a collection", function () {
    var coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        sortedSet: Collections.SortedSet<CompareElement>;
    
    coll.add(new CompareElement(1));
    coll.add(new CompareElement(2));
    coll.add(new CompareElement(3));
    coll.add(new CompareElement(4));
    coll.add(new CompareElement(5));

    sortedSet = new Collections.SortedSet(coll);

    equal(5, sortedSet.count, "count should be five");
});

test("`max` property of empty set", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet();   

    equal(sortedSet.max, null, "should be null");
});

test("`max` property", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet();

    sortedSet.add(new CompareElement(1));
    sortedSet.add(new CompareElement(2));
    sortedSet.add(new CompareElement(5));
    sortedSet.add(new CompareElement(4));
    sortedSet.add(new CompareElement(3));    

    equal(sortedSet.max.N, 5, "should be 5");
});

test("`min` property of empty set", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet();   

    equal(sortedSet.min, null, "should be null");
});

test("`min` property", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet();

    sortedSet.add(new CompareElement(1));
    sortedSet.add(new CompareElement(2));
    sortedSet.add(new CompareElement(5));
    sortedSet.add(new CompareElement(4));
    sortedSet.add(new CompareElement(3));    

    equal(sortedSet.min.N, 1, "should be 1");
});

test("Add 2 elements to the sortedset using by `add` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet();

    sortedSet.add(new CompareElement(11));
    sortedSet.add(new CompareElement(10));

    equal(2, sortedSet.count, "should be 2 ");
});

test("Add the same element twice to the sortedset using by `add` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);

    sortedSet.add(e1);
    sortedSet.add(e1);
    sortedSet.add(e2);

    equal(2, sortedSet.count, "should be 1 ");
});

test("Clear elements from the sortedset using by `clear` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.clear();

    equal(0, sortedSet.count, "should result an empty sortedset!");
});

test("Check an element whether is in the sortedset or not using by `contain` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);

    sortedSet.add(e1);
    sortedSet.add(e2);

    equal(true, sortedSet.contains(e2), "should be true!");
});

test("Copy elements into the sortedset using by `copyTo` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.ICollection<CompareElement>,
        e1: CompareElement = new CompareElement(1);

    sortedSet.add(e1);
    sortedSet.add(new CompareElement(2));
    sortedSet.add(new CompareElement(2));
    sortedSet.add(new CompareElement(2));

    coll = sortedSet.copyTo(1);

    equal(false, coll.contains(e1), "should contain the given element!");
    equal(3, coll.count, "should contain 3 elements");
});

test("Remove elements from the sortedset except with some of them using `exceptWith` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    coll.add(e1);
    coll.add(e4);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.add(e5);

    sortedSet.exceptWith(coll);

    equal(false, sortedSet.contains(e1), "should not contain e1!");
    equal(true, sortedSet.contains(e2), "should contain e2!");
    equal(3, sortedSet.count, "should be 3 length!");
});

test("Relation of the sortedset with another set using", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    coll.add(e1);
    coll.add(e2);
    coll.add(e4);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.add(e5);

    equal(true, coll.isProperSubsetOf(sortedSet), "should be proper subset!");
    equal(true, sortedSet.isProperSupersetOf(coll), "should be proper superset!");
    equal(true, coll.isSubsetOf(sortedSet), "should be subset!");
    equal(true, sortedSet.isSupersetOf(coll), "should be superset!");

    coll.add(e3);
    coll.add(e5);

    notEqual(true, coll.isProperSubsetOf(sortedSet), "should not be proper subset!");
    notEqual(true, sortedSet.isProperSupersetOf(coll), "should not be proper superset!");
});

test("Overlaps another sortedset using `overlaps` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.add(e5);

    notEqual(true, sortedSet.overlaps(coll), "should not overlap!");

    coll.add(e1);
    coll.add(e4);

    equal(true, sortedSet.overlaps(coll), "should overlap!");
});

test("Remove elements from the sortedset using `remove` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.remove(e5);

    equal(4, sortedSet.count, "remove non-existing element does nothing!");

    sortedSet.remove(e4);

    equal(false, sortedSet.contains(e4), "removed element should not be in the set!");
});

test("Remove all the elements from the sortedset using `removeAll` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    coll.add(e1);
    coll.add(e4);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.add(e5);

    sortedSet.removeAll(coll);

    equal(false, sortedSet.contains(e4), "removed element should not be in the set!");
    equal(3, sortedSet.count, "length should be smaller!");
});

test("Remove all the elements where a predicate is true using `removeWhere` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.add(e5);

    sortedSet.removeWhere(function isMod2(t: CompareElement) {
        if (t.N % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });

    equal(3, sortedSet.count, "length should be smaller!");
});

test("Check whether the two sortedsets are equal using `setEqual` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    coll.add(e1);
    coll.add(e4);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e4);
    sortedSet.add(e5);

    equal(false, sortedSet.setEquals(coll), "should not equal!");

    coll.add(e2);
    coll.add(e3);
    coll.add(e5);

    equal(true, sortedSet.setEquals(coll), "should equal!");
});

test("Merge two sortedsets using `unionWith` method", function () {
    var sortedSet: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        coll: Collections.SortedSet<CompareElement> = new Collections.SortedSet(),
        e1, e2, e3, e4, e5: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);
    e5 = new CompareElement(5);

    coll.add(e1);
    coll.add(e4);

    sortedSet.add(e1);
    sortedSet.add(e2);
    sortedSet.add(e3);
    sortedSet.add(e5);

    sortedSet.unionWith(coll);

    equal(5, sortedSet.count, "should be 5!");
    equal(true, sortedSet.contains(e4), "should contain new element!");
});