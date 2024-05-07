import { Catalog } from "../service/catalog";
import { Client } from "./client";

export interface Contrat {
    id?: number;
    ntel: string;
    client: Client; 
    catalog?: Catalog
  
  }
  