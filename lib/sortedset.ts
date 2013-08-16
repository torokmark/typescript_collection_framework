///<reference path="interfaces.ts" />

module Collections {
    export class SortedSet<T extends Collections.IComparable<T>> implements Collections.ISet<T> {
        private set: T[] = [];

        constructor(collection?: Collections.IEnumerable<T>) {
            if (collection) {
                this.initializeFromCollection(collection);
            }
        }

        get count(): number {
            return this.set.length;
        }

        get max(): T {
            var maxItem : T,
                i = 0,
                max = this.set.length;

            if (this.set.length > 0) {
                maxItem = this.set[0];
            } else {
                return null;    
            }
            for (i = 0, max = this.set.length; i < max; i += 1) {
                if (maxItem.compareTo(this.set[i]) === -1) {
                    maxItem = this.set[i];
                }
            }
            return maxItem;
        }

        get min(): T {
            var maxItem : T,
                i = 0,
                max = this.set.length;

            if (this.set.length > 0) {
                maxItem = this.set[0];
            } else {
                return null;    
            }
            for (i = 0, max = this.set.length; i < max; i += 1) {
                if (maxItem.compareTo(this.set[i]) === 1) {
                    maxItem = this.set[i];
                }
            }
            return maxItem;
        }

        get isReadOnly(): boolean {
            return false;
        }

        public add(item: T) {
            if (!this.contains(item)) {
                this.set.push(item);
            }
            return this;
        }

        public clear() {
            this.set = [];
            return this;
        }

        public contains(t: T): boolean {
            return this.set.indexOf(t) > -1;
        }

        public copyTo(startIndex?: number, endIndex?: number) : ICollection<T> {
            var coll: ICollection<T> = new SortedSet(),
                start: number   = (startIndex !== null && startIndex !== undefined ? startIndex : 0),
                end: number     = (endIndex !== null && endIndex !== undefined ? endIndex : this.set.length);

            for (var i = start; i < end; i += 1) {
                coll.add(this.set[i]);
            }
            return coll;
        }


        public exceptWith(other: Collections.IEnumerable<T>): Collections.ISet<T> {
            var enumerator = other.getEnumerator(); 
            enumerator.reset();

            while (enumerator.moveNext()) {
                var index = this.set.indexOf(enumerator.current);
                if (index > -1) {
                    this.set.splice(index, 1);
                }
            }
            return this;
        }

        public getEnumerator(): Collections.IEnumerator<T> {
            return this.set.getEnumerator();
        }

        public intersectWith(other: Collections.IEnumerable<T>): Collections.ISet<T> {
            var newSet = new SortedSet();

            var enumerator = other.getEnumerator();
            enumerator.reset();

            while (enumerator.moveNext()) {
                var t: T = enumerator.current;
                if (this.contains(t)) {
                    newSet.add(t);
                }
            }
            this.set = newSet.toArray();
            return this;
        }

        public isProperSubsetOf(other: Collections.IEnumerable<T>): boolean {
            var arr = other.toArray(),
                i = 0,
                max;

            if (other.toArray().length <= this.set.length) {
                return false;
            }
            for (i = 0, max = this.set.length; i < max; i += 1) {
                if (arr.indexOf(this.set[i]) === -1) {
                    return false;
                }
            }
            return true;
        }

        public isProperSupersetOf(other: Collections.IEnumerable<T>): boolean {
            var enumerator = other.getEnumerator();
            enumerator.reset();

            if (this.set.length <= other.toArray().length) {
                return false;
            }
            while(enumerator.moveNext()) {
                if (!this.contains(enumerator.current)) {
                    return false;
                }
            }
            return true;
        }

        public isSubsetOf(other: Collections.IEnumerable<T>): boolean {
            var arr = other.toArray(),
                i = 0,
                max;

            if (other.toArray().length < this.set.length) {
                return false;
            }
            for (i = 0, max = this.set.length; i < max; i += 1) {
                if (arr.indexOf(this.set[i]) === -1) {
                    return false;
                }
            }
            return true;
        }

        public isSupersetOf(other: Collections.IEnumerable<T>): boolean {
            var enumerator = other.getEnumerator();
            enumerator.reset();

            if (this.set.length < other.toArray().length) {
                return false;
            }
            while(enumerator.moveNext()) {
                if (!this.contains(enumerator.current)) {
                    return false;
                }
            }
            return true;
        }

        public overlaps(other: Collections.IEnumerable<T>): boolean {
            var enumerator = other.getEnumerator();
            enumerator.reset();

            while(enumerator.moveNext()) {
                if (this.contains(enumerator.current)) {
                    return true;
                }
            }
            return false;
        }

        public remove(item: T): Collections.ISet<T> {
            var index = this.set.indexOf(item);
            if (index !== -1) {
                this.set.splice(index, 1);
            }
            return this;
        }

        public removeAll(collection: Collections.ICollection<T>): Collections.ISet<T> {
            var enumerator = collection.getEnumerator();
            enumerator.reset();

            while(enumerator.moveNext()) {
                this.remove(enumerator.current);
            }
            return this;
        }

        public removeWhere(predicate: (t: T) => boolean) : boolean {
            var i = this.set.length - 1;

            for (; 0 < i; i -= 1) {
                if (predicate(this.set[i])) {
                    this.set.splice(i, 1);
                }
            }

            return true;
        }

        public reverse(): IEnumerable<T> {

            return null;
        }

        public setEquals(other: Collections.IEnumerable<T>): boolean {
            var enumerator = other.getEnumerator();
            enumerator.reset();

            if (other.toArray().length !== this.set.length) {
                return false;
            }
            while(enumerator.moveNext()) {
                if (!this.contains(enumerator.current)) {
                    return false;
                }
            }
            return true;
        }

        public symmetricExceptWith(other: Collections.IEnumerable<T>): Collections.ISet<T> {
            return this;
        }

        public toArray(): T[] {
            return this.set;
        }

        public unionWith(other: Collections.IEnumerable<T>): Collections.ISet<T> {
            var enumerator = other.getEnumerator();
            enumerator.reset();

            while(enumerator.moveNext()) {
                this.add(enumerator.current);
            }
            return this;
        }

        private initializeFromCollection(collection: Collections.IEnumerable<T>): SortedSet<T> {
            var enumerator = collection.getEnumerator();
            enumerator.reset();
            
            while (enumerator.moveNext()) {
                this.add(enumerator.current);
            }

            return this;
        }
    }
}
