import { Routes } from '@angular/router';

import {CryptoDashboardComponent} from "./components/crypto-dashboard/crypto-dashboard.component";
import {CryptoListComponent} from "./components/crypto-list/crypto-list.component";
import {CryptoChartComponent} from "./components/crypto-chart/crypto-chart.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // ریدایرکت به داشبورد
  { path: 'dashboard', component: CryptoDashboardComponent },
  // { path: '**', redirectTo: '/Dashboard' }, // برای هدایت مسیرهای اشتباه
  { path: 'list', component: CryptoListComponent },
  {path:'chart',component:CryptoChartComponent},
];
