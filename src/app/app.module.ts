import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   {path: 'welcome', component: WelcomeComponent},
    //   {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    //   {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    // ]),
    // If we decide to make above routing as a different module we would place
    // AppRoutingModule beneath ProductModule. As AppRoutingModule would contain wild cards.
    ProductModule,
    AppRoutingModule,
    // AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
