import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { HeroListFilter } from 'src/app/shares/stores/state';

@Component({
  selector: 'app-hero-name-filter',
  templateUrl: './hero-name-filter.component.html',
  styleUrls: ['./hero-name-filter.component.css'],
})
export class HeroNameFilterComponent implements OnDestroy, OnInit {
  public form: FormGroup;
  private onDestory = new EventEmitter();
  @Input() set value(value: HeroListFilter) {
    this.setFormValue(value);
  }
  @Output() valueChange = new EventEmitter<HeroListFilter>();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nameFilter: [''],
    });
  }

  ngOnDestroy(): void {
    this.onDestory.next(null);
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.onDestory))
      .subscribe((value) => {
        this.valueChange.emit(value);
      });
  }
  public setFormValue(value: HeroListFilter) {
    this.form.setValue(value, {
      emitEvent: false,
    });
  }
}
