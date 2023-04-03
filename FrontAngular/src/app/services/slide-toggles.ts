import { Component, HostListener } from '@angular/core';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
  styleUrls: ['slide-toggle-overview-example.css'],
})
export class SlideToggleOverview {

  checked: boolean = false;

  change(e: any) {
    debugger;
    if (this.checked) {
      if (confirm("Are you sure")) {
        this.checked = !this.checked;
        console.log("toggle")
      }
      else {
        e.source.checked = true;
        console.log("toggle should not change if I click the cancel button")
      }
    } else {
      this.checked = !this.checked;
    }
  }
}
