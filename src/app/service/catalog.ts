import { Contrat } from "../contrat/contrat";
import { Product } from "../product/product";
import { Group } from "./group";

export interface Catalog {
    id: number;
    catalogName: string;
    group: Group; 
    products: Product[]; 
    contrats: Contrat[]; 
    showDetails?: boolean; 
}