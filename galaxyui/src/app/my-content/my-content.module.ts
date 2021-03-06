import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyContentRoutingModule } from './my-content.routing.module';

import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ActionModule } from 'patternfly-ng/action/action.module';
import { EmptyStateModule } from 'patternfly-ng/empty-state/empty-state.module';
import { FilterModule } from 'patternfly-ng/filter/filter.module';
import { ListModule } from 'patternfly-ng/list/basic-list/list.module';
import { PaginationModule } from 'patternfly-ng/pagination/pagination.module';
import { ToolbarModule } from 'patternfly-ng/toolbar/toolbar.module';

import { NamespaceDetailComponent } from './namespace-detail/namespace-detail.component';
import { OwnersContentComponent } from './namespace-list/content/owners-content/owners-content.component';
import { RepositoriesContentComponent } from './namespace-list/content/repositories-content/repositories-content.component';
import { NamespaceListComponent } from './namespace-list/namespace-list.component';

// prettier-ignore
import {
    ProviderNamespacesContentComponent
} from './namespace-list/content/provider-namespaces-content/provider-namespaces-content.component';

import { AddRepositoryModalComponent } from './add-repository-modal/add-repository-modal.component';

// prettier-ignore
import {
    AlternateNameModalComponent
} from './namespace-list/content/repositories-content/alternate-name-modal/alternate-name-modal.component';

import { SharedModule } from '../shared/shared.module';
import { NamespaceActionComponent } from './namespace-list/action/action.component';

import { NamespaceRepositoryActionComponent } from './namespace-list/content/repositories-content/action/action.component';

@NgModule({
    entryComponents: [AddRepositoryModalComponent, AlternateNameModalComponent],
    declarations: [
        NamespaceListComponent,
        NamespaceDetailComponent,
        RepositoriesContentComponent,
        OwnersContentComponent,
        ProviderNamespacesContentComponent,
        AddRepositoryModalComponent,
        AlternateNameModalComponent,
        NamespaceActionComponent,
        NamespaceRepositoryActionComponent,
    ],
    imports: [
        ActionModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        CommonModule,
        EmptyStateModule,
        FilterModule,
        FormsModule,
        ReactiveFormsModule,
        ToolbarModule,
        TooltipModule,
        ListModule,
        PaginationModule,
        SharedModule,

        MyContentRoutingModule,
    ],
    providers: [BsDropdownConfig],
})
export class MyContentModule {}
