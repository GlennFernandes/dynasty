import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, RepositoryRoutingModule],
  declarations: [RepositoryComponent]
})
export class RepositoryModule {}
