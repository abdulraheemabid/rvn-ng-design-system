import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayValuesComponent } from './components/array-values/array-values.component';
import { ChooseUiControlComponent } from './components/choose-ui-control/choose-ui-control.component';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { RecordCellViewComponent } from './components/record-cell-view/record-cell-view.component';
import { RecordTableComponent } from './components/record-table/record-table.component';
import { RecordViewComponent } from './components/record-view/record-view.component';
import { BaseDefinitionRendererComponent } from './type-definition-renderers/base-definition-renderer/base-definition-renderer.component';
import { BoolDefinitionRendererComponent } from './type-definition-renderers/bool-definition-renderer/bool-definition-renderer.component';
import { DateDefinitionRendererComponent } from './type-definition-renderers/date-definition-renderer/date-definition-renderer.component';
import { FloatDefinitionRendererComponent } from './type-definition-renderers/float-definition-renderer/float-definition-renderer.component';
import { IntDefinitionRendererComponent } from './type-definition-renderers/int-definition-renderer/int-definition-renderer.component';
import { MultiselectDefinitionRendererComponent } from './type-definition-renderers/multiselect-definition-renderer/multiselect-definition-renderer.component';
import { SingleselectDefinitionRendererComponent } from './type-definition-renderers/singleselect-definition-renderer/singleselect-definition-renderer.component';
import { StringDefinitionRendererComponent } from './type-definition-renderers/string-definition-renderer/string-definition-renderer.component';
import { BaseInputRendererComponent } from './type-input-renderers/base-input-renderer/base-input-renderer.component';
import { BoolInputRendererComponent } from './type-input-renderers/bool-input-renderer/bool-input-renderer.component';
import { DateInputRendererComponent } from './type-input-renderers/date-input-renderer/date-input-renderer.component';
import { FloatInputRendererComponent } from './type-input-renderers/float-input-renderer/float-input-renderer.component';
import { IntInputRendererComponent } from './type-input-renderers/int-input-renderer/int-input-renderer.component';
import { MultiselectInputRendererComponent } from './type-input-renderers/multiselect-input-renderer/multiselect-input-renderer.component';
import { RecordParentInputRendererComponent } from './type-input-renderers/record-parent-input-renderer/record-parent-input-renderer.component';
import { SingleselectInputRendererComponent } from './type-input-renderers/singleselect-input-renderer/singleselect-input-renderer.component';
import { StringInputRendererComponent } from './type-input-renderers/string-input-renderer/string-input-renderer.component';
import { BaseValueRendererComponent } from './type-value-renderers/base-value-renderer/base-value-renderer.component';
import { BoolValueRendererComponent } from './type-value-renderers/bool-value-renderer/bool-value-renderer.component';
import { DateValueRendererComponent } from './type-value-renderers/date-value-renderer/date-value-renderer.component';
import { FloatValueRendererComponent } from './type-value-renderers/float-value-renderer/float-value-renderer.component';
import { IntValueRendererComponent } from './type-value-renderers/int-value-renderer/int-value-renderer.component';
import { MultiselectValueRendererComponent } from './type-value-renderers/multiselect-value-renderer/multiselect-value-renderer.component';
import { RecordParentValueRendererComponent } from './type-value-renderers/record-parent-value-renderer/record-parent-value-renderer.component';
import { SingleselectValueRendererComponent } from './type-value-renderers/singleselect-value-renderer/singleselect-value-renderer.component';
import { StringValueRendererComponent } from './type-value-renderers/string-value-renderer/string-value-renderer.component';
import { FieldDefinitionComponent } from './components/field-definition/field-definition.component';
import { FormDefinitionComponent } from './components/form-definition/form-definition.component';
import { RecordDeleteConfirmComponent } from './components/record-delete-confirm/record-delete-confirm.component';
import { RvnComponentsModule } from '@abdulraheemabid/rvn-pkg-ng-core';



@NgModule({
  declarations: [
    ChooseUiControlComponent,
    ArrayValuesComponent,
    RecordViewComponent,
    RecordCellViewComponent,
    RecordTableComponent,
    FormRendererComponent,
    FormDefinitionComponent,
    FieldDefinitionComponent,
    RecordDeleteConfirmComponent,

    FloatDefinitionRendererComponent,
    IntDefinitionRendererComponent,
    StringDefinitionRendererComponent,
    DateDefinitionRendererComponent,
    BoolDefinitionRendererComponent,
    MultiselectDefinitionRendererComponent,
    SingleselectDefinitionRendererComponent,
    BaseDefinitionRendererComponent,

    FloatInputRendererComponent,
    IntInputRendererComponent,
    StringInputRendererComponent,
    DateInputRendererComponent,
    BoolInputRendererComponent,
    MultiselectInputRendererComponent,
    SingleselectInputRendererComponent,
    BaseInputRendererComponent,
    RecordParentInputRendererComponent,

    FloatValueRendererComponent,
    IntValueRendererComponent,
    StringValueRendererComponent,
    DateValueRendererComponent,
    BoolValueRendererComponent,
    MultiselectValueRendererComponent,
    SingleselectValueRendererComponent,
    BaseValueRendererComponent,
    RecordParentValueRendererComponent,
  ],
  imports: [
    CommonModule,
    RvnComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ChooseUiControlComponent,
    ArrayValuesComponent,
    RecordViewComponent,
    RecordCellViewComponent,
    RecordTableComponent,
    FormRendererComponent,
    FormDefinitionComponent,
    FieldDefinitionComponent,
    RecordDeleteConfirmComponent,

    FloatDefinitionRendererComponent,
    IntDefinitionRendererComponent,
    StringDefinitionRendererComponent,
    DateDefinitionRendererComponent,
    BoolDefinitionRendererComponent,
    MultiselectDefinitionRendererComponent,
    SingleselectDefinitionRendererComponent,
    BaseDefinitionRendererComponent,

    FloatInputRendererComponent,
    IntInputRendererComponent,
    StringInputRendererComponent,
    DateInputRendererComponent,
    BoolInputRendererComponent,
    MultiselectInputRendererComponent,
    SingleselectInputRendererComponent,
    BaseInputRendererComponent,
    RecordParentInputRendererComponent,

    FloatValueRendererComponent,
    IntValueRendererComponent,
    StringValueRendererComponent,
    DateValueRendererComponent,
    BoolValueRendererComponent,
    MultiselectValueRendererComponent,
    SingleselectValueRendererComponent,
    BaseValueRendererComponent,
    RecordParentValueRendererComponent
  ],
  providers: [

  ]
})
export class RvnFormsModule { }
