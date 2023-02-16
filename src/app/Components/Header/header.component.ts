import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  opened = false;
  isMenuOpen = false

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen
  }
  constructor() {}

 

 

}
