import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Contact } from '../../Models/contact';
import emailjs from '@emailjs/browser';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
   constructor() { }

  async SendContactForm(contact: Contact) {
    emailjs.init('M3r7f19XoBLac6tvS');
    await emailjs.send("service_tp2id0f", "template_lpfnzqv", {
      name: contact.name.toString(),
      email: contact.email.toString(),
      phone: contact.phone.toString(),
      subject: contact.subject.toString(),
      message: contact.message.toString()
    });
  }
}
