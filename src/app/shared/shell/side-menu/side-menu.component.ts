import { Component, OnInit } from '@angular/core';
import { Menulink } from './menulink';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menulinks: Menulink[] = []

  constructor() { }

  ngOnInit(): void {
    this.menulinks = [
      new Menulink(1, "menu item 1", "/"),
      new Menulink(2, "menu item 2", "/main/todo"),
      new Menulink(3, "menu item 3", "/")
    ];


  }

}
