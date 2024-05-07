import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HistoryComponent } from './history/history.component';
import { ProfilComponent } from './profil/profil.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

import { ContratCreateComponent } from './contrat/contrat-create/contrat-create.component';
import { ContratUpdateComponent } from './contrat/contrat-update/contrat-update.component';
import { ContratListComponent } from './contrat/contrat-list/contrat-list.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { DashbordVendeurComponent } from './dashbord-vendeur/dashbord-vendeur.component';
import { DashbordCommercialComponent } from './dashbord-commercial/dashbord-commercial.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    UserListComponent,
    HistoryComponent,
    ProfilComponent,
    CatalogListComponent,
    ContratListComponent,
    ContratCreateComponent,
    ContratUpdateComponent,
    ProfileUpdateComponent,
    LogoutComponent,
    ErrorDialogComponent,
    UserCreateComponent,
    DashbordVendeurComponent,
    DashbordCommercialComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
