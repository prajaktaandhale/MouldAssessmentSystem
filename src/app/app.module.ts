import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { DashboardComponent } from './components/home-page/dashboard/dashboard.component';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { LeftPanelComponent } from "./components/left-panel/left-panel.component";
import { RecordComponent } from './components/home-page/record/record.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { ChartsModule } from 'ng2-charts';


import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
} from '@angular/material';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

const appRoutes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "firstPage", component: FirstPageComponent },
  { path: "homePage", component: HomePageComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'todayStatus', component: RecordComponent}
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
    DashboardComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    MenuModule,
    MenubarModule,
    CardModule,
    ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
