// models/location.model.ts
export class Location {
  title: string;
  openingHours: string;
  address: string;
  telephone: string;
  imagelink: string;

  constructor(title: string, openingHours: string, address: string, telephone: string, imagelink: string) {
    this.title = title;
    this.openingHours = openingHours;
    this.address = address;
    this.telephone = telephone;
    this.imagelink =imagelink;
  }
}
