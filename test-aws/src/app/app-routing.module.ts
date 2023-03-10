import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "love"
  },
  {
    path: "home",
    loadChildren: () => import('./../app/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "page1",
    loadChildren: () => import('./../app/components/page1/page1.module').then(m => m.Page1Module)
  },
  {
    path: "love",
    loadChildren: () => import('./../app/components/iloveyou/iloveyou.module').then(m => m.IloveyouModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
