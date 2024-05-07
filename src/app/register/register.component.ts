/*import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('registerForm') registerForm!: NgForm; // Declare registerForm as a ViewChild

  user: User = new User('', '', '', ''); // Initialize user object with default values
  success: boolean = false; // Flag to show success message

  constructor(private userService: UserService, private router: Router) {}
  ngAfterViewInit(): void {
    if (!this.registerForm) {
      console.error('Register form is not available.');
    }
  }
  get form(): { [key: string]: AbstractControl; }
{
    return this.signInForm.controls;
}

  // Method to submit the registration form
  submitForm() {
    if (!this.user || !this.registerForm) {
      return; // If user or registerForm is null, do nothing
    }

    this.userService.registerUser(this.user).subscribe(
      () => {
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login page after successful registration
        }, 2000); // Redirect after 2 seconds
      },
      (error) => {
        console.error('Error occurred while registering user:', error);
        // Handle error here, maybe show error message to user
      }
    );
  }
}*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Profil } from '../service/profil';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /*registerForm!: FormGroup; // Declare registerForm as a FormGroup
  user: User = new User(0,'', '', '', '',new Profil('')); // Initialize user object with default values
  success: boolean = false; // Flag to show success message

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profil:['']
    });
  }

  // Method to submit the registration form
  submitForm() {
    if (this.registerForm.invalid) {
      return; // If form is invalid, do nothing
    }

    // Assign form values to user object
    this.user.firstname = this.registerForm.value.firstname;
    this.user.lastname = this.registerForm.value.lastname;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.profile.titre=this.registerForm.value.profil;
    // Call the register service method
    this.userService.registerUser(this.user).subscribe(
      () => {
        console.log('Registration successful');
        alert("Registration successful");
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login page after successful registration
        }, 2000); // Redirect after 2 seconds
      },
      (error) => {
        console.error('Error occurred while registering user:', error);
        if (error.status === 409) {
          alert("Registration failed: User with the same email already exists.");
        } else {
          alert("Registration failed. Please try again.");
        }
      }
    );
  }*/
}


