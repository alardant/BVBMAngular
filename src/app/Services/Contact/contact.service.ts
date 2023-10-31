import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Contact } from '../../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   constructor(private http: HttpClient) { }

}
