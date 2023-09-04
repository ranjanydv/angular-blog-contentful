import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
  ) { }

  allPosts$: Observable<any> | undefined
  blogPost$: Observable<any> | undefined

  ngOnInit(): void {
    this.allPosts$ = this.contentfulService.getEntries()
    this.route.params.subscribe(
      params => {
        const id = params['id']
        this.blogPost$ = this.contentfulService.getEntryById(id)
      }
    )
  }
}
