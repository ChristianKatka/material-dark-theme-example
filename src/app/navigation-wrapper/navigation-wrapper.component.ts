import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-wrapper',
  templateUrl: 'navigation-wrapper.component.html',
  styleUrls: ['navigation-wrapper.component.scss'],
})
export class NavigationWrapperComponent implements OnInit {
  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  isDark = false;

  constructor(private overlay: OverlayContainer) {}

  ngOnInit(): void {
    this.overlay.getContainerElement().classList.add('light-theme');
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      this.overlay.getContainerElement().classList.remove('light-theme');
      this.overlay.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlay.getContainerElement().classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.add('light-theme');
    }
  }
}
