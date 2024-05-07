import { Group } from './group';

export class Profil {
  id: number;
  titre: string;
  //groups: Group[]; 

  constructor(id: number, titre: string) {
    this.id = id;
    this.titre = titre;
    //this.groups = [];
    
  }
}
