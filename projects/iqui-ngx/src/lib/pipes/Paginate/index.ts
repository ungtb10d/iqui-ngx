// Paginate pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from '../../data';

/**
 * Paginates an array of records
 */
@Pipe({
  name: 'iquiPaginate',
})
export class PaginatePipe implements PipeTransform {
  public transform(items: any[], startIndex: number, pageLength: number): any[] {
    // Return current page range of items
    return (items || []).slice(startIndex, startIndex + pageLength);
  }
}
