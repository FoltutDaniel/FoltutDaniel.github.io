import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/pages/home/home.component';
import { GlobalNavComponent } from './content/components/global-nav/global-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
