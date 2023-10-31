import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ButtonComponent } from './Components/Shared/button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { HomeComponent } from './Components/Homepage/home/home.component';
import { HomeOfferComponent } from './Components/Homepage/home-offer/home-offer.component';
import { OffersComponent } from './Components/Offerpage/offers/offers.component';
import { ContactComponent } from './Components/contact/contact.component';
import { OffersOfferComponent } from './Components/Offerpage/offers-offer/offers-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { GoUpButtonComponent } from './Components/Shared/go-up-button/go-up-button.component';
import { CgdvComponent } from './Components/cgdv/cgdv.component';
import { MentionLegaleComponent } from './Components/mention-legale/mention-legale.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ButtonComponent,
    HomeOfferComponent,
    OffersComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    OffersOfferComponent,
    GoUpButtonComponent,
    CgdvComponent,
    MentionLegaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
