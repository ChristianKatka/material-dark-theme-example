import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() toggleDarkMode = new EventEmitter<void>();

  constructor() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}
