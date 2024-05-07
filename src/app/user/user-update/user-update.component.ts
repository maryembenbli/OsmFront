import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  profilesAndGroups: any[] = [];
  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    profil: { id: 0, titre: '' }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

 /* getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }*/
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id')! || 0;
    if (id !== 0) {
      this.userService.getUser(id)
        .subscribe(user => this.user = user);
    } else {
      console.error('User ID is null or invalid.');
      // Handle the case where the ID is null or invalid, e.g., navigate to an error page
    }
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
  updateUser(): void {
    this.userService.updateUser(this.user.id, this.user)
      .subscribe(() => {
        console.log('User updated successfully.');
        this.router.navigate(['/users']); // Assuming 'users' is the route for your user list
      }, error => {
        console.error('Error occurred while updating user:', error);
      });
  }

}
