import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer= new Customer();

    ngOnInit(): void {
        /** form model isn't the data model.  */
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            emailAddress: new FormControl(),
            /** passing the default value of sendCatalog form control */
            sendCatalog: new FormControl(true)
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
