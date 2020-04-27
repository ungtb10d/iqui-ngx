// Modal component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { FunctionalModule, BasicsModule, CodeModule } from '../../../../../../../iqui-ngx/src';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ModalShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Modal context
  public context = {
    Visible:        [true, false],
    HeaderHtml:     'This is a modal',
    ContentHtml:    '... a real, real modal!',
    CloseOnOverlay: [true, false],
    CloseOnEscape:  [true, false],
  };

}