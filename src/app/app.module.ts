import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resume/resume.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'education',  component: EducationComponent },
  { path: 'resume',  component: ResumeComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'map',  component: MapComponent },
  { path: 'contact',  component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ResumeComponent,
    GalleryComponent,
    MapComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEC6B4J0GOt_tQxGTzD7_E-d4UoySarIc'//'AIzaSyAaIC5KxieUPKcu_o5ISS3Qe0pMxOzjAhQ'
    }),
    PdfViewerModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
