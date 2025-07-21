import { Routes } from '@angular/router';
import { Index } from './index';
import { UrlSummaryComponent} from './url-summary/url-summary';

export const routes: Routes = [
    {path:'summary', component:UrlSummaryComponent},
    {path:'', component: Index}
];
