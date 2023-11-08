import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Announcement {
  topic: string;
  type: string;
  content: string;
}

@Component({
  selector: 'app-staff-announcement',
  templateUrl: './staff-announcement.component.html',
  styleUrls: ['./staff-announcement.component.css'],
})
export class StaffAnnouncementComponent {

  
  announcement:Announcement = {
    topic: '',
    type: '',  // Assuming 'internal' or 'public'
    content: ''
  };

    // Initialize the announcements array to hold the posted announcements
    announcements: any[] = [];

  constructor(private _snackBar: MatSnackBar){}

  postAnnouncement(announcementData:Announcement) {
    console.log('Posting announcement:', announcementData);

    // Simulate posting to a backend
    // Normally here you would call a service method that returns an Observable
    // You would subscribe to it and in the subscription callback, push the new announcement
    this.announcements.push(announcementData);
    console.log('Announcements after posting:', this.announcements);

    this.showNotification('Announcement Posted!');
    // Reset the form model
    this.announcement = { topic: '', type: '', content: '' };
  }
  // postAnnouncement(announcementData: { topic: string; type: string; content: string }) {
  //   // Here you would send the data to your backend, then:
  //   this.showNotification('Announcement Posted!');
  //   // Add logic to display the announcement on the page
  // }

  showNotification(message: string) {
     this._snackBar.open(message, 'Close', {
       duration: 2000,
     });
   }

   editAnnouncement(index: number) {
    // For simplicity, this will just load the selected announcement into the form for editing
    // In a real application, you might have a more complex editing interface
    this.announcement = { ...this.announcements[index] };
    // If you're using a form reset or setup, you might need to call a method here to do that
  }

  // Method to handle the delete action
  deleteAnnouncement(index: number) {
    // Confirm deletion with the user
    const confirmed = confirm('Are you sure you want to delete this announcement?');
    if (confirmed) {
      // Remove the announcement from the array
      this.announcements.splice(index, 1);
    }
  }

}
