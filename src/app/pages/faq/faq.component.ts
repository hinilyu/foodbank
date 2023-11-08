import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  items = ['1. How do I qualify for assistance from Scarborough Food Network?', 
           '2. What types of food are available at the foodbank?',
           '3. When is the foodbank open?',
           '4. Can I choose the food I receive?',
           '5. What should I bring with me when I visit the foodbank?',
           '6. What items are most needed at the foodbank?',
           '7. How can I make a monetary donation?',
           '8 Are food donations tax-deductible?',
           '9. Can I volunteer at the foodbank?',
           '10 Do you accept perishable food donations?'
           ];

  answers = ['To qualify for assistance, please visit our center with a valid ID and proof of residence in Scarborough. Our team will guide you through a simple registration process.', 
           'We offer a variety of food items, including fresh produce, non-perishable goods, dairy products, and occasionally, meat and bakery items, subject to availability.',
           'Our foodbank operating hours are Monday to Friday from 9:00 AM to 4:00 PM. Special hours may be available during holidays and can be checked on our website.',
           'Yes, we operate on a client-choice basis, allowing you to select your food items based on your familys needs and preferences, as inventory allows.',
           'Please bring a bag or box to carry your food, your ID, proof of residence, and if applicable, any documentation of your current circumstances.',
           'We are always in need of canned proteins, whole grain cereals, baby formula, and healthy non-perishable items. A complete list is available on our website.',
           'Monetary donations can be made online through our secure website, by mail, or in person at our office. We appreciate every contribution, large or small.',
           'Yes, food donations are tax-deductible. Please request a receipt when you drop off your donation at our center.',
           'Absolutely! We are always looking for volunteers. Please visit our website to fill out a volunteer application form.',
           'We do accept perishable food donations, but please contact us in advance to ensure we have the capacity to store and distribute the food safely.'
           ];
  expandedIndex = 0;

  
}