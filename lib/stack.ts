///<reference path="interfaces.ts" />

module Collections {
	export class Stack<T> implements IEnumerable<T>, ICollection<T> {
		private array: T[];

		getEnumerator() : IEnumerator<T> {
			return undefined;
		}

		get count(): number {
			return this.array.length;
		}	

		get isReadOnly(): boolean {
			return false;
		}	

		add(item: T) {
			this.array.push(item);
			return this;
		}

		clear() {
			this.array = [];
			return this;
		}

		contains(item: T): boolean {
			for (var key in this.array) {
				if (this.array[key] === item)
					return true;
			}
			return false;
		}

		copyTo(array: T[], arrayIndex: number) {
			for (var i = arrayIndex; i < array.length; ++i) {
				this.add(array[i]);
			}

			return this;
		}

		remove(item: T): boolean {
			var index = this.array.indexOf(item);
			if (index === -1)
				return false;
			this.array.splice(index, 1);
			return true;
		}

		pop(): T {
			return this.array.pop();
		}

		peek(): T {
			return this.array[this.array.length - 1];
		}

		push(item: T) {
			this.array.push(item);
			return this;
		}

		toArray(): T[] {
			return this.array;
		}

		private initializeFromCollection(collection: IEnumerable<T>) {
			var enumerator = collection.getEnumerator();
			enumerator.reset();
			
			while (enumerator.moveNext()) {
				this.add(enumerator.current);
			}

			return this;
		}

		public constructor(collection?: IEnumerable<T>) {
			if (collection)
				this.initializeFromCollection(collection);
		}
	}

	var stack: Stack<number> = new Stack<number>();
}