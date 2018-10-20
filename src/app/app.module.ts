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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorComponent,
    PhotoEditorSDKReactUIComponent, // Add PhotoEditorSDK React UI
    PhotoEditorSDKDesktopUIComponent, ColorComponent, HomeComponent // Add PhotoEditorSDK Desktop UI
  ],
  imports: [
    BrowserModule,
    NguiReactModule,
    RouterModule.forRoot(appRoutes)// required for the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
