import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  show: boolean;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  clickScroll(nameOfId: string): void {
    this.viewportScroller.scrollToAnchor(nameOfId);
  }

  showMenu() {
    this.show = true;
  }

  closeMenu() {
    this.show = false;
  }

}
