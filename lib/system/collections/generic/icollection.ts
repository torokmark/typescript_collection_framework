import enumerable = module("ienumerable");

export module System.Collections.Generic {
    // Methods from IEnumerable:
    // GetEnumerator
    export interface ICollection<T> extends enumerable.System.Collections.Generic.IEnumerable<T> {
        // public properties
        Count(): { count : number; };
        IsReadOnly(): { isReadOnly: bool; };
        
        // public methods
        Add(item: T): void;
        Clear(): void;
        Contains(item: T): bool;
        CopyTo(array: T[], arrayIndex: number);
        Remove(item: T): bool;
    }
}

