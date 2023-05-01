import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routedComponents } from './app-routing.module';

//Angular Material Module
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

// Angular Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavbarSearchBarComponent } from './nav-bar/navbar-search-bar/navbar-search-bar.component';
import { ProfileComponent } from './nav-bar/profile/profile.component';
import { CompanyIconComponent } from './nav-bar/company-icon/company-icon.component';
import { ListOfFiltersComponent } from './nav-bar/list-of-filters/list-of-filters.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './footer/contact/contact.component';
import { TermsComponent } from './footer/terms/terms.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NavbarSearchBarComponent,
    ProfileComponent,
    CompanyIconComponent,
    ListOfFiltersComponent,
    FooterComponent,
    ContactComponent,
    TermsComponent,
    PrivacyComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
