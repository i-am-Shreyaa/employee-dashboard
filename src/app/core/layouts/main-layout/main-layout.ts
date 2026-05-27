import { Component } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [ MatSidenavModule ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
