// Dropdown component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { DropdownRelativePositioning } from '../';

// Import modules
import { FunctionalModule } from '../../';
import { BasicsModule } from '../../../basics';
import { CodeModule } from '../../../code';

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class DropdownShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Playground context
  public context = {
    Position: Object.values(DropdownRelativePositioning),
    ShowOnFocus: [true, false],
    ShowOnHover: [false, true],
    StayInViewport: [false, true],
    CustomClass: 'custom-class',
    OnSelected: e => {
      console.log(e);
    },
  };
}
