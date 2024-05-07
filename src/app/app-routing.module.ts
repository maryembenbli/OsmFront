import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HistoryComponent } from './history/history.component';
import { ProfilComponent } from './profil/profil.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

import { ContratCreateComponent } from './contrat/contrat-create/contrat-create.component';
import { ContratListComponent } from './contrat/contrat-list/contrat-list.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ContratUpdateComponent } from './contrat/contrat-update/contrat-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
 
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
  
  { path: 'products', component: ProductListComponent },
  { path: 'users', component: UserListComponent },
  {path:'adduser',component:UserCreateComponent},
  {path:'updateuser/:id',component:UserUpdateComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfilComponent},
  {path:'catalog',component:CatalogListComponent},
  {path:'contrats',component:ContratListComponent},
  {path:'addcontrat',component:ContratCreateComponent},
  {path:'updatecontrat/:id',component:ContratUpdateComponent},
  {path:'account',component:ProfileUpdateComponent},


  
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
