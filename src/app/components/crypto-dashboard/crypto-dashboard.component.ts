import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CryptoListComponent} from "../crypto-list/crypto-list.component";
import {CryptoService} from "../../services/crypto.service";
import {HttpClientModule} from "@angular/common/http";
import {HighchartsChartModule} from "highcharts-angular";
import {CryptoChartComponent} from "../crypto-chart/crypto-chart.component";
import {TableComponent} from "../table/table.component";


@Component({
  selector: 'app-crypto-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, CryptoListComponent,HttpClientModule,HighchartsChartModule,CryptoChartComponent,TableComponent],
  providers: [CryptoService],
  templateUrl: './crypto-dashboard.component.html',
  styleUrl: './crypto-dashboard.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CryptoDashboardComponent implements OnInit{
  constructor(
    private cryptoService: CryptoService
  ) {
  }

 public selectedPriceData: any[] = [];
  public mylist :any[]=[];

  onCryptoSelected(cryptoId: any) {
    console.log('Selected crypto ID:', cryptoId);
    // پردازش مورد نیاز برای وقتی که ارز دیجیتال انتخاب می‌شود
    // فرض کنید که شما data مربوط به قیمت را بر اساس cryptoId بارگذاری می‌کنید
   this.getPriceDataByCryptoId(cryptoId);

  }



  getPriceDataByCryptoId(cryptoId: any): any {
    // این تابع باید داده‌های مربوط به قیمت را برگرداند
    this.cryptoService.getCryptoHistory(cryptoId).subscribe(
      (data) => {
        this.selectedPriceData = data.data;
        this.mylist=data.data;
        console.log('Price data:', this.selectedPriceData);
      },
      (error) => {
        console.error('Error fetching price data:', error);
      }
  );
  }

  ngOnInit(): void {
    this.selectedPriceData = [32000, 33000, 31000, 34000, 35000, 37000, 36000, 38000];
  }
}
