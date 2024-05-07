// contract-create.component.ts
import { Component, OnInit } from '@angular/core';
import { Contrat } from '../contrat';
import { Catalog } from 'src/app/service/catalog';
import { CatalogService } from 'src/app/service/catalog.service';
import { ContratService } from '../contrat.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/error-dialog/error-dialog.component';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-contract-create',
  templateUrl: './contrat-create.component.html',
  styleUrls: ['./contrat-create.component.css']
})
export class ContratCreateComponent implements OnInit {
  contrat: Contrat = { ntel: '', client: { id: undefined, firstname: '', lastname: '', ncin: '' }, catalog: undefined  };
  catalogs: Catalog[] = []; // Array to store catalogs
  successMessage: string = ''; 
  errorMessage: string = '';
  constructor(private router: Router,private contratService: ContratService, 
    private catalogService: CatalogService, private clientService : ClientService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    // Fetch catalogs when the component initializes
    this.catalogService.getCatalogList()
      .subscribe(
        catalogs => {
          this.catalogs = catalogs;
        },
        error => {
          console.error('Error fetching catalogs:', error);
        }
      );
  }

 
  handleSubmit() {
    this.contratService.createContrat(this.contrat)
      .subscribe(
        response => {
          console.log('Contract created:', response);
          console.log(this.contrat);
          const dialogRef = this.dialog.open(ContractCreateSuccessDialog, {
            data: { message: 'Contract created successfully.' }
          });
          //this.successMessage = 'Contract created successfully.'; 
          this.errorMessage = ''; 
          this.resetForm();
         
          this.successMessage = 'Contract created successfully.';
          setTimeout(() => {
            this.router.navigateByUrl('/contrats');
          }, 2000); // 100ms delay 
        },
        error => {
          console.error('Error creating contract:', error);
          console.log('Error response body:', error.error);
        if (error.status === 400) {
          this.openErrorDialog('A contract with the provided NTEL already exists.');
        } else {
          this.openErrorDialog(error.error.message);
        }
       // this.successMessage = '';
      }
        
      );
  }

  resetForm() {
    this.contrat = { ntel: '', client: { id: undefined, firstname: '', lastname: '', ncin: '' }, catalog: undefined };
  }
  openErrorDialog(errorMessage: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      errorMessage: errorMessage
    };
    this.dialog.open(ErrorDialogComponent, dialogConfig);
  }
  /* handleSubmit() {
    this.contratService.createContrat(this.contrat)
      .subscribe(
        response => {
          console.log('Contract created:', response);
          this.successMessage = 'Contract created successfully.'; // Set success message
          // Optionally, you can navigate to the list of contracts after creating the contract
          this.router.navigateByUrl('/contrats'); // Redirect to the list of contracts
        },
        error => {
          console.error('Error creating contract:', error);
        }
      );
  }*/
  /*handleSubmit() {
    this.errorMessage = ''; // Reset error message
    // Check if the NCIN or NTEL already exists
    this.contratService.checkUnique(this.contrat.client.ncin, this.contrat.ntel)
      .subscribe(
        (response: { ncinExists: boolean, ntelExists: boolean }) => {
          if (response.ncinExists) {
            this.errorMessage = 'NCIN already exists. Please use a different NCIN.';
          } else if (response.ntelExists) {
            this.errorMessage = 'NTEL already exists. Please use a different NTEL.';
          } else {
            // If NCIN and NTEL are unique, proceed with contract creation
            this.contratService.createContrat(this.contrat)
              .subscribe(
                () => {
                  this.successMessage = 'Contract created successfully.';
                  this.router.navigateByUrl('/contracts');
                },
                error => {
                  console.error('Error creating contract:', error);
                }
              );
          }
        },
        error => {
          console.error('Error checking uniqueness:', error);
        }
      );
  }*/
  fetchClientInfo(ncin: string) {
    this.clientService.getClient(ncin)
      .subscribe(
        (clientInfo: any) => {
          // Update contrat.client with fetched client information
          this.contrat.client = clientInfo;
        },
        error => {
          console.error('Error fetching client information:', error);
          // Handle error if needed
        }
      );
  }
}
@Component({
  selector: 'app-contract-create-success-dialog',
  template: `
    <h2 style="color: green;">Success</h2>
    <p>Contract created successfully.</p>
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
export class ContractCreateSuccessDialog {}