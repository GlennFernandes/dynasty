import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { GithubService } from './github.service';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService, untilDestroyed } from '@app/core';

const log = new Logger('Repository');

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit, OnDestroy {
  error: string | undefined;
  isLoading = false;
  username = '';
  repo = '';
  commits: any[];
  public isMenuCollapsed = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private GithubService: GithubService
  ) {
    this.route.params.subscribe(params => {
      this.username = params.username;
      this.repo = params.repo;
    });
  }

  ngOnInit() {
    this.GithubService.getGithubRepo({ username: this.username, repo: this.repo })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((commits: any) => {
        this.commits = commits;
      });
  }

  ngOnDestroy() {}
}
