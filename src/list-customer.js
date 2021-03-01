import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {getAllCustomers, deleteCustomer} from './http';

@inject(Router)
export class ListCustomer {
   
    constructor(router,dlg) {
      this.router = router;
      this.dlg=dlg;
      this.customers=[];
      getAllCustomers().then((response) => {
        this.customers = response.data;
      });
    }
    addCustomer(){
        this.router.navigateToRoute('newCustomer');
    }

    delete(customer) {
        console.log(customer.id);
        let result = confirm('Are you sure! delete the customer? '+customer.firstName+', '+customer.lastName);
        if(result)
        {
            deleteCustomer(customer.id).then(data => {
                getAllCustomers().then((response) => {
                    this.customers = response.data;
                  });
            });           
        }else{
        }
    }
  }
  

  