import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  showAlert:boolean = false


  closeAlert(){
    this.showAlert = true
  }



}
