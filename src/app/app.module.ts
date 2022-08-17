import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, WrapperComponent, IntroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
