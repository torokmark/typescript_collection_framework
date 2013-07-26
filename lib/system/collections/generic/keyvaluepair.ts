
export module System.Collections.Generic {
    export class KeyValuePair<TKey, TValue> {
        constructor(public key: TKey, public value: TValue) {
        }

        get Key(): TKey {
            return this.key;
        }
        set Key(value) {
            this.key = value;
        }

        get Value(): TValue {
            return this.value;
        }
        set Value(value) {
            this.value = value;
        }

        public Equals(o: any): bool {
            var other: any;
            if (o === null || o === undefined) {
                return false;
            }
            if (typeof o === "keyvaluepair") {
                other = <KeyValuePair>o;
                if (other.key === this.key && other.value === this.value) {
                    return true;
                }
            }
            return false;
        }

        public GetHashCode(): number {
            return 0;
        }

        public GetType(): string {
            return "keyvaluepair";
        }

        public ToString(): string {
            var value : any = this.value;
            if (this.value === null) {
                value = "null";
            } else if (this.value === undefined) {
                value = "undefined";
            }
            return ""; //this.key + " : " + value;
        }

    }
}