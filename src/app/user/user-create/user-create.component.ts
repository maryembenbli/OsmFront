import { Component, ContentChild, OnInit } from '@angular/core';
import { Profil } from 'src/app/service/profil';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';
import { Group } from 'src/app/service/group';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/error-dialog/error-dialog.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit   {
//user: User = { id: 0, firstname: '', lastname: '', email: '', password: '', profile: undefined }; // Adjust the default value of profile
//user: User = { id: 0, firstname: '', lastname: '', email: '', password: '', profile: { id: 0, profileTitre: '' } };

//profiles: Profil[] = [];
/*successMessage: string = '';
errorMessage: string = '';*/

/*constructor(
  private userService: UserService,
  private profileService: ProfileService,
  private router: Router,
  private dialog: MatDialog
) {}*/
/*user: User = new User(0, '', '', '', '', { id: 0, titre: '' });

  constructor(private http: HttpClient,private dialog: MatDialog, private profileService: ProfileService,) {}
  ngOnInit(): void {
    this.fetchProfilesAndGroups();
  }

  submitForm() {
    if (this.user.profile) {
      this.http.post('http://localhost:8080/api/user/register', this.user)
        .subscribe(
          response => {
            console.log('User created successfully', response);
            // Réinitialiser le formulaire ou rediriger l'utilisateur vers une autre page après la création réussie
          },
          error => {
            console.error('Error creating user', error);
            // Gérer les erreurs (par exemple, afficher un message d'erreur à l'utilisateur)
          }
        );
    } else {
      console.error('User profile is undefined');
      // Gérer le cas où user.profile est undefined (par exemple, afficher un message d'erreur à l'utilisateur)
    }
  }
  
fetchProfilesAndGroups() {
  this.profileService.getProfilesAndGroups()
  .subscribe(
    profiles => {
      this.profiles = profiles;
      console.log(profiles);
    },
    error => {
      console.error('Error fetching profiles:', error);
    }
  );
}
}/*
onSubmit() {
  if (this.user.profile && this.user.profile.profileTitre) { // Add null check
    this.userService.registerUser(this.user)
      .subscribe(
        response => {
          console.log('User created:', response);
          const dialogRef = this.dialog.open(UserCreateSuccessDialog, {
            data: { message: 'User created successfully.' }
          });
          this.errorMessage = '';
          this.resetForm();
          this.successMessage = 'User created successfully.';
          setTimeout(() => {
            this.router.navigateByUrl('/users');
          }, 2000);
        },
        error => {
          console.error('Error creating user:', error);
          this.openErrorDialog('Error creating user. Please try again.');
        }
      );
  } else {
    console.error('Profile is undefined or null.');
    this.openErrorDialog('Error creating user. Profile is missing.');
  }
}

resetForm() {
 // this.user = { id: 0, firstname: '', lastname: '', email: '', password: '', profile: undefined };
 this.user= { id: 0, firstname: '', lastname: '', email: '', password: '', profile: { id: 0, profileTitre: '' } };

}

openErrorDialog(errorMessage: string) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = {
    errorMessage: errorMessage
  };
  this.dialog.open(ErrorDialogComponent, dialogConfig);
}


@Component({
selector: 'app-user-create-success-dialog',
template: `
  <h2 style="color: green;">Success</h2>
  <p>User created successfully.</p>
`,
styles: [
  `
  :host {
    display: block;
    padding: 24px;
  }
  `
]
})
export class UserCreateSuccessDialog {}
*/
newUser: User = { id: 0, firstname: '', lastname: '', email: '', password: 'Billcom', profil: undefined }; // Initialize a new user
errorMessage: string = '';
successMessage : string='';
profiles: Profil[] = []; // Array to hold profiles
profilesAndGroups: any[] = [];
constructor(
  private userService: UserService,
  private profileService: ProfileService, private router: Router,private dialog: MatDialog
) {  }

ngOnInit(): void {
  this.loadProfilesAndGroups()
    ; // Load profiles when the component initializes
}

loadProfiles(): void {
  this.profileService.getProfilesAndGroups().subscribe(
    (profiles: Profil[]) => {
      this.profiles = profiles; // Assign profiles fetched from the service
      console.log(profiles);
    },
    error => {
      console.error('Error fetching profiles:', error); // Log error for debugging purposes
    }
  );
}

createUser(): void {
  this.newUser.password = 'Billcom';
  this.userService.registerUser(this.newUser).subscribe(
    response => {
      console.log(response);
      const dialogRef = this.dialog.open(UserCreateSuccessDialog, {
        data: { message: 'Contract created successfully.' }
      });
      this.successMessage = 'Contract created successfully.';
      setTimeout(() => {
        this.router.navigateByUrl('/users');
      }, 2000);
    },
    error => {
      console.error('Error creating user:', error); // Log error for debugging purposes
      this.errorMessage = 'Error creating user. Please try again.';
      console.log(this.newUser) // Display error message to the user
      if (error.status === 409) {
        this.openErrorDialog('User with the same email already exists');
      } else {
        this.openErrorDialog(error.error.message);
      }
    }
  );
}
loadProfilesAndGroups(): void {
  this.profileService.getProfilesAndGroups().subscribe(
    data => {
      this.profilesAndGroups = data;
      console.log(data);


    },
    error => {
      console.log(error);
    }
  );
}
openErrorDialog(errorMessage: string) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = {
    errorMessage: errorMessage
  };
  this.dialog.open(ErrorDialogComponent, dialogConfig);
}
showPassword = false;

toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
@Component({
  selector: 'app-user-create-success-dialog',
  template: `
    <h2 style="color: green;">Success</h2>
    <p>User created successfully.</p>
  `,
  styles: [
    `
    :host {
      display: block;
      padding: 24px;
    }
    `
  ]
})
export class UserCreateSuccessDialog {}