import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NeedhelpHomeComponent } from './features/needhelp/needhelp-home/needhelp-home.component';
import { CanhelpHomeComponent } from './features/canhelp/canhelp-home/canhelp-home.component';
import { StaffHomeComponent } from './features/staff/staff-home/staff-home.component';
import { NeedhelpDetailComponent } from './features/needhelp/needhelp-detail/needhelp-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FaqComponent,
    NeedhelpHomeComponent,
    CanhelpHomeComponent,
    StaffHomeComponent,
    NeedhelpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
