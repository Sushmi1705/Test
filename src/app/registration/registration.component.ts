import { Component } from '@angular/core';
import { RegistrationFormService } from './registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  constructor(private router: Router,private registrationFormService: RegistrationFormService) {}

  onSubmit(formValues: any) {
    this.registrationFormService.createRegistrationForm(formValues).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/show-details']);
      },
      (error: any) => {
        console.error('Error during registration:', error);
     }
    );
  }
}
