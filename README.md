# React Assignment – Vite + TypeScript

A responsive React application created using Vite and TypeScript. This project demonstrates reusable components, page navigation, and a clean folder structure.

## Features

* Home and About pages
* Navigation using React Router DOM
* Reusable Button component
* Reusable Card component
* Shared Header and Footer
* TypeScript interfaces for component props
* Responsive CSS styling

## Tech Stack

* React
* TypeScript
* Vite
* React Router DOM
* CSS

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── cards/
│   │   └── Card.tsx
│   ├── elements/
│   │   └── Button.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── styles/
│   └── global.css
├── types/
│   └── index.ts
├── utils/
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/JanhaviAmbulkar/React_Assignment.git
```

Navigate to the project directory:

```bash
cd React_Assignment
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Starts the development server     |
| `npx tsc -b`      | Checks TypeScript compilation     |
| `npm run build`   | Builds the project for production |
| `npm run preview` | Previews the production build     |

## Pages

* **Home:** `/`
* **About:** `/about`

## GitHub Repository

https://github.com/JanhaviAmbulkar/React_Assignment

## Author

Janhavi Ambulkar
