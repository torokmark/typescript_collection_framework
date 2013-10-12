///<reference path="../qunit.d.ts" />
///<reference path="../lib/dictionary.ts" />
///<reference path="compareelement.ts" />

QUnit.module("Test of Dictionary", {
    setup: function () {
    },
    teardown: function () {
    }
});


test("Init dictionary with empty constructor", function () {
    var dictionary: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary();
    
    equal(0, dictionary.count, "count should be zero");
});

/*
test("Init dictionary with a dictionary", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        dictionary: Collections.Dictionary<CompareElement, string>;
    
    dict.add(new CompareElement(1), "value 1");
    dict.add(new CompareElement(2), "value 2");
    dict.add(new CompareElement(3), "value 3");
    dict.add(new CompareElement(4), "value 4");
    dict.add(new CompareElement(5), "value 5");

    dictionary = new Collections.Dictionary(dict);

    equal(5, dictionary.count, "count should be five");
});
*/

test("Get the keys of the dictionary", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary();
    
    dict.add(new CompareElement(1), "value 1");
    dict.add(new CompareElement(2), "value 2");

    equal(2, dict.keys.count, "count should be 2");
});


test("Get the values of the dictionary", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary();
    
    dict.add(new CompareElement(1), "value 1");
    dict.add(new CompareElement(2), "value 2");

    equal(2, dict.values.count, "count should be 2");
});


test("Add 2 elements to the dictionary using by `add` method", function () {
    var dictionary: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary();

    dictionary.add(new CompareElement(11), "value 1");
    dictionary.add(new CompareElement(10), "value 2");

    equal(2, dictionary.count, "should be 2 ");
});


test("Add two elements to the dictionary with the same hashcode using by `add` method", function () {
    var dictionary: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        e1, e2: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);

    dictionary.add(e1, "value 11");
    dictionary.add(e1, "value 12");
    dictionary.add(e2, "value 2");

    equal(2, dictionary.keys.count, "should be 2");
});


/*
test("Get the value of the dictionary at a given key", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        e1: CompareElement = new CompareElement(1),
        e2: CompareElement = new CompareElement(2),
        e3: CompareElement = new CompareElement(3),
        e4: CompareElement = new CompareElement(4);
    
    dict.add(e1, "value 1");
    dict.add(e2, "value 2");
    dict.add(e3, "value 3");


    equal("value 2", dict.at(e2), "count should be `value 2`");
    equal(null, dict.at(e4), "count should be null");
});


test("Clear elements from the dictionary using by `clear` method", function () {
    var dictionary: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        e1, e2, e3, e4: CompareElement;

    e1 = new CompareElement(1);
    e2 = new CompareElement(2);
    e3 = new CompareElement(3);
    e4 = new CompareElement(4);

    dictionary.add(e1, "value 1");
    dictionary.add(e2, "value 2");
    dictionary.add(e3, "value 3");
    dictionary.add(e4, "value 4");

    dictionary.clear();

    equal(0, dictionary.count, "should result an empty dictionary!");
});


test("Check whether the dictionary contains a given key or not!", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        e1: CompareElement = new CompareElement(1),
        e2: CompareElement = new CompareElement(2),
        e3: CompareElement = new CompareElement(3),
        e4: CompareElement = new CompareElement(4);
    
    dict.add(e1, "value 1");
    dict.add(e2, "value 2");
    dict.add(e3, "value 3");


    equal(true, dict.containsKey(e2), "should be true");
    equal(false, dict.containsKey(e4), "should be false");
});


test("Remove an item by key", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        e1: CompareElement = new CompareElement(1),
        e2: CompareElement = new CompareElement(2),
        e3: CompareElement = new CompareElement(3),
        e4: CompareElement = new CompareElement(4);
    
    dict.add(e1, "value 1");
    dict.add(e2, "value 2");
    dict.add(e3, "value 3");

    equal(2, dict.removeByKey(e2).keys.count, "count should be 2");
    equal(false, dict.containsKey(e2), "should be false");
    equal(2, dict.removeByKey(e4).keys.count, "count should be 2");
});


test("Try get a value by key", function () {
    var dict: Collections.Dictionary<CompareElement, string> = new Collections.Dictionary(),
        e1: CompareElement = new CompareElement(1),
        e2: CompareElement = new CompareElement(2),
        e3: CompareElement = new CompareElement(3),
        e4: CompareElement = new CompareElement(4),
        s: string;
    
    dict.add(e1, "value 1");
    dict.add(e2, "value 2");
    dict.add(e3, "value 3");

    equal(true, dict.tryGetValue(e2, s), "should be true");
    equal("value 2", s, "should be `value 2`");
    equal(false, dict.tryGetValue(e4, s), "should be false");
});*/