///<reference path="interfaces.ts" />

module Collections {

    export class Stack<T> implements Collections.IEnumerable<T>, Collections.ICollection<T> {
        private array: T[];

        getEnumerator() : Collections.IEnumerator<T> {
            return this.array.getEnumerator();
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

        remove(item: T) {
            var index = this.array.indexOf(item);
            if (index !== -1)
                this.array.splice(index, 1);
            return this;
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

        private initializeFromCollection(collection: Collections.IEnumerable<T>) {
            var enumerator = collection.getEnumerator();
            enumerator.reset();
            
            while (enumerator.moveNext()) {
                this.add(enumerator.current);
            }

            return this;
        }

        public constructor(collection?: Collections.IEnumerable<T>) {
            if (collection)
                this.initializeFromCollection(collection);
        }
    }
}