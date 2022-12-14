// Pagination class
// Used to paginate arrays of items
// ----------------------------------------------------------------------------

// Import dependencies
import { EventEmitter } from '@angular/core';

/**
 * Pagination class
 */
export class Pagination {
  /**
   * Changed event triggers when pagination has changed
   */
  public changed = new EventEmitter<void>();

  /**
   * Holds array of items to be paginated
   */
  private _items: any[];
  /**
   * Gets array of items to be paginated
   */
  public get items(): any[] {
    return this._items;
  }

  /**
   * Holds number of items displayed per page
   */
  private _pageLength: number;

  /**
   * Holds currently selected page
   */
  private _currentPage = 0;

  constructor({ items = [] as any[], pageLength = 10 } = {}) {
    // Set properties
    this._items = items;
    this._pageLength = pageLength;
  }

  public updateItems(items = [] as any[]) {
    // Update items
    this._items = items;
    // Trigger change event
    this.changed.emit();
  }

  /**
   * Returns array of items on the current page
   */
  public getCurrentPageRange() {
    return this._items.slice(this._currentPage * this._pageLength, (this._currentPage + 1) * this._pageLength);
  }

  /**
   * Gets current page's first item index
   */
  public getCurrentPageFirstIndex() {
    return this._currentPage * this._pageLength;
  }
  /**
   * Gets current page's last item index
   */
  public getCurrentPageLastIndex() {
    const lastIndex = (this._currentPage + 1) * this._pageLength - 1;
    return lastIndex <= this._items.length - 1 ? lastIndex : this._items.length - 1;
  }
  /**
   * Gets current page's length
   */
  public getCurrentPageLength() {
    return this._pageLength;
  }

  /**
   * Selects given page as the current page
   * @param page Page to set as current
   */
  public gotoPage(page: number) {
    // Set updated current page
    this._currentPage = page;
    // Trigger changed event
    this.changed.emit();
  }
  /**
   * Checks if previous page exists
   */
  public checkPreviousPage() {
    return this._currentPage > 0;
  }
  /**
   * Selects the next page as the current page
   */
  public gotoPreviousPage() {
    if (this.checkPreviousPage()) {
      this.gotoPage(this._currentPage - 1);
    }
  }
  /**
   * Checks if previous page exists
   */
  public checkNextPage() {
    return this._currentPage < Math.ceil(this._items.length / this._pageLength) - 1;
  }
  /**
   * Selects the next page as the current page
   */
  public gotoNextPage() {
    if (this.checkNextPage()) {
      this.gotoPage(this._currentPage + 1);
    }
  }

  /**
   * Composes info about current pagination state
   */
  public getInfo() {
    return {
      currentPage: this._currentPage,
      currentFirstIndex: this.getCurrentPageFirstIndex(),
      currentLastIndex: this.getCurrentPageLastIndex(),
      pageLength: this.getCurrentPageLength(),
      totalLength: this._items.length,
    };
  }
}
