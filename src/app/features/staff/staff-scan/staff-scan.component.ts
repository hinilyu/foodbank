import { Component } from '@angular/core';
import { Html5QrcodeScanner } from "html5-qrcode";
import { MatSnackBar } from '@angular/material/snack-bar';

interface Announcement {
  topic: string;
  type: string;
  content: string;
}

@Component({
  selector: 'app-staff-scan',
  templateUrl: './staff-scan.component.html',
  styleUrls: ['./staff-scan.component.css']
})
export class StaffScanComponent {

  constructor(private _snackBar: MatSnackBar){}

  announcement:Announcement = {
    topic: '',
    type: '',  // Assuming 'internal' or 'public'
    content: ''
  };
 
  postAnnouncement() {
    this.showNotification('User checked-in');
  }

  showNotification(message: string) {
     this._snackBar.open(message, 'Close', {
       duration: 2000,
     });
   }

}
let html5QrcodeScanner: Html5QrcodeScanner;

function onScanSuccess(decodedText: any, decodedResult: any) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
  //divDisplay;
  var x = document.getElementById("booking-detail");
  if (x) {
    x.style.display = "block";
  }
  html5QrcodeScanner.pause(true);
  html5QrcodeScanner.clear();
}

function onScanFailure(error: any) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

window.onload = function () {
  var x = document.getElementById("booking-detail");
  if (x) {
    x.style.display = "none";
  }
  html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
};


