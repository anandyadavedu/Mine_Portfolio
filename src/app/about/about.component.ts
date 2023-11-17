import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  OnInit {
  showfooter=false;
  constructor(private router: Router) {}

  ngOnInit() {
    // Activate the footer when the "about us" component is active
    this.router.navigate([{ outlets: { footerOutlet: ['about'] } }]);
  }

}
