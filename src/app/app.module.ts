import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { DetailComponentComponent } from './components/detail-component/detail-component.component';
import { routingTable } from './routes';
import { HttpClientModule } from '@angular/common/http';
import {CountryserviceService} from './services/countryservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routingTable),
    HttpClientModule
  ],
  providers: [CountryserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
