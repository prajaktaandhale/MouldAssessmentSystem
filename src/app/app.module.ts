import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { LeftPanelComponent } from "./components/left-panel/left-panel.component";
import { RecordComponent } from './components/home/record/record.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import {MatSelectModule} from '@angular/material'

import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatNativeDateModule,
  MatMenuModule,
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TodayAssessmentTabelComponent } from './components/home/today-assessment-tabel/today-assessment-tabel.component';
import { HomeService } from './services/home.service';
import { imasReducer } from './store/imas.reducer';
import { CanvasHorizontalBarComponent } from './components/canvases/canvas-horizontal-bar/canvas-horizontal-bar.component';
import { CanvasLineChartComponent } from './components/canvases/canvas-line-chart/canvas-line-chart.component';
import { CanvasPieChartComponent } from './components/canvases/canvas-pie-chart/canvas-pie-chart.component';
import { CanvasInterpolationComponent } from './components/canvases/canvas-interpolation/canvas-interpolation.component';

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "home", component: HomeComponent, children: [
      { path: '', component: DashboardComponent, resolve: { data: HomeService } },
      { path: 'todayStatus', component: TodayAssessmentTabelComponent },
      { path: 'records', component: RecordComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LeftPanelComponent,
    RecordComponent,
    DashboardComponent,
    LoadingSpinnerComponent,
    TodayAssessmentTabelComponent,
    CanvasHorizontalBarComponent,
    CanvasLineChartComponent,
    CanvasPieChartComponent,
    CanvasInterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    StoreModule.forRoot({imas: imasReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
