import { Component } from '@angular/core';
// xplat
import { AppBaseComponent } from '@notadd/web';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
