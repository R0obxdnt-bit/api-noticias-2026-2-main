import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Article, NewsResponse} from '../domain/model/article';


const apiKey= environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class NewsService {


  constructor(private http: HttpClient) {
  }
 //P 1 rimera etapa valido la recuepración de datos en consola

  getTopHeadLines(): Observable<any>{
   return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a4e78d17afe438fa8d3b0c67c55f2d1`);
  }

  //2 Segunda etapa creo la varible de entonrno con la key la traigo
  getTopHeadLinesApiKey(): Observable<any>{
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);

  }
  //3  Tercera etapa creo la varible de entonrno con la key la traigo, configuro los dos apikey de los environmets
  getTopHeadLinesApiKeyParams(): Observable<any>{
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
      params: {
        apiKey: apiKey,
      }
    });

  }
  //4 Tipando el dato que va a responder
  getTopHeadLinesApiKeyParamsTipado(): Observable<any>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
      params: {
        apiKey: apiKey,
      }
    });

  }

  //5 Tipando el dato que va a responder
  getTopHeadLinesApiKeyParamsTipadoArticle(): Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
      params: {
        apiKey: apiKey,
      }
    }).pipe(
      map(resp => {
        console.log('Respuesta completa API:', resp);
        return resp.articles;
      })
    );
  }
}
