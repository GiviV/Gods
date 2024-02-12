import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-pantheon',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pantheon.component.html',
  styleUrl: './pantheon.component.css'
})
export class PantheonComponent {

  gods = [
    'thoth', 
    'Ra',
    'Isis'
  ]

}
