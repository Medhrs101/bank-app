import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { AppRoutingModule } from './app-routing.module';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { NavigationComponent } from './navigation/navigation.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditRouteComponent } from './edit-route/edit-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCardComponent,
    ListingRouteComponent,
    CreateRouteComponent,
    NavigationComponent,
    EditRouteComponent,
    DashboardRouteComponent,
    CustomerCardComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
