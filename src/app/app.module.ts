import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponentClass } from './MyContainer/MyContainer.component';
import { MyContainer1Component } from './my-container1/my-container1.component';
import { TopnavComponent } from './MyContainer/topnav/topnav.component';
import { HeaderComponent } from './MyContainer/header/header.component';
import { TextSectionComponent } from './MyContainer/text-section/text-section.component';
import { TextSection1Component } from './MyContainer/text-section1/text-section1.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { ClassStyleComponent } from './data-bind/class-style/class-style.component';
import { EventbindComponent } from './data-bind/eventbind/eventbind.component';
import { TwoWayComponent } from './data-bind/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx bootstrap--
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { HomeComponent } from './routing-demo/home/home.component';
import { AboutComponent } from './routing-demo/about/about.component';
import { ContactComponent } from './routing-demo/contact/contact.component';
import { ProductComponent } from './routing-demo/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routing-demo/login/login.component';
import { PagenotfoundComponent } from './routing-demo/pagenotfound/pagenotfound.component';
import { LaptopComponent } from './routing-demo/product/laptop/laptop.component';
import { MobileComponent } from './routing-demo/product/mobile/mobile.component';
import { WMachineComponent } from './routing-demo/product/w-machine/w-machine.component';
import { DesktopComponent } from './routing-demo/product/desktop/desktop.component';
import { CardComponent } from './routing-demo/card/card.component';
import { ParentComponent } from './routing-demo/parent/parent.component';

// add routing..
const appRoutes :Routes =[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'parent',component:ParentComponent},
  {path:'product',component:ProductComponent,children:[
    // {path:'',component:ProductComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'wmachine',component:WMachineComponent},
    {path:'desktop',component:DesktopComponent},
  ]},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent
    ,MyContainerComponentClass, 
    MyContainer1Component, 
    TopnavComponent, HeaderComponent, TextSectionComponent, TextSection1Component, DataBindComponent, ClassStyleComponent, EventbindComponent, 
    TwoWayComponent, NgifelseComponent, NgswitchComponent, NgforComponent, RoutingDemoComponent, HomeComponent, AboutComponent, 
    ContactComponent, ProductComponent, LoginComponent, PagenotfoundComponent, CardComponent, ParentComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
