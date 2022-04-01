import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: any;

  constructor(private service: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.service.listArticles().subscribe(response => { 
      console.log(response)
      this.articles = response;
    });
  }

  refreshListArticles() {
    this.service.listArticles().subscribe( response => {
      console.log(response)
      this.articles = response;
    }
    );
  }

  deleteArticle(myObj: any) {
    //console.log(this.article);
    this.service.deleteArticle(myObj).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }

  updateArticle(myObj: any) {
    this.router.navigate(['updateArticle' + '/' + myObj['id']]);
  }

}
