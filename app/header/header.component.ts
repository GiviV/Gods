import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  giveValue(){
    return 'hello'
  }

  source:string = 'https://static.wixstatic.com/media/af1176_90c0e4d6bb724ea2a1d7f0e66b04ed66~mv2.jpg/v1/crop/x_0,y_44,w_2048,h_2048/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6301_JPG.jpg';

  slogan:string = 'Thoth'

}
