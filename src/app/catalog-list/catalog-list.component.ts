import { Component } from '@angular/core';
import { Catalog } from '../service/catalog';
import { CatalogService } from '../service/catalog.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent {
  catalogs: Catalog[] = [];
  productService: any;
  constructor(private catalogService: CatalogService) { }
  ngOnInit(): void {
    this.loadCatalogs();
  }


  loadCatalogs() {
    this.catalogService.getCatalogList().subscribe(catalogs => {
      this.catalogs = catalogs.map(catalog => ({ ...catalog, showDetails: false }));
    });
  }



  /*toggleDetails(catalog: Catalog) {
    catalog.showDetails = !catalog.showDetails;
  }*/
  toggleDetails(catalog: Catalog) {
    catalog.showDetails = !catalog.showDetails;
    if (catalog.showDetails && catalog.products.length === 0) {
      this.catalogService.getProductListByCatalogId(catalog.id).subscribe(products => {
        catalog.products = products;
      });
    }
  }
  hasProductsOfType(products: Product[], nature: string): boolean {
    return products && products.some(product => product.nature === nature);
  }

  /*toggleDetails(catalog: Catalog) {
  catalog.showDetails = !catalog.showDetails;
  if (catalog.showDetails && !catalog.products) {
    this.catalogService.getProductListByCatalogId(catalog.id).subscribe(products => {
      catalog.products = products;
    });
  }
  // Close details of other catalog items
  this.catalogs.forEach(item => {
    if (item !== catalog) {
      item.showDetails = false;
    }
  });
}*/
  
}
