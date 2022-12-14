// Copy-2-clipboard directive showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import modules
import { FunctionalModule } from '../../';

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class Copy2ClipboardShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [FunctionalModule];

  // Playground context
  public context = {
    ContentText: 'Some content to copy',
    ExplicitText: 'Explicit content to copy',
    explicitTextFactory: () => 'Generated explicit content to copy',
    doSomething: () => {},
  };
}
