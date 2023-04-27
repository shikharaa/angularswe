//This will create db keys which is used in survey page to send data to backend. 


export class Model{

    public firstName: string;
    public lastName: string;
    public streetAddress: string;
    public city: string;
    public state: string;
    public zip: string;
    public phoneNumber: string;
    public email: string;
    public dateOfSurvey: string;
    public likely: string;
    public interest: string;
    public recommendation: string

    constructor(
       firstName: string,
       lastName: string,
       streetAddress: string,
       city: string,
       state: string,
       zip: string,
       phoneNumber: string,
       email: string,
       dateOfSurvey: string,
       likely: string,
       interest: string,
       recommendation: string 
    ){
        this.firstName=firstName;
        this.lastName=lastName;
        this.streetAddress=streetAddress;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.dateOfSurvey=dateOfSurvey;
        this.likely=likely;
        this.interest=interest;
        this.recommendation=recommendation;
    }

    public getFirstname(): string {
        return this.firstName;
    }

    public setFirstname(firstname: string): void {
        this.firstName = firstname;
    }

    public getLastname(): string {
        return this.lastName;
    }

    public setLastname(lastname: string): void {
        this.lastName = lastname;
    }

    public getAddress(): string {
        return this.streetAddress;
    }

    public setAddress(streetAddress: string): void {
        this.streetAddress = streetAddress;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public getZip(): string {
        return this.zip;
    }

    public setZip(zip: string): void {
        this.zip = zip;
    }

    public getMobile(): string {
        return this.phoneNumber;
    }

    public setMobile(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getDateOfSurvey(): string {
        return this.dateOfSurvey;
    }

    public setDateOfSurvey(dateOfSurvey: string): void {
        this.dateOfSurvey = dateOfSurvey;
    }

    public getLikes(): string {
        return this.likely;
    }

    public setLikes(likely: string): void {
        this.likely = likely;
    }

    public getSources(): string {
        return this.interest;
    }

    public setSources(interest: string): void {
        this.interest = interest;
    }

    public getRecommendation(): string {
        return this.recommendation;
    }

    public setRecommendation(recommendation: string): void {
        this.recommendation = recommendation;
    }

}