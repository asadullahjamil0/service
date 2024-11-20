import { Component, importProvidersFrom } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Service in Angular';
  item: any;
  constructor(private userD: UserDataService) {
    console.log("userdata", userD.user());
    this.item = userD.user();
  }
}
