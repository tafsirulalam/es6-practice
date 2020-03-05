
class SurName {
    constructor(){
        this.SurName = "ul alam";
    }
}

class Name extends SurName{
    constructor (Name){
        super();
        this.Name = Name;
    }
    getFullName(){
        return this.Name + this.SurName;
    }
}
const baby1 = new Name("tafsir");
const baby2 = new Name("tansir");
console.log(baby1.getFullName(),baby2.getFullName());