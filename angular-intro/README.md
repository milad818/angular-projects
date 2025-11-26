# Angular Intro

## What is This Directory About?

This directory serves as an **introduction to the Angular framework**. It contains examples and exercises demonstrating core Angular concepts including:

- Component creation and communication
- Data binding (property binding, event binding, two-way binding)
- Directives (`@if`, `@for`, `ngClass`, `ngStyle`)
- Angular Pipes (built-in formatting)
- Signals for reactive state management
- Component lifecycle hooks
- Input/Output properties for parent-child communication
- TypeScript integration with Angular

This is a hands-on learning project to understand Angular's architecture and best practices.

---

## Installing Angular

### Prerequisites
Ensure you have Node.js and npm installed:
```bash
node --version
npm --version
```

### Install Angular CLI Globally
```bash
npm install -g @angular/cli
```

Verify the installation:
```bash
ng version
```

---

## Executing TypeScript Scripts Independently

TypeScript files (`.ts`) cannot be run directly by Node.js. You have two options:

### Option 1: Compile First, Then Run
```bash
# Compile TypeScript to JavaScript
tsc filename.ts

# Run the generated JavaScript file
node filename.js
```

### Option 2: Use ts-node (Run Directly)
```bash
# Install ts-node globally
npm install -g ts-node

# Run TypeScript directly
ts-node filename.ts
```

### Option 3: Use npx (No Installation)
```bash
npx ts-node filename.ts
```

---

## Installing Packages

### Install Packages for Your Angular Project
```bash
# Navigate to your project directory
cd angular-intro

# Install a package
npm install package-name

# Install as a dev dependency
npm install --save-dev package-name

# Install all dependencies from package.json
npm install
```

### Common Angular Packages
```bash
npm install @angular/forms
npm install @angular/router
npm install @angular/common
```

---

## Creating an Angular Application

### Create a New Angular App
```bash
ng new my-app-name
```

You'll be prompted to:
- Choose routing (yes/no)
- Select a stylesheet format (CSS, SCSS, etc.)

### Navigate to the Project
```bash
cd my-app-name
```

---

## Serving the Application

### Start the Development Server
```bash
ng serve
```

The application will be available at: **http://localhost:4200/**

### Serve with Auto-Open Browser
```bash
ng serve --open
```
or
```bash
ng serve -o
```

### Serve on a Different Port
```bash
ng serve --port 4300
```

The server automatically reloads when you modify source files.

---

## Creating Components

### Generate a New Component
```bash
ng generate component component-name
```

Shorthand:
```bash
ng g c component-name
```

This creates a new folder with four files:
- `component-name.ts` - Component logic
- `component-name.html` - Component template
- `component-name.css` - Component styles
- `component-name.spec.ts` - Unit tests

### Generate Component in a Specific Folder
```bash
ng g c folder/component-name
```

---

## Component Files Explained

When you create a component, Angular generates several files. Here's what each one does:

### 1. **`component-name.ts`** (TypeScript Component Class)

The **logic and behavior** of the component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',     // HTML tag to use this component
  templateUrl: './component-name.html', // Path to HTML template
  styleUrl: './component-name.css'    // Path to styles
})
export class ComponentName {
  // Properties (data)
  title = 'Hello';
  
  // Methods (behavior)
  doSomething() {
    console.log('Action triggered');
  }
}
```

**Key parts:**
- **`@Component` decorator**: Configures the component
- **`selector`**: The custom HTML tag (e.g., `<app-component-name>`)
- **`templateUrl`**: Links to the HTML file
- **`styleUrl`**: Links to the CSS file
- **Class**: Contains properties and methods

---

### 2. **`component-name.html`** (Template)

The **visual structure** of the component - what the user sees.

```html
<div>
  <h1>{{ title }}</h1>
  <button (click)="doSomething()">Click Me</button>
</div>
```

**Features:**
- **Interpolation**: `{{ property }}` - Display data
- **Property Binding**: `[src]="imageUrl"` - Bind to HTML attributes
- **Event Binding**: `(click)="method()"` - Handle user events
- **Directives**: `@if`, `@for`, `ngClass`, `ngStyle`
- **Two-way Binding**: `[(ngModel)]="property"`

---

### 3. **`component-name.css`** (Styles)

The **visual styling** for the component.

```css
h1 {
  color: blue;
  font-size: 24px;
}

button {
  background-color: green;
  color: white;
}
```

**Important:** These styles are **scoped to the component** - they won't affect other components.

---

### 4. **`component-name.spec.ts`** (Unit Tests)

The **test file** for the component.

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentName } from './component-name';

describe('ComponentName', () => {
  it('should create', () => {
    // Test logic here
  });
});
```

**Purpose:**
- Write automated tests for your component
- Test component behavior and rendering
- Run tests with: `ng test`

---

## Component File Summary

| File | Purpose | Contains |
|------|---------|----------|
| **`.ts`** | Logic & Behavior | Properties, methods, lifecycle hooks |
| **`.html`** | Structure & Layout | HTML template with Angular syntax |
| **`.css`** | Styling | Component-specific CSS styles |
| **`.spec.ts`** | Testing | Unit tests for the component |

---

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

---

## Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

---

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

---

## Additional Resources

- **[Angular Official Documentation](https://angular.dev/)** - Comprehensive guides and tutorials
- **[Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)** - Detailed CLI commands
- **[Angular Style Guide](https://angular.dev/style-guide)** - Best practices and conventions
- **[TypeScript Documentation](https://www.typescriptlang.org/)** - TypeScript language reference

---

## Project Structure

```
angular-intro/
├── src/
│   ├── app/
│   │   ├── app.ts              # Root component logic
│   │   ├── app.html            # Root component template
│   │   ├── app.css             # Root component styles
│   │   ├── post/               # Example component
│   │   └── iterpost/           # Example component
│   ├── assets/                 # Static files (images, etc.)
│   ├── index.html              # Main HTML file
│   └── main.ts                 # Application entry point
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

