import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyForunsComponent } from './my-foruns/my-foruns.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
  path: "",
  component: LoginComponent,
  children: [
  { path: "register", component: RegisterComponent }
  ]
  },
  { path: "foruns", component: MyForunsComponent },
  { path: "account", component: MyAccountComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
