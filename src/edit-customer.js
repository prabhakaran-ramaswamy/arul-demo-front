import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {getOneCustomer, saveCustomer, updateCustomer} from './http';


@inject(Router)
export class EditCustomer {
    constructor(router) {
      this.router = router;
      this.message = "";
      this.customer={};
    }

    activate(params, routeConfig) {
        if(params.id){
            getOneCustomer(params.id).then((response) => {
                this.customer = response.data;
            });
        }
    }

    save() {
        if(this.customer.id){
            updateCustomer(this.customer,this.customer.id).then(data => {
                console.log(data)
                this.router.navigateToRoute('listCustomer');
            });
        }else{
            saveCustomer(this.customer).then(res => {
                console.log(res)
                this.customer = res.data;
                this.router.navigateToRoute('listCustomer');
            });
        }
    }

    cancel() {
        this.router.navigateToRoute('listCustomer');
    }
 }
  