///<reference path="../lib/interfaces.ts" />

class CompareElement implements Collections.IComparable<CompareElement> {
    private n: number;

    constructor(n: number) {
        this.n = n;
    }

    get N(): number {
        return this.n;
    }

    public toString(): string {
        return "n is " + this.n;
    }

    public compareTo(x: CompareElement): number {
        if (this.n > x.n) {
            return 1;
        } else if (this.n < x.n) {
            return -1;
        } else {
            return 0;
        }
    }
}    
