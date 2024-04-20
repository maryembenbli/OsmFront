import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
/*export class ProfilComponent {
  groups: any[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadGroupsByProfileId(1); // Replace 1 with the actual profile ID
  }

  loadGroupsByProfileId(profileId: number): void {
    this.profileService.getGroupsByProfileId(profileId).subscribe(
      data => {
        this.groups = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}*/
export class ProfilComponent implements OnInit {
  profilesAndGroups: any[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadProfilesAndGroups();
  }

  loadProfilesAndGroups(): void {
    this.profileService.getProfilesAndGroups().subscribe(
      data => {
        this.profilesAndGroups = data;
      },
      error => {
        console.log(error);
      }
    );
}
}
