import R = module("ireadonlycollection");

export module System.Collections.Generic {
    // Properteis and Methods from IReadOnlyCollection
    // Count
    // Methods from IEnumerable
    // GetEnumerator
    export interface IReadOnlyList<T> extends R.System.Collections.Generic.IReadOnlyCollection<T> {
        Item(index: number): T;
    }
}