import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../customer.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-listing-route',
  templateUrl: './listing-route.component.html',
  styleUrls: ['./listing-route.component.css'],
})
export class ListingRouteComponent implements OnInit {
  customers: Customer[] = [];
  isDeleteLoading: any[] = [];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();

  constructor(private customerService: CustomerService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  search(query: string) {
    this.customerService.search(query).subscribe(customers => {
      this.customers = customers;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  delete(customer: Customer) {
    console.log('hi1');
    this.customerService.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers.filter(p => p.id !== customer.id);
    });
  }
}
