# Dropbox Brand Guidelines Clone

This project is a clone of the Dropbox Brand Guidelines website, built using modern web technologies like Next.js, Tailwind CSS, and TypeScript.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Responsive design with Tailwind CSS.
- Theme support with light and dark modes.
- Modular and reusable components.
- Built-in animations using `tailwindcss-animate`.
- Toast notifications using a custom `Toaster` component.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **ShadCN UI**: Component library for building modern UIs.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>

Here’s a suggested 

README.md

 for your application:

```markdown
# Dropbox Brand Guidelines Clone

This project is a clone of the Dropbox Brand Guidelines website, built using modern web technologies like Next.js, Tailwind CSS, and TypeScript.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Responsive design with Tailwind CSS.
- Theme support with light and dark modes.
- Modular and reusable components.
- Built-in animations using `tailwindcss-animate`.
- Toast notifications using a custom `Toaster` component.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **ShadCN UI**: Component library for building modern UIs.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Development

### Tailwind CSS Configuration

The Tailwind CSS configuration is located in [`tailwind.config.ts`](tailwind.config.ts). It includes custom themes, animations, and color palettes.

### Theming

The application supports light and dark themes using the `ThemeProvider` component. You can find the implementation in [`app/layout.tsx`](app/layout.tsx).

### Components

Reusable components are located in the [`components`](components/) directory. Key components include:

- `ThemeProvider`: Handles theming.
- `Toaster`: Displays toast notifications.
- `GridLayout` and `GridTile`: Used for layout and content organization.

### Aliases

Path aliases are defined in [`components.json`](components.json) for cleaner imports. For example:

```tsx
import { ThemeProvider } from '@/components/theme-provider';
```

## Folder Structure

```
.
├── app/                # Application entry points and layouts
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── public/             # Static assets
├── styles/             # Global styles
├── 

tailwind.config.ts

  # Tailwind CSS configuration
└── 

tsconfig.json

       # TypeScript configuration
```