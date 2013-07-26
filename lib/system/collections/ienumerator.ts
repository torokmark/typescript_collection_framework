
module System.Collections {
    export interface IEnumerator {
        Current(): { current: any; };
        MoveNext(): bool;
        Reset(): bool;
    }
}