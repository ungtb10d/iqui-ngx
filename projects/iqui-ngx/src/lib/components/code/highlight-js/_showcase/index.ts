// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { highlightJsRegisterLanguage } from '../';
import { Phrase } from '../../../../data';

// Import modules
import { CodeModule } from '../../';
import { BasicsModule } from '../../../basics';

// Register highlight.js languages
import { default as javascript } from 'highlight.js/lib/languages/javascript';
highlightJsRegisterLanguage('javascript', javascript);
import { default as typescript } from 'highlight.js/lib/languages/typescript';
highlightJsRegisterLanguage('typescript', typescript);
import { default as xml } from 'highlight.js/lib/languages/xml';
highlightJsRegisterLanguage('xml', xml);
import { default as css } from 'highlight.js/lib/languages/css';
highlightJsRegisterLanguage('css', css);
import { default as scss } from 'highlight.js/lib/languages/scss';
highlightJsRegisterLanguage('scss', scss);

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class HighlightJsShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [BasicsModule, CodeModule];

  // Playground context
  private contextBase = {
    Disabled: [false, true],
    Class: '',
    NgClass: {},
    Syntax: "<div> Hello world! </div>\n<div> How you doin'?!?! </div>",
    Language: ['xml', 'css', 'javascript', undefined],
    Wrap: [true, false],
    Trim: [true, false],
    Highlight: [true, false],
    LineNumbers: [true, false],
    lineNumberGaps: [true, false],
  };
  // Playground context
  public context = {
    ...this.contextBase,
    Filter: '',
  };
  // Playground context
  public contextWithPhrase = {
    ...this.contextBase,
    FilterPhrase: new Phrase(),
  };
}
