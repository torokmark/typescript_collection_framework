import my = require("interfaces");

module Collections {

	export class LinkedListNode<T> {
		constructor(public value: T, public list: LinkedList<T>, public next?: LinkedListNode<T>, public previous?: LinkedListNode<T>) { }
	}

	export class LinkedList<T> implements my.Collections.ICollection<T>, my.Collections.IEnumerable<T> {
		
	}
}