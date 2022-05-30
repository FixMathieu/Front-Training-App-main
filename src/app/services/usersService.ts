import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../model/user.model";
import{Injectable} from "@angular/core";
@Injectable({

    providedIn: 'root'
  
  })
export class usersService {

    constructor(private http:HttpClient){}

    public getUsers(){
        return this.http.get<User[]>(environment.host+"/users");
    }
}