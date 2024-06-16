import { HttpContextToken } from '@angular/common/http';

export const SkipLoadingHttpContextToken = new HttpContextToken<boolean>(() => false);
