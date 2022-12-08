export class BreakPoint {

    constructor(breakpoint) {
        this.breakpoint = breakpoint;
    }

    toBootstrapClass() {
        switch (this.breakpoint) {
            case "tiny":
                return "xs"
            case "small":
                return "sm"
            case "medium":
                return "md"
            case "large":
                return "lg"
            case "big":
                return "xl"
            case "huge":
                return "xxl"
            default:
                throw Error("Invalid breakpoint");
        }
    }
}

export class BreakPointSize {

    constructor(breakpoint, size) {
        this.breakpoint = new BreakPoint(breakpoint)
        this.size       = size
    }

    toBootstrapClass() {
        const bp_c = this.breakpoint.toBootstrapClass()
        
        if (bp_c === "xs")
            return `col-${this.size}`

        return `col-${bp_c}-${this.size}`
    }

    static of(breakpoint, size) {
        return new BreakPointSize(breakpoint, size)
    }
}

export class BreakPointOffset {

    constructor(breakpoint, offset) {
        this.breakpoint = new BreakPoint(breakpoint)
        this.offset     = offset
    }

    toBootstrapClass() {
        const bp_c = this.breakpoint.toBootstrapClass()
        
        if (bp_c === "xs")
            return `offset-${this.offset}`

        return `offset-${bp_c}-${this.offset}`
    }

    static of(breakpoint, offset) {
        return new BreakPointOffset(breakpoint, offset)
    }
}