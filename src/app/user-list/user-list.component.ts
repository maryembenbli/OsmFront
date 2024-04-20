import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit{
  users: User[] = [];

  filteredUsers: User[] = [];
  searchQuery: string = '';

  
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUserList().subscribe(data =>{
      console.log(data);
      this.users= data;
    },
    error => {
      console.error('Error fetching products:', error);
    })
  }
  searchUsers(): void {
    if (!this.searchQuery) {
      // If search query is empty, show all users
      this.getUsers();
      return;
    }
    this.users = this.users.filter((user) =>
      user.firstname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  
}
