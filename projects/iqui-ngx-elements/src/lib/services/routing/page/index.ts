// Page definition
// ----------------------------------------------------------------------------

/**
 * Holds basic page information
 */
export class Page {

  /**
   * Composes routes from pages definitions
   * @param pages Pages definition
   * @param path Relative path of current pages
   * @param routes Array of composed routes
   * @returns Composed routes
   */
  // tslint:disable-next-line: no-shadowed-variable
  public static compileRoutes (pages, path = [], routes = []) {
    // Process pages
    for (const page of pages) {
      // If page has component, add to routes
      if (page.component) {
        routes.push({
          path:       [...path, page.name].join('/'),
          component:  page.component
        });
      }
      // If page has children, process children
      if (page.children.length) {
        Page.compileRoutes(page.children, [...path, page.name], routes);
      }
    }
    // Return composed routes
    return routes;
  }

  /**
   * Flattens aray of pages and their children into a flat array
   * @param pages Pages array to flatten
   * @returns Flat page array
   */
  public static toArray (pages: Page[]) {
    const arr = [];
    for (const page of pages) {
      arr.push(page, ...Page.toArray(page.children));
    }
    return arr;
  }

  /**
   * Checks if page has children
   * @param page Page to check
   * @returns If page has children
   */
  public static hasChildren (page: Page) {
    return page.children && page.children.length;
  }

  /**
   * Creates an instance of Page.
   * @param name Page unique name (used in URL)
   * @param title Page title (displayed in menu)
   * @param component Page component
   * @param children Child pages
   */
  constructor (name: string, title: string, component = null, children = [] as Page[]) {
    // Set page info
    this.name = name;
    this.title = title;
    this.component = component;
    this.children = children;
    // Update child paths
    this.refreshChildren();
  }

  /**
   * Page unique name (used in URL)
   */
  public name: string;
  /**
   * Page title (displayed in menu)
   */
  public title: string;
  /**
   * Page component
   */
  public component: any;
  /**
   * Child pages
   */
  public children: Page[];
  /**
   * Can hold various metadata about the page
   */
  public meta = {} as any;

  // Holds parent reference
  private _parent: Page;
  /**
   * Get parent reference
   */
  public get parent () {
    return this._parent;
  }

  // Holds parent path
  private _parentPath: string[] = [];
  /**
   * Composes path from parent set path and name
   */
  public get path () {
    return [...this._parentPath, this.name];
  }
  /**
   * Sets parent path
   * @param path Parent path
   */
  public setParentPath (path: string[]) {
    // Set parent path
    this._parentPath = path;
    // When path refreshed, propagate to children
    this.refreshChildren();
  }

  /**
   * Update child paths
   */
  private refreshChildren () {
    this.children.forEach(child => {
      child._parent = this;
      child.setParentPath(this.path);
    });
  }
}