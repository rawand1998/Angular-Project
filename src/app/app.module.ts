import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { DetailComponentComponent } from './components/detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
