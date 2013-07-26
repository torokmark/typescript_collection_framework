
module System.Collections.Generic {
	export interface IComparer<T> {
		Compare(x: T, y: T): number;
	}
}