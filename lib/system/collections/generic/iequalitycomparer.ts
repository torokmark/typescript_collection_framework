
export module System.Collections.Generic {
	export interface IEqualityComparer<T> {
		Equals(x: T, y: T): bool;
		GetHashCode(obj: T): number;
	}
}