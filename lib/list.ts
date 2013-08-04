///<reference path="interfaces.ts" />

import my = require("interfaces");

export module Collections {
	export class ListEnumerator<T> implements my.Collections.IEnumerator<T> {
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
			this.list = [];
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

		public exists(match: (item: T) => boolean) : boolean {
			var result = false;
			var enumerator = this.getEnumerator().reset();

			while (enumerator.moveNext() && result) {
				result = match(enumerator.current);
			}

			return result;
		}

		public find(match: (item: T) => boolean) : T {
			for (var i = 0; i < this.list.length; ++i) {
				if (match(this.list[i]))
					return this.list[i];
			}
			return undefined;
		}

		public findAll(match: (item: T) => boolean) : List<T> {
			var result = new List<T>();

			for (var i = 0; i < this.list.length; ++i) {
				if (match(this.list[i]))
					result.add(this.list[i]);
			}

			return result;
		}

		public findIndex(param: { startIndex?: number; count?: number; match: (item: T) => boolean; }): number {
			if (!param.startIndex)
				param.startIndex = 0;

			if (!param.count)
				param.count = 1;

			var found = 0;

			for (var i = 0; i < this.list.length; ++i) {
				if (param.match(this.list[i])) {
					found++;
					if (found === param.count)
						return i;
				}			
			}
						
			return -1;
		}

		public findLast(match: (item: T) => boolean) : T {
			for (var i = (this.list.length - 1); i >= 0; --i) {
				if (match(this.list[i]))
					return this.list[i];
			}
			return undefined;
		}

		public forEach(action: (item: T) => void) {
			if (!action)
				throw "'action' parameter of 'forEach' must be defined!";

			for (var i = 0; i < this.list.length; ++i) {
				action(this.list[i]);
			}

			return this;
		}

		public getRange(index: number, count?: number) {
			var result = new List<T>();

			var end = count ? index + count : this.list.length;

			for (var i = index; i < end; ++i) {
				result.add(this.list[i]);
			}

			return result;
		}


	}
}