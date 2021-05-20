import { BoolDefinitionRendererComponent } from "../../type-definition-renderers/bool-definition-renderer/bool-definition-renderer.component";
import { DateDefinitionRendererComponent } from "../../type-definition-renderers/date-definition-renderer/date-definition-renderer.component";
import { FloatDefinitionRendererComponent } from "../../type-definition-renderers/float-definition-renderer/float-definition-renderer.component";
import { IntDefinitionRendererComponent } from "../../type-definition-renderers/int-definition-renderer/int-definition-renderer.component";
import { MultiselectDefinitionRendererComponent } from "../../type-definition-renderers/multiselect-definition-renderer/multiselect-definition-renderer.component";
import { SingleselectDefinitionRendererComponent } from "../../type-definition-renderers/singleselect-definition-renderer/singleselect-definition-renderer.component";
import { StringDefinitionRendererComponent } from "../../type-definition-renderers/string-definition-renderer/string-definition-renderer.component";
import { BoolInputRendererComponent } from "../../type-input-renderers/bool-input-renderer/bool-input-renderer.component";
import { DateInputRendererComponent } from "../../type-input-renderers/date-input-renderer/date-input-renderer.component";
import { FloatInputRendererComponent } from "../../type-input-renderers/float-input-renderer/float-input-renderer.component";
import { IntInputRendererComponent } from "../../type-input-renderers/int-input-renderer/int-input-renderer.component";
import { MultiselectInputRendererComponent } from "../../type-input-renderers/multiselect-input-renderer/multiselect-input-renderer.component";
import { SingleselectInputRendererComponent } from "../../type-input-renderers/singleselect-input-renderer/singleselect-input-renderer.component";
import { StringInputRendererComponent } from "../../type-input-renderers/string-input-renderer/string-input-renderer.component";
import { BoolValueRendererComponent } from "../../type-value-renderers/bool-value-renderer/bool-value-renderer.component";
import { DateValueRendererComponent } from "../../type-value-renderers/date-value-renderer/date-value-renderer.component";
import { FloatValueRendererComponent } from "../../type-value-renderers/float-value-renderer/float-value-renderer.component";
import { IntValueRendererComponent } from "../../type-value-renderers/int-value-renderer/int-value-renderer.component";
import { MultiselectValueRendererComponent } from "../../type-value-renderers/multiselect-value-renderer/multiselect-value-renderer.component";
import { SingleselectValueRendererComponent } from "../../type-value-renderers/singleselect-value-renderer/singleselect-value-renderer.component";
import { StringValueRendererComponent } from "../../type-value-renderers/string-value-renderer/string-value-renderer.component";
import { FieldType, IFieldTypeMeta, UIControlEnum } from "../../types";

export const fieldTypeMetaDataMap = new Map<FieldType, IFieldTypeMeta>([
    ["float", {
        typeDisplayName: "Floating number",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: FloatInputRendererComponent }
        ],
        valueRenderers: [{ renderer: FloatValueRendererComponent }],
        definitionRenderer: FloatDefinitionRendererComponent
    }],
    ["int", {
        typeDisplayName: "Integer",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: IntInputRendererComponent }
        ],
        valueRenderers: [{ renderer: IntValueRendererComponent }],
        definitionRenderer: IntDefinitionRendererComponent
    }],
    ["string", {
        typeDisplayName: "Text",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: StringInputRendererComponent }
        ],
        valueRenderers: [{ renderer: StringValueRendererComponent }],
        definitionRenderer: StringDefinitionRendererComponent
    }],
    ["date", {
        typeDisplayName: "Date",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: DateInputRendererComponent },
            { UIControl: UIControlEnum.DATEPICKER, renderer: DateInputRendererComponent }
        ],
        valueRenderers: [{ renderer: DateValueRendererComponent }],
        definitionRenderer: DateDefinitionRendererComponent
    }],
    ["bool", {
        typeDisplayName: "Boolean",
        inputRenderers: [
            { UIControl: UIControlEnum.TOGGLE, renderer: BoolInputRendererComponent },
            { UIControl: UIControlEnum.RADIO, renderer: BoolInputRendererComponent },
            { UIControl: UIControlEnum.SELECT, renderer: BoolInputRendererComponent }
        ],
        valueRenderers: [{ renderer: BoolValueRendererComponent }],
        definitionRenderer: BoolDefinitionRendererComponent
    }],
    ["multiselect", {
        typeDisplayName: "Multi select",
        inputRenderers: [
            { UIControl: UIControlEnum.CHECKBOX, renderer: MultiselectInputRendererComponent },
            { UIControl: UIControlEnum.CHIPSINPUT, renderer: MultiselectInputRendererComponent }
        ],
        valueRenderers: [{ renderer: MultiselectValueRendererComponent }],
        definitionRenderer: MultiselectDefinitionRendererComponent
    }],
    ["singleselect", {
        typeDisplayName: "Single select",
        inputRenderers: [
            { UIControl: UIControlEnum.SELECT, renderer: SingleselectInputRendererComponent },
            { UIControl: UIControlEnum.RADIO, renderer: SingleselectInputRendererComponent }
        ],
        valueRenderers: [{ renderer: SingleselectValueRendererComponent }],
        definitionRenderer: SingleselectDefinitionRendererComponent
    }],
]);