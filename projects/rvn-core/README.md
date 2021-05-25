# rvn-core
RvnCore, published under the name "@abdulraheemabid/rvn-pkg-ng-core", contains all the fundamental UI components features and styles.


## External UI Components Library
1. RvnCore uses MaterialModule for all of its base components like the form fields, cards, accordions etc.
2. RvnCore is also using organization-chart from PrimeNG and because of that the apps will be dependant on both Material & PrimeNG. *NOTE: Find any lighweight alternative for org-chart*
3. Apps should never import material or primeng directly in their modules. If they need any particular component which is not already developed in RvnCore, they should create it here. See __Base Components__ section for details.

## Base Components
All the base components are exported from `RvnComponentsModule`. If there is any need of a new base component similar to the once we have, they should be wrapped in custom component and exported from `RvnComponentsModule`. Because if apps start to use base components directly, it becomes a hassle to make any change to the functionality and look and feel of that component and making them consistent accross all apps in Raven framework.

### Conventions
1. All components inside `RvnComponentsModule` should start with `Rvn`. for example `RvnDatepickerComponent`.
2. All base components should have a single `@Input()` property called `config`.
3. Input config type must be an interface defined inside the component itself. Name of these interfaces should be the 'component's base name' plus 'Input'. e.g `RvnDatepickerComponent`'s input config property will have a type of `RvnDatepickerInput`
4. If component is using `ng-content` or setting `context` for `*ngTemplateOutlet`, they should be clearly mentioned in the comment in JSDoc convention
5. See any component already created for reference.


## Styles
Include single file `styles/styles.scss` to start using global styling.

RvnCore also holds the global sass variables which includes
1. Light/Dark theme colors like primary, accent and warn.
2. Spacings, which should be used in margins and paddings etc. never hardcode any px size in apps. They either should use variables directly or use dynamic values using calc() with variables or whatever is prefered.
3. Common widths and heights to use for very specific UI elements such as sideBar and topBar etc.

RvnCore brings in whole material design style and uses it to globally configure light and dark theme. By default the theme will be light. If want to use dark theme, just add `app-dark-theme` css class to the root element of the app.

## Publishing
After changes has been made, just run `npm run publish-core:patch` or minor/major from the design system to publish artifact to the repository.

## Docs
Compodoc has been used to generate documentation based on JSDoc commenting style guides. The inputs/outputs along with types would already be generated so theres no need to add those specifically in the comments. Add any default values you have along with ng-content selectors or templateRef contexts the component supports along with an example.

Run `npm run docs-core` to generate its documentation.


----------------

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Code scaffolding

Run `ng generate component component-name --project rvn-core` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project rvn-core`.
> Note: Don't forget to add `--project rvn-core` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build rvn-core` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build rvn-core`, go to the dist folder `cd dist/rvn-core` and run `npm publish`.

## Running unit tests

Run `ng test rvn-core` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
