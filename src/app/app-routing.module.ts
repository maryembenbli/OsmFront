import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { HistoryComponent } from './history/history.component';
import { ProfilComponent } from './profil/profil.component';

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
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfilComponent},
  
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
