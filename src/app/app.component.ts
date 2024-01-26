import { Component,ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormCardsComponent } from './form-cards/form-cards.component';
import { AffCardsComponent } from './aff-cards/aff-cards.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,FormCardsComponent,AffCardsComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  
})

export class AppComponent {


 title='my-app'

  hero={name:"",power:0,img:""}

  heros :any[]=[];
  
  ajout(){
    this.heros.push(this.hero);
    console.log('item added')
    this.hero={name:"",power:0,img:""}
  }

  
}
