import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { usersService } from '../services/usersService';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 listUsers : User[] | undefined;
error = null;
toto : boolean= true;

constructor(private usersService : usersService) { }

ngOnInit(): void {
  this.getAllUsers();
  // console.log(this.getAllUsers())
}
getAllUsers(){
  this.usersService.getUsers().subscribe({
    next : (data)=> this.listUsers =data,
      error : (err)=> this.error = err.message,
      complete : ()=> this.error = null

  })
}
connect(){
  
}

}
