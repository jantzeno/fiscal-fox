import { NavigationExtras, Params } from '@angular/router';

export interface NavigationGo {
  path: any[];
  query?: {};
  extras?: NavigationExtras;
}

export interface RouterStoreState {
  state: RouterStateUrl;
  navigationId: number;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
