// Class for parsing JS strings

class JSONParser{
    string: string
    object: object

    constructor(string:string){
        this.string = string
        this.object = JSON.parse(this.string)
    }

    //@TODO: needs test
    getString(): string {
        return this.string
    }

    //@TODO: needs test
    getObject(): object {
        return this.object
    }

    //@TODO: needs test
    getKeys(): string[]{
        return Object.keys(this.object)
    }

    //@TODO: needs test
    getValues(): any{
        return Object.values(this.object)
    }

    //@TODO: needs test
    getSize(): number{
        return this.string.length
    }

}

module.exports = {JSONParser}