import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer= new Customer();
    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        /** form model isn't the data model.  
         * you can also pass value array to each formControlElement
        */
        this.customerForm = this.formBuilder.group({
            firstName: '',
            lastName: [{value: 'n/a', disabled: 'true'}],
            emailAddress: '',
            /** passing the default value of sendCatalog form control */
            sendCatalog: true
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
