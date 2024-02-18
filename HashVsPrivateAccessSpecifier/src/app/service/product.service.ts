import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  host: string = 'host';

  // private keyword is part of TypeScript, not JavaScript. That means that the private accessibility is only enforced during development,
  // as part of type checking, and during compilation.
  // We get notifications during development and compilation(Not at runtime) that we can't access the private property from outside its class.
  private productUrl1: string = 'api/product';

  // # is part of JavaScript, it denotes our properties and methods as private during development, compilation, and at runtime.
  #productUrl2: string = 'api/product';

  logUrl1() {
    console.log(this.productUrl1);
  }
  logUrl2() {
    console.log(this.#productUrl2);
  }
}
