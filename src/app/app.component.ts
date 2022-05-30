import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-front-app';
  constructor(public cartService : CartService, private router : Router) { }
  
  
}
