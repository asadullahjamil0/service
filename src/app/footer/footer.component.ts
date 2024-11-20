import { Component } from '@angular/core';
import { __importDefault } from 'tslib';
import { UserDataService } from '../service/user-data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  item: any;
  constructor(private userD: UserDataService) {
    console.log("userdata", userD.user());
    this.item = userD.user();
  }

}
