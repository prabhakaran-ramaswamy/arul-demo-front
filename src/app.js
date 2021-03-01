import {PLATFORM} from 'aurelia-pal';
export class App {
  configureRouter(config, router){
    config.title = 'Customers';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '',  moduleId: PLATFORM.moduleName('list-customer') },
      { route: 'list',  moduleId: PLATFORM.moduleName('list-customer'), name:'listCustomer' },
      { route: 'edit',  moduleId: PLATFORM.moduleName('edit-customer'), name:'newCustomer' },
      { route: 'edit/:id',  moduleId: PLATFORM.moduleName('edit-customer'), name:'editCustomer' }
    ]);

    this.router = router;
  }
}