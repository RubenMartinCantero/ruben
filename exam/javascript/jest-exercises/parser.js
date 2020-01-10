// Class for parsing JS strings

class JSONParser{

    constructor(string){
        this.string = string
        this.object = JSON.parse(this.string)
    }

    //@TODO: needs test
    getString(){
        return this.string
    }

    //@TODO: needs test
    getObject(){
        return this.object
    }

    //@TODO: needs test
    getKeys(){
        return Object.keys(this.object)
    }

    //@TODO: needs test
    getValues(){
        return Object.values(this.object)
    }

    //@TODO: needs test
    getSize(){
        return this.string.length
    }

}

module.exports = {JSONParser}