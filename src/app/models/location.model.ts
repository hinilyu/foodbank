// models/location.model.ts
export class Location {
  title: string;
  openingHours: string;
  address: string;
  telephone: string;
  imagelink: string;
  lat: number;
  lng: number;


  constructor(title: string, openingHours: string, address: string, telephone: string, imagelink: string, lat: number, lng: number) {
    this.title = title;
    this.openingHours = openingHours;
    this.address = address;
    this.telephone = telephone;
    this.imagelink =imagelink;
    this.lat =lat;
    this.lng =lng;
  }
}
