///<reference path="interfaces.ts" />

import my = require("interfaces");

module Collections {
	class ListEnumerator<T> implements my.Collections.IEnumerator<T> {
		private list: my.Collections.IList<T>;
		private index: number;

		constructor(list: my.Collections.IList<T>) {
			this.list = list;
			this.index = 0;
		}

		public reset() {
			this.index = 0;
			return this;
		}

		public moveNext(): boolean {
			var result = this.index < this.list.count;
			this.index++;
			return result;
		}

		public get current(): T {
			return this.list.at(this.index);
		}
	}

	export class List<T> implements my.Collections.IList<T> {
		private list: T[];

		constructor(collection?: my.Collections.IEnumerable<T>) {
			if (collection)
				this.initializeFromCollection(collection);
		}

		private initializeFromCollection(collection: my.Collections.IEnumerable<T>) {
			var enumerator = collection.getEnumerator();
	        enumerator.reset();
	        
	        while (enumerator.moveNext()) {
	            this.add(enumerator.current);
	        }

	        return this;
		}

		public at(index: number): T {
			return this.list[index];
		}
		
		public indexOf(item: T): number {
			return this.list.indexOf(item);
		}

		public insert(index: number, item: T) {
			this.list.splice(index, 0, item);
			return this;
		}

		public remove(item: T) {
			var index = this.indexOf(item);
			if (index !== -1)
				this.removeAt(index);

			return this;
		}

		public removeAt(index: number) {
			this.list.splice(index, 1);
			return this;
		}

		public get count(): number {
			return this.list.length;
		}	

		public get isReadOnly(): boolean {
			return false;
		}	

		public add(item: T) {
			this.list.push(item);
			return this;
		}

		public clear() {
			this.list = [];
			return this;
		}

		public contains(item: T): boolean {
			return this.indexOf(item) !== -1;
		}

		public copyTo(array: T[], arrayIndex: number) {
			if (!array)
				throw "array must be defined!";
			for (var i = arrayIndex; i < array.length; ++i) {
				this.add(array[i]);
			}
			return this;
		}

		public getEnumerator() {
			return new ListEnumerator<T>(this);
		}

		public toArray(): T[] {
			return this.list;
		}
	}
}