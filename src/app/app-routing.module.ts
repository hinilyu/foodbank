import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StaffHomeComponent } from './features/staff/staff-home/staff-home.component';
import { NeedhelpHomeComponent } from './features/needhelp/needhelp-home/needhelp-home.component';
import { CanhelpHomeComponent } from './features/canhelp/canhelp-home/canhelp-home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BookingPageComponent } from './features/needhelp/booking-page/booking-page.component';
import { NeedhelpDetailComponent } from './features/needhelp/needhelp-detail/needhelp-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'portal', component: StaffHomeComponent },
  { path: 'needhelpdetail', component: NeedhelpDetailComponent },
  { path: 'needhelp', component: NeedhelpHomeComponent },
  { path: 'canhelp', component: CanhelpHomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'booking', component: BookingPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
