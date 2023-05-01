import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path: '', component: CompanyIconComponent },
  {path: 'nav-bar', component: NavBarComponent },
  {path: 'privacy', component: PrivacyComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'contact', component: ContactComponent },
  {path: '', component: FooterComponent },
  {path: 'terms', component: TermsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents =
  [HomePageComponent,
   NavBarComponent,
   NavbarSearchBarComponent,
   ProfileComponent,
   CompanyIconComponent,
   ListOfFiltersComponent,
   FooterComponent,
   ContactComponent,
   TermsComponent,
   PrivacyComponent
  ]
