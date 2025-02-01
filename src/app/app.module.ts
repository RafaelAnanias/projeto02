import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FormsComponent } from './_components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { LocationComponent } from './pages/location/location.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FormsComponent,
    AboutUsComponent,
    RecipeComponent,
    FeedbacksComponent,
    LocationComponent,
    EventsComponent,
    ContactComponent,
    PaymentMethodsComponent,
    CustomerSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
