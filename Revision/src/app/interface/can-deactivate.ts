import { Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface IDeactivatedComponent {
    canExit(): boolean | Observable<boolean> | Promise<boolean>
}