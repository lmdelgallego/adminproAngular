import { Component, OnInit } from '@angular/core';
import {SettingsService} from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.settingService.links = document.querySelectorAll('#themecolors .selector');
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme: string): void {
    this.settingService.changeTheme(theme);
  }
}
