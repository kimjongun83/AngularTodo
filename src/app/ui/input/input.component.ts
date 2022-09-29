import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  inject,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() model!: string;
  cdr = inject(ChangeDetectorRef);
  @Output() onModelChange = new EventEmitter<string>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['model'].currentValue as string).includes('/01/2022')) {
      return;
    }
    this.onModelChange.emit(`${changes['model'].currentValue}/01/2022`);
    this.cdr.detectChanges();
  }

  ngOnInit(): void {}
}
