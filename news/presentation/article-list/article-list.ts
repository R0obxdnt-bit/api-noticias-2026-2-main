import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NewsService } from '../../infraestructure/news';
import { Article } from '../../domain/model/article';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
  ],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList implements OnInit {
 loading: boolean = true;
  articles: Article[] = [];

  constructor(private newsService: NewsService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.newsService.getTopHeadLinesApiKeyParamsTipadoArticle().subscribe({
      next: articles => {
        this.articles = articles;
        this.loading = false;

        console.log('loading:', this.loading);
        console.log('artículos:', this.articles.length);

        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Error:', err);
        this.loading = false;

        this.cdr.detectChanges();
      }
      });
  }
}
