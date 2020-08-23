import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers  = [
    {
      name: "puja",
      country: "india",
      company: "accenture",
      representatives: "indian"
    },
    {
      name: "puja",
      country: "india",
      company: "accenture",
      representatives: "indian"
    },
    {
      name: "puja",
      country: "india",
      company: "accenture",
      representatives: "indian"
    },
  ];
  constructor() { }

  getCustomersLarge() {
    return this.customers;
  }
}
