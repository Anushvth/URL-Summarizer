// import { Component, signal } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';
// import { UrlSummary } from './url-summary/url-summary';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [UrlSummary],
//   template: `<app-url-summary></app-url-summary>`, // ✅ Correct
//   styleUrls: './app.css'
// })
// export class App {
//   protected readonly title = signal('url-ui');
// }
import { Component, signal } from '@angular/core';
import { UrlSummaryComponent } from './url-summary/url-summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UrlSummaryComponent],
  template: `<app-url-summary></app-url-summary>`,
  styleUrls: ['./app.css'] // ✅ fixed: now an array
})
export class App {
  protected readonly title = signal('url-ui');
}
