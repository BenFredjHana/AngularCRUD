import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  urlArticles = environment.urlArticle;
  article: any;

  constructor(private Http: HttpClient) { }

  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
  }

  getArticle(id: number) {
    return this.Http.get(this.urlArticles + '/get/' + id)
  }

  createArticle(myform: any) {
    console.log(myform.value);
    this.article = {
      'label': myform.value.articleLabel,
      'price': myform.value.articlePrice
    }
    return this.Http.post(this.urlArticles + '/add/'+myform.value.articleProvider, this.article);
  }

  updateArticle(myObj: any, providerId:any) {
    return this.Http.put(this.urlArticles + '/update/'+ providerId + '/' + myObj['id'], myObj);
  }

  deleteArticle(myObj: any) {
    return this.Http.delete(this.urlArticles + '/delete/' + myObj['id'], myObj)
  }
}
