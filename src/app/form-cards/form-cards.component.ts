import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-cards',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-cards.component.html',
  styleUrl: './form-cards.component.css'
})
export class FormCardsComponent {

  hero={name:"",power:0,img:""}

 constructor(public sh:SharedService){}
  
  ajout(){
    this.sh.heros.push(this.hero);
    console.log('item added')
    this.hero={name:"",power:0,img:""}
  }

}
