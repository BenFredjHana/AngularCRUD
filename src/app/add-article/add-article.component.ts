import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: any;
  providers: any;

  constructor(private service: ArticleService, private serviceProvider: ProviderService, private router: Router) { }

  ngOnInit(): void {
    this.serviceProvider.listProviders().subscribe(response => {
      console.log(this.article)
      this.providers = response;
    });
  }

  createArticle(myform: any) {
    this.service.createArticle(myform).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(['listArticle']);
      }
    );
  }

}
