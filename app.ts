import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleList} from './news/presentation/article-list/article-list';
import {MainLayout} from './layout/presentation/comoponent/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout, ArticleList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
