import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


// const appRoutes: Routes = [
//   // delete data field because it is reduntant
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   {
//     path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
//     children: [
//       {path: '', component: LoginComponent}
//     ]
//   },
//   { path: 'main', component: HomeLayoutComponent,
//     children: [
//       { path: 'first', component: FirstComponent },
//       { path: 'second', component: SecondComponent },
//       // angular route should have a '**' route for 'page not found' -- found Angular.io tutorial
//       { path: '**', component: PageNotFoundComponent}
//     ]
//   }
// ];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    AppRoutingModule
  ],
  imports:[
 CommonModule,
NgtUniversalModule,

    BrowserModule,
    BrowserAnimationsModule,

    // RouterModule.forRoot(
    //   appRoutes,
    //   { useHash: false } // <-- debugging purposes only
    // ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
