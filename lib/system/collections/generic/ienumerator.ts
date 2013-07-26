
export module System.Collections.Generic {
    export interface IEnumerator<T> {
        // public properties
        Current(): { current: T; };
        // public methods
        Dispose(): void;
        MoveNext(): bool;
        Reset(): void;
    }
}