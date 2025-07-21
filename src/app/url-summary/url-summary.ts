import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url-summary',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './url-summary.html',
})
export class UrlSummaryComponent {
  summary = '';
  points: string[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  getSummary(url: string) {
    if (!url) {
      this.error = 'Please enter a URL';
      return;
    }

    this.loading = true;
    this.summary = '';
    this.points = [];
    this.error = '';

    this.http.post<any>('http://localhost:3000/api/summarize', { url }).subscribe({
      next: (data) => {
        this.summary = data.summary;
        this.points = data.points;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to summarize the URL.';
        this.loading = false;
      }
    });
  }
}
