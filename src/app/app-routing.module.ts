import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Sobre nós', component: AboutUsComponent},
  {path: 'Receitas', component: RecipeComponent},
  {path: 'Feedbacks', component: FeedbacksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
