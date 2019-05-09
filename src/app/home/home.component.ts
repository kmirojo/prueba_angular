import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ // Animaciones ↓↓
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), {optional: true}),
        
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number; // Cantidad de Items
  btnText: string = 'Add a Post-It';
  goalText: string = 'My first life goal'; // Valor elemento a ingresar
  goals = []; // Arreglo de Elementos ingresados
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length; // Asigna un valor a la cuenta de elementos
  }

  addItem(){
    this.goals.push(this.goalText); // Empuja el elemnto al arreglo de elementos
    this.goalText = ''; // Deja el input de asignación vacío
    this.itemCount = this.goals.length; // Actualiza la cuenta de elementos
  }

  removeItem(i){
    this.goals.splice(i, 1); // elimina el elemento en la posición (i)
  }
}
