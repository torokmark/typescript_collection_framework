///<reference path="interfaces.ts" />

module Collections {

	export class LinkedListNode<T> {
		constructor(public value: T, public list: LinkedList<T>, public next?: LinkedListNode<T>, public previous?: LinkedListNode<T>) { }
	}

	export class LinkedList<T> implements Collections.ICollection<T>, Collections.IEnumerable<T> {
		
	}
}