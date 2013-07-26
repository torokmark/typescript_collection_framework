import collection = module("icollection");
import keyvaluepair = module("keyvaluepair");

export module System.Collections.Generic {
    // Methods and Properties from ICollection
    // Count, IsReadOnly, Add, Add, Clear, Contains, CopyTo, Remove
    // Methods from IEnumerable
    // GetEnumerator
    export interface IDictionary<TKey, TValue> extends collection.System.Collections.Generic.ICollection<keyvaluepair.System.Collections.Generic.KeyValuePair<TKey, TValue>> {
        // public properties
        Item() : { item: number; };
        // public methods
        ContainsKey(key: TKey): bool;
        Remove(key: TKey): bool;
        TryGetValue(key: TKey, value: TValue): bool;
    }
}