import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { FooterComponent } from './nav/footer/footer.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
	{ path: '', redirectTo: "blogs", pathMatch: 'full' },
	{ path: 'blogs', component: BlogComponent },
	{ path: 'blogs/:id', component: BlogDetailComponent },
	{ path: 'contact', component: FooterComponent },
	{ path: 'admin', component: AdminComponent },
];
