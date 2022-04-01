import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  id: any;
  articleToUpdate: any;
  label: any;
  price: any;
  providerId: any;
  providers: any;


  constructor(private service: ArticleService, private serviceProvider: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.id = params.get('id');
      }
    );

    this.articleToUpdate = this.service.getArticle(this.id).subscribe(
      response => {
        console.log(response);
        this.label = response["label"];
        this.price = response["price"];
        this.providerId = response["provider"]["id"];
      }
    );

    this.serviceProvider.listProviders().subscribe(response => {
      this.providers = response;
    });
  }

  updateArticle() {
    this.articleToUpdate = {
      'label': this.label,
      'price': this.price,
      'id': this.id
    }

    this.service.updateArticle(this.articleToUpdate, this.providerId).subscribe(
      response => {
        console.log(response);
        //this.router.navigate(['listArticle']);
      }
    );
  }

}
