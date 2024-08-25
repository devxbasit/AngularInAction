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

interface IPostForm {
  postId: FormControl<number>;
  title: FormControl<string>;
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
      postId: this.fb.nonNullable.control<number>(0, [Validators.required]),
      title: this.fb.nonNullable.control<string>('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.activatedRouter.queryParamMap.subscribe((params) => {
      console.log(params);
      const postId = params.get('postId');

      if (postId) {
        this.isEditMode = true;
        this.store.select(postSelector(Number(postId))).subscribe((post) => {
          if (post) {
            this.postForm.patchValue({
              postId: post.postId,
              title: post.title,
            });
          }
        });
      } else {
        this.isEditMode = false;
        this.postForm.reset();
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
      this.store.dispatch(addPostAction({ post: this.postForm.getRawValue() }));
    }
  }
}
