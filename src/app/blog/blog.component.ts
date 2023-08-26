import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(
    private contentfulService: ContentfulService
  ) { }

  blogPosts$: Observable<any> | undefined

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getEntries()
  }

}
