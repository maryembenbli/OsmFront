import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize signInForm in the constructor
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get form() {
    return this.signInForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  
    // Stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }
  
    this.isLoading = true;
  
    // Call the login service method
   this.userService.loginUser(this.form['email'].value, this.form['password'].value)
      .subscribe(
        data => {
          if(data.success == true)
          console.log('Login successful:', data);
          this.router.navigate(['/dashboard']);
          alert('Login successful');
        },
        error => {
          console.log('Error occurred while logging in:', error);
          this.isLoading = false;
          alert('Error occurred while logging in. Please try again.');
          
        }
      );
    /*  this.userService.loginUser(this.form['email'].value, this.form['password'].value)
      .subscribe(
        response => {
        if (response && response.success === true) {
          alert('Login successful');
          this.isLoading = false;
          setTimeout(() => {
            this.router.navigate(['/dashboard']); // Navigate to the dashboard after a slight delay
          }, 100); // Adjust the delay time as needed
        } else {
          alert('Login failed');
          this.isLoading = false;
        }
      },
      error => {
        alert('An error occurred during login');
        console.error(error);
        this.isLoading = false;
      }
      );*/
  }
  
  
}
