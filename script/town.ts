class Town {
    private city: string
    private country: string
    private nbInhabitants: number
    private static instanceCount: number = 1
    constructor(city: string,country: string,nbInhabitants: number){
        console.log(Town.instanceCount++)
        this.city = city
        this.country = country
        this.nbInhabitants = nbInhabitants
    }
    public getCity():string {
        return this.city
    }
    public setCity(city: string){
        this.city = city
    }
    public getCountry():string{
        return this.country
    }
    public setCountry(country:string){
        this.country = country
    }
    public setNbHabitants(nbHabitants: number){
        if(nbHabitants<0){
            console.log("don't number negatif")
        }else{
            this.nbInhabitants = nbHabitants
        }
    }
    public getNbHabitants():number{
        return this.nbInhabitants
    }
    public toString():string{
        return 'city of '+this.city+' in '+this.country+' with '+this.nbInhabitants+' habitants'
    }
}
 let toulouse: Town = new Town('toulouse','france',4000)
 let paris: Town = new Town('paris','france',300)
 paris.setNbHabitants(23)

 console.log(toulouse.toString()," ",paris.toString())

