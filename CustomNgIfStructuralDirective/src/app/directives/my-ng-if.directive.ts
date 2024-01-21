import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myNgIf]',
  standalone: true,
})
export class MyNgIfDirective implements OnInit {
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  @Input() set myNgIf(value: boolean) {
    if (value) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }
  ngOnInit(): void {}
}
