import collection = module("icollection");
import ienumerable = module("ienumerable");


export module System.Collections.Generic {
    // Properteis and Methods from ICollection
    // Count, IsReadOnly, Clear, Contains, CopyTo, Remove
    // Methods from IEnumerable
    // GetEnumerator
    export interface ISet<T> extends collection.System.Collections.Generic.ICollection<T> {
        Add(item: T): bool;
        ExceptWith(other: ienumerable.System.Collections.Generic.IEnumerable<T>): void;
        IntersectWith(other: ienumerable.System.Collections.Generic.IEnumerable<T>): void;
        IsProperSubsetOf(other: ienumerable.System.Collections.Generic.IEnumerable<T>): bool;
        IsProperSupersetOf(other: ienumerable.System.Collections.Generic.IEnumerable<T>): bool;
        IsSubsetOf(other: ienumerable.System.Collections.Generic.IEnumerable<T>): bool;
        IsSupersetOf(other: ienumerable.System.Collections.Generic.IEnumerable<T>): bool;
        Overlaps(other: ienumerable.System.Collections.Generic.IEnumerable<T>): bool;
        SetEquals(other: ienumerable.System.Collections.Generic.IEnumerable<T>): bool;
        SymmetricExceptWith(other: ienumerable.System.Collections.Generic.IEnumerable<T>): void;
        UnionWith(other: ienumerable.System.Collections.Generic.IEnumerable<T>): void;
    }
}