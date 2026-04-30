import { Component } from '@angular/core';
import {Header} from '../header/header';
import {ArticleList} from '../../../../news/presentation/article-list/article-list';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    ArticleList,
    Footer
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
