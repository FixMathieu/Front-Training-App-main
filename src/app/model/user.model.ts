export class User {
    id : number;
    name : string;
    firstName : string;
    address : string;
    phone : string;
    email : string;
    password : string;

    constructor(id : number,name : string,firstName : string, address : string,phone : string, email:string,password:string){
       this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
};