import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(config: NgbNavConfig) {
    config.destroyOnHide = false;
    config.roles = false;
  }
  ngOnInit(): void {
  }
}
