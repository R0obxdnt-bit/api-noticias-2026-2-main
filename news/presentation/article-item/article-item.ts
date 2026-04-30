import {Component, input} from '@angular/core';
import {
  MatCard,
  MatCardActions, MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {Article} from '../../domain/model/article';

@Component({
  selector: 'app-article-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatCardContent,
    MatIcon
  ],
  templateUrl: './article-item.html',
  styleUrl: './article-item.css',
})
export class ArticleItem {
  article = input.required<Article>();
}
