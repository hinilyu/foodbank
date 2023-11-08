import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StaffHomeComponent } from './features/staff/staff-home/staff-home.component';
import { NeedhelpHomeComponent } from './features/needhelp/needhelp-home/needhelp-home.component';
import { CanhelpHomeComponent } from './features/canhelp/canhelp-home/canhelp-home.component';
import { StaffAnnouncementComponent } from './features/staff/staff-announcement/staff-announcement.component';
import { StaffScanComponent } from './features/staff/staff-scan/staff-scan.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BookingPageComponent } from './features/needhelp/booking-page/booking-page.component';
import { NeedhelpDetailComponent } from './features/needhelp/needhelp-detail/needhelp-detail.component';
import { NeedhelpMapComponent } from './features/needhelp/needhelp-map/needhelp-map.component';
import { BookingDetailComponent } from './pages/booking-detail/booking-detail.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'portal', component: StaffHomeComponent },
  { path: 'profile-page', component: ProfilePageComponent },

  { path: 'needhelp', component: NeedhelpHomeComponent },
  { path: 'location/:name', component: NeedhelpDetailComponent },
  { path: 'needhelp/booking', component: BookingPageComponent },
  { path: 'needhelp/map', component: NeedhelpMapComponent },

  { path: 'canhelp', component: CanhelpHomeComponent },
  { path: 'portal/announcement', component: StaffAnnouncementComponent },
  { path: 'portal/scan', component: StaffScanComponent },
  { path: 'faq', component: FaqComponent },

  { path: 'booking-detail', component: BookingDetailComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
