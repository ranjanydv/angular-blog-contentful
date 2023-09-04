import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
