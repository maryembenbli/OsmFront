import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit{
  users: User[] = [];

  filteredUsers: User[] = [];
  searchQuery: string = '';

  
  constructor(private userService:UserService,private router: Router){

  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUserList().subscribe(data =>{
      console.log(data);
      this.users= data;
      this.filteredUsers = this.users;
    },
    error => {
      console.error('Error fetching products:', error);
    })
  }
  searchUsers(): void {
    if (!this.searchQuery) {
      
      this.getUsers();
      return;
    }
    this.users = this.users.filter((user) =>
      user.firstname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  /*(userId: number, updatedUser: User): void {
    this.userService.updateUser(userId, updatedUser).subscribe(
      () => {
        console.log('User updated successfully.');
        this.getUsers(); 
      },
      (error) => {
        console.error('Error occurred while updating user:', error);
      }
    );
  }*/
  updateUser(userId: number): void {
    if (userId !== 0) {
      // Navigate to the update page with the user's ID
      this.router.navigate(['/updateuser', userId]);
    } else {
      console.error('Invalid user ID:', userId);
      // Handle the case where the user ID is invalid
    }
  }
  

  deleteUser(userId: number | null): void {
    console.log('Deleting user with ID:', userId);
    if (userId === null) {
      console.error('Invalid userId:', userId);
      
      return;
    }
  
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully.');
        this.getUsers();
      },
      (error) => {
        console.error('Error occurred while deleting user:', error);
        
      }
    );
  }

  
}
