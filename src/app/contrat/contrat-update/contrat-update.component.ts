import { Component } from '@angular/core';
import { Contrat } from '../contrat';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratService } from '../contrat.service';
import { Catalog } from 'src/app/service/catalog';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-contrat-update',
  templateUrl: './contrat-update.component.html',
  styleUrls: ['./contrat-update.component.css']
})
export class ContratUpdateComponent {
  contratId!: number;
  contrat!: Contrat;
  catalogs: Catalog[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private contratService: ContratService, private catalogService : CatalogService) { }

  ngOnInit(): void {
    this.contratId = this.route.snapshot.params['id'];
    this.fetchContrat(this.contratId);
  }
  
  getCatalogs():void{
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

  fetchContrat(id: number) {
    this.contratService.getContrat(id)
      .subscribe(
        (contrat: Contrat) => {
          this.contrat = contrat;
        },
        error => {
          console.error('Error fetching contrat:', error);
          // Handle error if needed
        }
      );
  }

  updateContrat() {
    this.contratService.updateContrat(this.contratId, this.contrat)
      .subscribe(
        response => {
          console.log('Contract updated:', response);
          // Redirect to contract details page or any other page as needed
          this.router.navigateByUrl('/contrats');
        },
        error => {
          console.error('Error updating contract:', error);
        }
      );
  }
}
