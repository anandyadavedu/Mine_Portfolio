import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: [''], // You can add validation for the message if needed
      
    });
  }
  ngOnInit(): void {
   
  }

  showfooter=true;
  showInstagramName=false;
  showFacebookName=false;
  showLinkedInName=false;
  showGitHubName=false;

  showName(name:string){
    switch(name){
      case 'Instagram':
        this.showInstagramName=true;
        break;
      case 'Facebook':
        this.showFacebookName=true;
        break;
      case 'LinkedIn':
        this.showLinkedInName=true;
        break; 
      case 'GitHub':
        this.showGitHubName=true;
        break;


    }

  }
  hideName(){
    this.showInstagramName=false;
    this.showFacebookName=false;
    this.showLinkedInName=false;
    this.showGitHubName=false;

  }

  showAlert() {
    if(this.form.valid){
    
      // Swal.fire(`ThankYou! ${this.form.value.fullName}`, 'Thank You For Your Feedback.', 'success');

      Swal.fire({
        title: `Thank You! <span class="custom-title"> ${this.form.value.fullName}</span>`,
        text: 'Thank You For Your Feedback.',
        icon: 'success',
        customClass: {
          title: 'custom-title-class',
        },
      });
    }
    else{
      Swal.fire('Something Missing!', 'Fill all the required field', 'error');
    }
   
  }

}
