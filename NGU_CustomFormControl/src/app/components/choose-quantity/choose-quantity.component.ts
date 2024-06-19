import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
  ],
})
export class ChooseQuantityComponent implements ControlValueAccessor {
  quantity: number = 0;
  isDisabled = false;
  isTouched = false;

  @Input({ required: true }) incrementBy: number = 0;

  onChange: Function = (quantity: number) => {};
  onTouched: Function = () => {};
  touched = false;

  onQuantityIncrease() {
    console.log('[Local Function of component] onQuantityIncrease() called');

    if (this.isDisabled) return;

    this.markAsTouched();

    this.quantity += this.incrementBy;
    this.onChange(this.quantity);
  }

  onQuantityDecrease() {
    console.log('[Local Function of component] onQuantityDecrease() called');

    if (this.isDisabled) return;

    this.markAsTouched();
    this.quantity -= this.incrementBy;
    this.onChange(this.quantity);
  }

  markAsTouched() {
    console.log('[Local Function of component] markAsTouched() called');

    // we have control and notify angular back then the custom form control is touched, when we touch on it
    if (this.isTouched) return;

    this.onTouched();
    this.isTouched = true;
  }

  // ControlValueAccessor methods below
  writeValue(quantity: number): void {
    console.log(
      'writeValue => ControlValueAccessor::ChooseQuantityComponent called'
    );
    // we have to write value on our own
    this.quantity = quantity;
  }

  registerOnChange(fn: any): void {
    console.log(
      'registerOnChange => ControlValueAccessor::ChooseQuantityComponent called'
    );

    // we have to decide when the component changes,
    // on that time we have call above fn parameter function with a value
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log(
      'registerOnTouched => ControlValueAccessor::ChooseQuantityComponent called'
    );

    // we have to decide when the component gets touched,
    // on that time we have call above fn parameter function

    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log(
      'setDisabledState => ControlValueAccessor::ChooseQuantityComponent called'
    );

    // angular will tell us whether the control is enabled or disabled,
    // it is on us what functionalities we have restrict

    this.isDisabled = isDisabled;
  }
}
