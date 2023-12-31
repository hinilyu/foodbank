import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NeedhelpHomeComponent } from './features/needhelp/needhelp-home/needhelp-home.component';
import { CanhelpHomeComponent } from './features/canhelp/canhelp-home/canhelp-home.component';
import { StaffHomeComponent } from './features/staff/staff-home/staff-home.component';

import { PostCardComponent } from './pages/post-card/post-card.component';
import { StaffAnnouncementComponent } from './features/staff/staff-announcement/staff-announcement.component';
import { StaffScanComponent } from './features/staff/staff-scan/staff-scan.component';

import { BookingDetailComponent } from './pages/booking-detail/booking-detail.component';
import { BookingPageComponent } from './features/needhelp/booking-page/booking-page.component';
import { NeedhelpDetailComponent } from './features/needhelp/needhelp-detail/needhelp-detail.component';
import { NeedhelpMapComponent } from './features/needhelp/needhelp-map/needhelp-map.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './service/chat.service';
import { NeedhelpListComponent } from './features/needhelp/needhelp-list/needhelp-list.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { CdkAccordionModule } from '@angular/cdk/accordion';

//Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

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
    PostCardComponent,
    StaffAnnouncementComponent,
    StaffScanComponent,
    BookingPageComponent,
    NeedhelpDetailComponent,
    NeedhelpMapComponent,
    NeedhelpListComponent,
    BookingDetailComponent,
    ChatComponent,
    ProfilePageComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    CdkAccordionModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
