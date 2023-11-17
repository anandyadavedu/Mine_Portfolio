import { Component } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Porfolio';


  isNavbarCollapsed=true;

  closeNavbar(){
    if(!this.isNavbarCollapsed){
      this.isNavbarCollapsed=true;

    }
   

  }

}
