import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,

    private viewPortScroller: ViewportScroller,
    private titleService: Title,
    private meta: Meta) { }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }

  redirectToOffers() {
    this.router.navigate(['/offres-et-tarifs']);
  }

  createReview(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {
    this.titleService.setTitle('Bien Vivre Bien Manger | Accompagnement en alimentation végétale');
    this.meta.addTag({
      name: 'description', content: 'Avec Bien Vivre Bien Manger, recevez des conseils personnalisés pour un mode de vie sain et durable à travers alimentation végétale équilibrée.' });
  }

}
