export class Element {
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
}    
