module Collections {

    export interface IComparer<T> {
        compare(x: T, y: T): number;
    }

    export interface IEnumerator<T> {
        reset();
        moveNext(): boolean;
        dispose? ();
        current: T; //getter
    }

    export interface IEnumerable<T> {
        getEnumerator(): IEnumerator<T>;
        toArray(): T[];
    }

    export interface ICollection<T> extends IEnumerable<T> {
        count: number;	//getter
        isReadOnly: boolean;	//getter

        add(item: T): ICollection<T>;
        clear(): ICollection<T>;
        contains(item: T): boolean;
        copyTo(array: T[], arrayIndex: number): ICollection<T>;
        remove(item: T): ICollection<T>;
    }

    export interface IList<T> extends ICollection<T>, IEnumerable<T> {
        at(index: number): T;
        [index: number]: T;
        indexOf(item: T): number;
        insert(index: number, item: T): IList<T>;
        remove(item: T): IList<T>;
        removeAt(index: number): IList<T>;
    }

    export interface ISet<T> extends ICollection<T>, IEnumerable<T> {
        exceptWith(other: IEnumerable<T>): ISet<T>;
        intersectWith(other: IEnumerable<T>): ISet<T>;
        isProperSubsetOf(other: IEnumerable<T>): boolean;
        isProperSupersetOf(other: IEnumerable<T>): boolean;
        isSubsetOf(other: IEnumerable<T>): boolean;
        isSupersetOf(other: IEnumerable<T>): boolean;
        overlaps(other: IEnumerable<T>): boolean;
        setEquals(other: IEnumerable<T>): boolean;
        symmetricExceptWith(other: IEnumerable<T>): ISet<T>;
        unionWith(other: IEnumerable<T>): ISet<T>;
    }

    export interface IKeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;
    }

    export interface IDictionary<TKey, TValue> extends ICollection<IKeyValuePair<TKey, TValue>>,
    IEnumerable<IKeyValuePair<TKey, TValue>> {
        at(key: TKey): TValue;
        keys: ICollection<TKey>;
        values: ICollection<TValue>;
        containsKey(key: TKey): boolean;
        removeByKey(key: TKey): IDictionary<TKey, TValue>;
        tryGetValue(key: TKey, callbackValue: (value: TValue) => void ): boolean;
    }

    export interface IEqualityComparer<T> {
        equals(x: T, y: T): boolean;
        getHashCode(obj: T): number;
    }

    class ArrayEnumerator<T> implements IEnumerator<T> {
        private array: T[];
        private index: number = 0;

        constructor(array: T[]) {
            this.array = array;
            this.index = 0;
        }

        public reset() : ArrayEnumerator<T> {
            this.index = 0;
            return this;
        }

        public get current(): T {
            return this.array[this.index];
        }

        public moveNext(): boolean {
            var result = this.index < this.array.length;
            this.index++;
            return result;
        }
    }

    Array.prototype.getEnumerator = function <T>(): Collections.IEnumerator<T> {
        return new ArrayEnumerator<T>(this);
    };

    Array.prototype.toArray = function () {
        return this;
    };
}

interface Array<T> extends Collections.IEnumerable<T> { }