import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { LocationComponent } from './pages/location/location.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Sobre nós', component: AboutUsComponent},
  {path: 'Receitas', component: RecipeComponent},
  {path: 'Feedbacks', component: FeedbacksComponent},
  {path: 'Localização', component: LocationComponent},
  {path: 'Eventos', component: EventsComponent},
  {path: 'Contatos', component: ContactComponent},
  {path: 'Métodos de pagamento', component: PaymentMethodsComponent},
  {path: 'Suporte', component: CustomerSupportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
