///<reference path='ienumerator.ts' />

import enumerator = module("ienumerator");

export module System.Collections.Generic {
	export interface IEnumerable<T> {
		GetEnumerator(): enumerator.System.Collections.Generic.IEnumerator<T>;
	}
}