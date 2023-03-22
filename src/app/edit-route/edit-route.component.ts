import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { CustomerFormData } from '../models/customer-form-data.model';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css'],
})
export class EditRouteComponent {
  customer: CustomerFormData | undefined;
  customerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
  ) {
    this.customer = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.customer);
    this.customerForm = this.formBuilder.group({
      firstName: [
        this.customer?.firstName,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      lastName: [
        this.customer?.lastName,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      accountNumber: [
        this.customer?.accountNumber,
        [
          Validators.required,
          Validators.minLength(18),
          Validators.minLength(18),
        ],
      ],
      phoneNumber: [
        this.customer?.phoneNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: [
        this.customer?.email,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      amountOfMoney: [this.customer?.amountOfMoney, [Validators.required]],
      accountType: [
        this.customer?.accountType === 'saving' ? 'saving' : 'checking',
        [Validators.required],
      ],
      gender: [
        this.customer?.gender === 'male' ? 'male' : 'female',
        [Validators.required],
      ],
    });
  }

  submit() {
    this.customerService
      .updateCustomer({ ...this.customerForm.value, id: this.customer?.id })
      .subscribe((customer: Customer) => {
        this.customerForm.reset();
        this.router.navigate(['/']);
      });
  }
}
