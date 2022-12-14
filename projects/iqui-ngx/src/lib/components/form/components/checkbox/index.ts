// Checkbox component
// ----------------------------------------------------------------------------

// Import dependencies
import { HostBinding, Component, Input, Output, EventEmitter } from '@angular/core';
import { UsesFormElementDirectives } from '../../directives';

/**
 * Checkbox, renders a checkbox control
 *
 * Usage:
 *
 *  <iqui-checkbox\
 *    [(value)]   = "value"\
 *    [ disabled  = "true|false" ]\
 *    [ class     = "..." ]\
 *    [ ngClass   = "{...}" ]\
 *  >
 *    Label
 *  </iqui-checkbox>
 *
 */
@Component({
  selector: 'iqui-checkbox',
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class CheckboxComponent extends UsesFormElementDirectives {
  /**
   * [disabled] binding
   */
  @Input()
  public disabled = false;
  /**
   * [ngClass] binding
   */
  private _ngClass: string;
  @HostBinding('attr.ngClass')
  public _attrNgClass: any;
  @Input()
  public get ngClass() {
    return this._ngClass;
  }
  public set ngClass(value: string) {
    this._ngClass = value;
    this._attrNgClass = null;
  }
  /**
   * [class] binding
   */
  private _class: string;
  @HostBinding('attr.class')
  public _attrClass: any;
  @Input()
  public get class() {
    return this._class;
  }
  public set class(value: string) {
    this._class = value;
    this._attrClass = null;
  }

  /**
   * [(value)] two-way binding
   */
  @Input()
  public value = null;
  @Output()
  public valueChange = new EventEmitter();

  /**
   * Updates value when change detected
   * @param e Event descriptor
   */
  public _updateValue(e) {
    this.valueChange.emit((this.value = e.target.checked));
  }

  /**
   * Composes class value based on property values
   */
  public get _composedClassValue() {
    return [
      // Mark as checkbox container (.form-check)
      'form-group',
      'form-check',
      // Mark as disabled, if disabled (.disabled)
      this.disabled ? 'disabled' : null,
      // Pass-through host class
      this.class || null,
    ].join(' ');
  }
}
