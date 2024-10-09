import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CryptoService} from "../../services/crypto.service";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-crypto-list',
  standalone: true,
  imports: [CommonModule, MatTableModule,FormsModule,HttpClientModule, MatSlideToggleModule,],
  templateUrl: './crypto-list.component.html',
  styleUrl: './crypto-list.component.css',
  providers: [CryptoService]
})
export class CryptoListComponent  implements OnInit,OnChanges{

  cryptos: any[] = [];
  displayedColumns: string[] = ['name', 'priceUsd'];
  private cryptoId: any;
  @Output() cryptoSelected = new EventEmitter<any>(); // یا هر نوع داده‌ای که لازم دارید
  cryptoList: { id: number; name: string }[] = []; // فرض کنید این لیست از یک سرویس بارگذاری می‌شود

  selectCrypto(cryptoId:any) {
    this.cryptoId=cryptoId;
    this.cryptoSelected.emit(cryptoId); // وقتی که ارز دیجیتال انتخاب می‌شود، این رویداد ارسال می‌شود.


  }
  constructor(

    private cryptoService: CryptoService
  ) {
  }

  ngOnInit(): void {
    this.cryptoService.getCryptos().subscribe((data: any) => {
      this.cryptos = data.data;
    });
  }

  onRowClick(cryptoId: any) {
    this.cryptoId=cryptoId;
    this.cryptoSelected.emit(cryptoId);
    // انتقال ارز انتخاب‌شده به CryptoChartComponent
  }




  // متد بارگذاری داده‌ها
  selectedRowId: any;
  loadCryptos() {
    // بارگذاری داده‌ها
  }

  onCryptoSelected($event: any) {

  }

  ngOnChanges(changes: SimpleChanges): void {


   console.log(changes);
   console.log("changes");
  }
}
