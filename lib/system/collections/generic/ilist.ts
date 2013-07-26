///<reference path='icollection.ts' />

import C = module("icollection");

export module System.Collections.Generic {
	// Methods from IEnumerable
	// GetEnumerator
	// Methods from ICollection
	// Add, Clear, Contains, CopyTo, Remove
	export interface IList<T> extends C.System.Collections.Generic.ICollection<T> {
		Item(): { item: T; };

		IndexOf(item: T): number;
		Insert(index: number, item: T): void;
		RemoveAt(index: number): void;
	}
}