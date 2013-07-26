import E = module("ienumerable");

export module System.Collections.Generic {
    // Methods from IEnumerable
    // GetEnumerator
    export interface IReadOnlyCollection<T> extends E.System.Collections.Generic.IEnumerable<T> {
        Count(): { count: number; };
    }
}