///<reference path="list.ts" />

import list = require("list");
var my = list.Collections;

export var toList = function<T>(array: T[]) {
	var list = new my.List<T>();

	for (var key in array) {
		list.add(array[key]);
	}

	return list;
};