import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css'],
})
export class CustomerCardComponent {
  @Input() customer?: Customer;
  @Output() delete = new EventEmitter<Customer>();

  constructor(private router: Router) {}

  onDelete() {
    console.log('hi');
    this.delete.emit(this.customer);
  }

  onEdit() {
    this.router.navigateByUrl('/edit', { state: this.customer });
  }
}
