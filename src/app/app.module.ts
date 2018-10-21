import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiReactModule } from '@ngui/react';
import { AppComponent } from './app.component';
// components
import { PhotoEditorSDKDesktopUIComponent } from './components/pesdk-desktopui.component';
import { PhotoEditorSDKReactUIComponent } from './components/pesdk-reactui.component';
import { ColorComponent } from './color/color.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { AboutComponent } from './about/about.component';
import {MatGridListModule} from '@angular/material';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DetailComponent,
    HomeComponent,
    ColorComponent,
    PhotoEditorSDKReactUIComponent, // Add PhotoEditorSDK React UI
    PhotoEditorSDKDesktopUIComponent, ColorComponent, HomeComponent, AboutComponent, ContentComponent, DetailComponent // Add PhotoEditorSDK Desktop UI
  ],
  imports: [
    BrowserModule,
    NguiReactModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)// required for the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
