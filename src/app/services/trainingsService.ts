import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Training } from "../model/training.model";
import{Injectable} from "@angular/core";
@Injectable({

    providedIn: 'root'
  
  })
export class trainingsService {

    constructor(private http:HttpClient){}

    public getTrainings(){
        return this.http.get<Training[]>(environment.host+"/trainings");
    }
}