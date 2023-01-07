import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrar = false;
   ocultar = false;
  
   Generar(){
     if(this.mostrar){
       this.mostrar = false;
     }else{
       this.mostrar = true;
     }
   }

   Generar1(){
    if(this.ocultar){
      this.ocultar = false;
    }else{
      this.ocultar = true;
    }
  }


  num1=0;
  num2=0;
  op="ninguno";
}
