import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { EditRouteComponent } from './edit-route/edit-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';

// import { AboutRouteComponent } from './about-route/about-route.component';
// import { CreateRouteComponent } from './create-route/create-route.component';
// import { ListingRouteComponent } from './listing-route/listing-route.component';
// import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';

const routes: Route[] = [
  {
    path: '',
    component: ListingRouteComponent,
  },
  {
    path: 'dashboard',
    component: DashboardRouteComponent,
  },
  {
    path: 'create',
    component: CreateRouteComponent,
  },
  {
    path: 'edit',
    component: EditRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
