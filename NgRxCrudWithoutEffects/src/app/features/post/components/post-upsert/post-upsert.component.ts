import { Store } from '@ngrx/store';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppState } from 'src/app/store/app.reducer';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { postSelector } from '../../store/post.selector';
import { addPostAction, updatePostAction } from '../../store/post.actions';
import { first } from 'rxjs';
import { IPost } from 'src/app/core/interfaces/core.interface.ts';

interface IPostForm {
  postId: FormControl<string>;
  title: FormControl<string>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-post-upsert',
  templateUrl: './post-upsert.component.html',
  styleUrls: ['./post-upsert.component.css'],
})
export class PostUpsertComponent implements OnInit {
  postForm: FormGroup<IPostForm>;

  fb = inject(FormBuilder);
  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);
  store = inject(Store<IAppState>);

  isEditMode = false;

  constructor() {
    this.postForm = this.fb.group({
      postId: this.fb.nonNullable.control<string>('', [Validators.required]),
      title: this.fb.nonNullable.control<string>('', [Validators.required]),
      description: this.fb.nonNullable.control<string>('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.activatedRouter.queryParamMap.subscribe((params) => {
      console.log(params);
      const postId = params.get('postId');

      if (postId) {
        this.isEditMode = true;
        this.store
          .select(postSelector(postId))
          .pipe(first())
          .subscribe((post) => {
            if (post) {
              this.postForm.controls.postId.reset();
              this.postForm.patchValue(post);
            }
          });
      } else {
        this.isEditMode = false;
        this.postForm.reset();
        this.postForm.controls.postId.setValue('-1');
      }
    });
  }

  upsert() {
    console.log(this.postForm.getRawValue());

    if (this.isEditMode) {
      this.store.dispatch(
        updatePostAction({
          post: this.postForm.getRawValue(),
        })
      );
    } else {
      const post: IPost = this.postForm.getRawValue();
      delete post['postId'];

      this.store.dispatch(addPostAction({ post }));
    }
  }
}
