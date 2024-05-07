import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contrat } from '../contrat';
import { ContratService } from '../contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent {
  contracts: Contrat[] = [];

  constructor(private contratService: ContratService,private router: Router) { }

  ngOnInit(): void {
    this.getContracts();
  }
  getContracts(){
    this.contratService.getAllContrats()
    .subscribe(
      contracts => {
        this.contracts = contracts;
      },
      error => {
        console.error('Error fetching contracts:', error);
      }
    );
  }
  updateContract(id: number): void {
    if (id !== 0) {
      // Navigate to the update page with the user's ID
      this.router.navigate(['/updatecontrat', id]);
    } else {
      console.error('Invalid user ID:', id);
      // Handle the case where the user ID is invalid
    }
  }
  
  deleteContrat(id: number | null): void {
    console.log('Deleting user with ID:', id);
    if (id === null) {
      console.error('Invalid Contract id:', id);
      
      return;
    }
  
    this.contratService.deleteContrat(id).subscribe(
      () => {
        console.log('User deleted successfully.');
        this.getContracts();
      },
      (error) => {
        console.error('Error occurred while deleting user:', error);
        
      }
    );
  }
}