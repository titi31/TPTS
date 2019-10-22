class Person {
    private lastname:string
    private firstname:string
    private age:number
    private adresse: string
    constructor(lastname:string,firstname:string,age:number,adresse:string){
        this.lastname = lastname
        this.firstname = firstname
        this.age = age
        this.adresse = adresse
    }
    public getLastname():string{
        return this.lastname
    }
    public setLastname(lastname:string){
        this.lastname = lastname
    }
    public getFirstname():string{
        return this.firstname
    }
    public setFirstname(firstname:string){
        this.firstname= firstname
    }
    public getAge():number{
        return this.age
    }
    public setAge(age:number){
        this.age = age
    }
    public getAdresse():string{
        return this.adresse
    }
    public setAdresse(adresse:string){
        this.adresse = adresse
    }
    public toString():string{
        return 'my name is '+ this.firstname +' '+this.lastname+' I am '+this.age+' years and I live at '+this.adresse
    }
}
const titi: Person = new Person('timothé','laude',22,'1 bis avenue escalade')
const thierry: Person = new Person('thierry','laude',50,"25 boulevard d'arcole")
console.log(titi+" "+thierry)
