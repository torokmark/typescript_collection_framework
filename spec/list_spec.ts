///<reference path="../qunit.d.ts" />
///<reference path="../lib/list.ts"/>

QUnit.module("Test of HashSet", {
    setup: function () {
    },
    teardown: function () {
    }
});

test("Init List with empty constructor", function () {
    var list = new Collections.List<number>();
    
    equal(0, list.count, "count should be zero");
});

test("Init list with a collection", function() {
    var list : Collections.List<number>;
    var collection = new Collections.List<number>();

    collection.add(0)
              .add(1)
              .add(2)
              .add(3);

    list = new Collections.List(collection);

    equal(list.count, 4, "Count should be 4");
    equal(list.count, collection.count, "Count of 'list' should be equal count of 'collection'");
});

test("Add items to list", function() {
    var list = new Collections.List<number>();

    list.add(0).add(1).add(2);

    equal(list.count, 3, "Count should be 3");
});

test("Testing methods", function() {
    var list = new Collections.List<number>();
});

