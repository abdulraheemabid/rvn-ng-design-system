# rvn-forms
RvnForms, published under the name "@abdulraheemabid/rvn-pkg-ng-forms", is a part of Raven framework which contains all the core functionality, components & services to manage dynamic forms.

## Components
This artifact's core components are the form field `Type` renderers. Each field type such as boolean, text, multi-select etc have three type of renderes associated with it.

### 1. Definition Renderers
These renderes are used when we try to create/edit a field in any form's definition. e.g, if user wants to add a single-select field, they should also specify how to show that field on the UI (dropdown, radio etc) and what are the predefined set of values the user can choose from (option list in a dropdown). These kind of configuration is specific to each field `Type` so we have seperate definition renderers for each type. 

### 2. Input Renderers
This set of renderers are again specific for each field `Type`. These are UI components which the end user sees when filling in the form. Each value renderer are combined with different UI elements which they support. For example, field type of `boolean` can be displayed on a form as a radio button, toggle swtich or a dropdown. So each renderer is responsible for handling their own supported UI elements. And these configurations are all dynamic.

### 3. Value Renderes
Finally these renderes for specific `Type` are responsible to show the value associated with that field. Typically these are used in a table when user sees all the form records, so for each field in each record, a value renderer component will be displayed. e.g field type of `Date` should show a parsed human readable date on the screen rather than showing the raw timstamp value. This type of logic is handled in thes value renderers. 

### Type configuration
Now all these type of renderers are configured with a json style config. Which should be written following `IFieldTypeMetaConfig` interface. Default configuration is already defined in this module, but consumers of this service can override any particular type's config if they want while importing the forms-service module via `forRoot()` method.

Default configuration which is set.
```
{
    float: {
        typeDisplayName: "Floating number",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: FloatInputRendererComponent }
        ],
        valueRenderers: [{ renderer: FloatValueRendererComponent }],
        definitionRenderer: FloatDefinitionRendererComponent
    },
    int: {
        typeDisplayName: "Integer",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: IntInputRendererComponent }
        ],
        valueRenderers: [{ renderer: IntValueRendererComponent }],
        definitionRenderer: IntDefinitionRendererComponent
    },
    string: {
        typeDisplayName: "Text",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: StringInputRendererComponent }
        ],
        valueRenderers: [{ renderer: StringValueRendererComponent }],
        definitionRenderer: StringDefinitionRendererComponent
    },
    date: {
        typeDisplayName: "Date",
        inputRenderers: [
            { UIControl: UIControlEnum.INPUT, renderer: DateInputRendererComponent },
            { UIControl: UIControlEnum.DATEPICKER, renderer: DateInputRendererComponent }
        ],
        valueRenderers: [{ renderer: DateValueRendererComponent }],
        definitionRenderer: DateDefinitionRendererComponent
    },
    bool: {
        typeDisplayName: "Boolean",
        inputRenderers: [
            { UIControl: UIControlEnum.TOGGLE, renderer: BoolInputRendererComponent },
            { UIControl: UIControlEnum.RADIO, renderer: BoolInputRendererComponent },
            { UIControl: UIControlEnum.SELECT, renderer: BoolInputRendererComponent }
        ],
        valueRenderers: [{ renderer: BoolValueRendererComponent }],
        definitionRenderer: BoolDefinitionRendererComponent
    },
    multiselect: {
        typeDisplayName: "Multi select",
        inputRenderers: [
            { UIControl: UIControlEnum.CHECKBOX, renderer: MultiselectInputRendererComponent },
            { UIControl: UIControlEnum.CHIPSINPUT, renderer: MultiselectInputRendererComponent }
        ],
        valueRenderers: [{ renderer: MultiselectValueRendererComponent }],
        definitionRenderer: MultiselectDefinitionRendererComponent
    },
    singleselect: {
        typeDisplayName: "Single select",
        inputRenderers: [
            { UIControl: UIControlEnum.SELECT, renderer: SingleselectInputRendererComponent },
            { UIControl: UIControlEnum.RADIO, renderer: SingleselectInputRendererComponent }
        ],
        valueRenderers: [{ renderer: SingleselectValueRendererComponent }],
        definitionRenderer: SingleselectDefinitionRendererComponent
    }
```

### Other components
The core components needed for managing dynamic forms are also a part of this artifact. Such as `FormDefinitionComponent` which displays the UI for creating a form including form's attributes and individual fields. Also `FormRendererComponent`, which shows the UI of filling in the form. These components are all wrappers around the base renderers explained above and they ingect these renderers at run time based on the user selection or the definitions/records coming from API.

## Services
Few services are packaged in this artifact which are needed to manage dynamic forms, including a seperate API service and Forms Service which includes basic functionalites needed for form management. If for instance the consumer needs to create their own UI on top of forms, they can just leverage the service module from this artifact and build their UI on top of that. 

## Standards & Conventions
1. Whenever a new field type is added in the `Raven Framework`, its associated renderers should be created in this artifact.
2. No component in this artifact should use `FormAPIService` directly. All components should only work with `@Inputs` and `@Outputs`. It is up to the consumer of what filtered data they want to bring into these components.
3. All APIs calls should be added in `FormAPIService` service only and not in any other service. When this service gets bigger, we will break it out into its seperate module. This way we will have just one place to handle all API calls.
4. If component needs to use a different base component (e.g which is not in material design or primeng) they should not use it directly here. They should create on in `@abdulraheemabid/rvn-pkg-ng-core` and then use it here.

## Publishing
After changes has been made, just run `npm run publish-forms:patch` or minor/major from the design system to publish artifact to the repository.

## Docs
Compodoc has been used to generate documentation based on JSDoc commenting style guides. The inputs/outputs along with types would already be generated so theres no need to add those specifically in the comments. If there is any complex logic in any part of this artifact, just add that in a comment with JSDoc standard. 

Run `npm run docs-forms` to generate its documentation.


----------------

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Code scaffolding

Run `ng generate component component-name --project rvn-forms` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project rvn-forms`.
> Note: Don't forget to add `--project rvn-forms` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build rvn-forms` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build rvn-forms`, go to the dist folder `cd dist/rvn-forms` and run `npm publish`.

## Running unit tests

Run `ng test rvn-forms` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
