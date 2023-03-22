import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styleUrls: ['./dashboard-route.component.css'],
})
export class DashboardRouteComponent implements OnInit {
  customers: Customer[] = [];
  totalMoney?: number;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.totalMoney = this.customers.reduce(
        (sum, item) => sum + +item.amountOfMoney,
        0,
      );
    });
  }
}
