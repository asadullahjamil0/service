import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  user() {
    return [
      { name: "AsadUllah", age: 24, email: "asad@test.com" },
      { name: "Sam", age: 26, email: "sam@test.com" },
      { name: "Peter", age: 24, email: "peter@test.com" },
      { name: "Bilal", age: 32, email: "bilal@test.com" }
    ]
  }
}
