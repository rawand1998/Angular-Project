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
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { DropdawnComponent } from './components/dropdawn/dropdawn.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DetailComponentComponent,
    SearchComponent,
    DropdawnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routingTable),
    HttpClientModule,
    FormsModule
  ],
  providers: [CountryserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
