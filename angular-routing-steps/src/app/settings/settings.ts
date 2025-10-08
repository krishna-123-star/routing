import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../unsaved-changes-guard';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  standalone: true
})
export class Settings implements CanComponentDeactivate {
  settingName = '';
  saved = false;

  save() {
    this.saved = true;
    alert('Settings saved!');
  }

  canDeactivate(): boolean {
    if (!this.saved && this.settingName) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
