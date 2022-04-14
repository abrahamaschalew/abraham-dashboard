# Abraham Dashboard

Abraham Dashboard is an angular project built for my personal site. The dashboard is used to manage contact messages, manage newsletter subscriptions, upload blog posts and files.

Whenever I build an application that needs a dashboard. I just connect to this and manage them all together.

This repo is public. Which includes the design code. Not implementation to backend services.

[Demo](https://abraham-dashboard.web.app)

## Getting started

```bash
npm i -g @angular/cli
git clone https://github.com/abrahamaschalew/abraham-dashboard.git abraham-dashboard
cd abraham-dashboard
npm i
ng serve
```

## Architecture

```project
├── src/app
│ ├── modules
│ │ ├──core
│ │ ├──material
│ │ ├──home
│ │ ├──blog
│ │ ├──files
│ ├── components
│ ├── app.module.ts
│ ├── app-routing.module.ts
│ ├── app.component.css
│ ├── app.component.ts
│ ├── app-routing.module.ts

```

As you can see there is a root module which is app.module.ts and there are many child modules. which located in modules folder.

### Core Module

Core Module work like inheritance. Whenever we create a new module we need to reuse some of our codes. By just importing Core Module in to the new module. We can reuse our code.

### Material Module

Group all angular material imports in one place.

### Home Module

Home module used for to manage contact messages and newsletter subscriptions.

### Blog Module.

To post blogs and manage them.

### Files Module.

To upload files and manage them.

## Adding App to manage

If you got an idea to manage something. Add another page using cli.

```bash
ng g m modules/{moduleName} --route {routing-url} --module app.module.ts
```

Finally add the following code to app/components/main-nav.component/html for navigation.

```html
<a mat-list-item routerLink="{newRouting}">New Page</a>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
