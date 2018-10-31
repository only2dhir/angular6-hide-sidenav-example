import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    // delete data field because it is reduntant
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
      children: [
        {path: '', component: LoginComponent}
      ]
    },
    { path: 'main', component: HomeLayoutComponent,
      children: [
        { path: 'first', component: FirstComponent },
        { path: 'second', component: SecondComponent },
        // angular route should have a '**' route for 'page not found' -- found Angular.io tutorial
        { path: '**', component: PageNotFoundComponent}
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}