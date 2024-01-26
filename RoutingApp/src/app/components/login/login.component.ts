import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('username') usernameEl: ElementRef;
  @ViewChild('password') passwordE: ElementRef;
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);
  private _activeRouter: ActivatedRoute = inject(ActivatedRoute);
  private _queryParamsMapSubscription: Subscription;

  ngOnInit(): void {
    this._queryParamsMapSubscription =
      this._activeRouter.queryParamMap.subscribe((queryParamMap) => {
        const isLogout = queryParamMap.get('logout');
        if (isLogout) {
          this.logout();
        }
      });
  }
  ngOnDestroy(): void {
    this._queryParamsMapSubscription.unsubscribe();
  }

  login() {
    const user: User = this._authService.login(
      this.usernameEl.nativeElement.value,
      this.usernameEl.nativeElement.value
    );

    if (user) {
      this._router.navigate(['']);
      alert(`Welcome ${user.name}, you are successfully logged In!`);
    } else {
      alert('Invalid username/password');
    }
  }

  logout() {
    this._authService.logout();
    alert('you are successfully logout!');
  }
}
