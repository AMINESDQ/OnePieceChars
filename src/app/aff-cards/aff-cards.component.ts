import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-aff-cards',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './aff-cards.component.html',
  styleUrl: './aff-cards.component.css'
})
export class AffCardsComponent {
  
  constructor(public sh:SharedService){}

  
}
