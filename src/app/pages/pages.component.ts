import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { fadeIn } from '../route-animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [fadeIn]
})
export class PagesComponent implements OnInit {

  public sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
