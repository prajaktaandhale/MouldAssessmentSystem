import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { LeftPanelComponent } from "./components/left-panel/left-panel.component";
import { RecordComponent } from './components/home-page/record/record.component';

const appRoutes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "firstPage", component: FirstPageComponent },
  { path: "homePage", component: HomePageComponent, children: [
    {path: '', component: RecordComponent}
  ] },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FirstPageComponent,
    LeftPanelComponent,
    RecordComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
