///<reference path="interfaces.ts" />

import my = require("interfaces");

module Collections {

    class StackEnumerator<T> implements my.Collections.IEnumerator<T> {
        private stack: Stack<T>;
        private index: number;

        constructor(stack: Stack<T>) {
            this.stack = stack;
            this.reset();
        }

        public reset() {
            this.index = 0;
            return this;
        }

        public moveNext(): boolean {
            var result = this.index < this.stack.count;
            this.index++;
            return result; 
        }

        public get current(): T {
            return this.stack.toArray()[this.index];
        }
    }

    export class Stack<T> implements my.Collections.IEnumerable<T>, my.Collections.ICollection<T> {
        private array: T[];

        getEnumerator() : my.Collections.IEnumerator<T> {
            return new StackEnumerator<T>(this);
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

        private initializeFromCollection(collection: my.Collections.IEnumerable<T>) {
            var enumerator = collection.getEnumerator();
            enumerator.reset();
            
            while (enumerator.moveNext()) {
                this.add(enumerator.current);
            }

            return this;
        }

        public constructor(collection?: my.Collections.IEnumerable<T>) {
            if (collection)
                this.initializeFromCollection(collection);
        }
    }
}