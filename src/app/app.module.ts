import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponentClass } from './MyContainer/MyContainer.component';
import { MyContainer1Component } from './my-container1/my-container1.component';
import { TopnavComponent } from './MyContainer/topnav/topnav.component';
import { HeaderComponent } from './MyContainer/header/header.component';
import { TextSectionComponent } from './MyContainer/text-section/text-section.component';
import { TextSection1Component } from './MyContainer/text-section1/text-section1.component';

@NgModule({
  declarations: [
    AppComponent
    ,MyContainerComponentClass, MyContainer1Component, TopnavComponent, HeaderComponent, TextSectionComponent, TextSection1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
