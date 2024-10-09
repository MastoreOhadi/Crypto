import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements  OnInit,OnChanges{
  @Output()  addUserClicked=new EventEmitter<any>();
 @Input() pri :any ={};

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.pri);
  }

  ngOnInit(): void {
  }
}
