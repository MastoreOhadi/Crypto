import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import {HighchartsChartModule} from "highcharts-angular";
import {CryptoService} from "../../services/crypto.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-crypto-chart',
  standalone: true,
  imports: [HighchartsChartModule, FormsModule,HttpClientModule],
  templateUrl: './crypto-chart.component.html',
  styleUrl: './crypto-chart.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] , // این قسمت برای استفاده از عناصر سفارشی
  providers: [CryptoService]
})
export class CryptoChartComponent implements OnChanges,OnInit {

  @Input() priceData: any[] = [];  // داده‌های ورودی


  // متد برای تبدیل داده‌ها به فرمت مناسب
  processChartData() {
    const prices = this.priceData.map(data => Number(data.priceUsd)); // استخراج قیمت‌ها
    const dates = this.priceData.map(data => new Date(data.date).toLocaleDateString()); // استخراج تاریخ‌ها

    return { prices, dates };
  }

  // @Input() priceData: any; // نوع داده‌ها را بر اساس نیاز خود تغییر دهید

  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   title: {text: 'Price History'},
  //   series: [{
  //     name: 'Price',
  //     type: 'line',
  //     data: this.priceData
  //   }]
  // };

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  // chartOptions: Highcharts.Options = {
  //   title: {
  //     text: 'Crypto Price Trend'
  //   },
  //   xAxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  //   },
  //   series: [
  //     {
  //       type: 'line',
  //       data: this.priceData,
  //       name: 'Price'
  //     }
  //   ]
  // };


  // ngOnChanges(): void {
  //
  //   this.updateChart();
  // }

  updateChart() {
    this.chartOptions = {
      ...this.chartOptions,
      series: [{
        name: 'Price',
        type: 'line',
        data: this.priceData
      }]
    };
  }

  ngOnInit() {
    // اطمینان از اینکه priceData مقداردهی شده است
    if (this.priceData && this.priceData.length > 0) {
      this.chartOptions = {
        series: [{
          data: this.priceData,
          type: 'line'
        }]
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
console.log(changes);

    if (this.priceData && this.priceData.length > 0) {
    const chartData = this.processChartData();

    // تنظیمات چارت
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Crypto Price Chart'
      },
      xAxis: {
        categories: chartData.dates,  // تاریخ‌ها به عنوان محور x
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'Price (USD)'
        }
      },
      series: [{
        name: 'Price',
        type: 'line',
        data: chartData.prices  // قیمت‌ها به عنوان داده‌های محور y
      }]
    };
  // debugger;
  //   if (this.priceData && this.priceData.length > 0) {
      // this.chartOptions = {
      //   series: [{
      //     data: this.priceData,
      //     type: 'line'
      //   }]
      // };
    }
  }


  // loadChart() {
  //   this.chartOptions = {
  //     chart: {
  //       type: 'line'
  //     },
  //     title: {
  //       text: 'Crypto Price Chart'
  //     },
  //     xAxis: {
  //       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']  // مقادیر محور x
  //     },
  //     yAxis: {
  //       title: {
  //         text: 'Price'
  //       }
  //     },
  //     series: [{
  //       name: 'Crypto Price',
  //       data: this.priceData  // داده‌های محور y از ورودی priceData
  //     }]
  //   };
  // }
}
