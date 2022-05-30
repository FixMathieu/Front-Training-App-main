import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { trainingsService } from 'src/app/services/trainingsService';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  [x: string]: any;
  listTrainings : Training[] | undefined;
  error = null;
 
  constructor(private cartService : CartService, private router : Router, private trainingsService : trainingsService) {
   }

  ngOnInit(): void {
    this.getAllTrainings();
    // this.listTrainings = [ 
    //   {id:1,name:'Java',description:'Formation Java SE 8 sur 5 jours',price:1500,quantity:1 },
    //   {id:2,name:'DotNet',description:'Formation DotNet 3 jours',price:1000,quantity:1 },
    //   {id:3,name:'Python',description:'Formation Python/Django 5 jours',price:1500,quantity:1 } 
    // ];
  }
  getAllTrainings(){
    this.trainingsService.getTrainings().subscribe({
      next : (data)=> this.listTrainings =data,
      error : (err)=> this.error = err.message,
      complete : ()=> this.error = null
    })
  }

  onAddToCart(training:Training){
    if(training.quantity > 0) {
     this.cartService.addTraining(training);
     this.router.navigateByUrl('cart');
    }
  }
}
