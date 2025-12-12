# MultiSet WebXR SDK

This project is a sample WebXR application that demonstrates AR localization using the MultiSet VPS API. It uses React, Three.js, and Vite, and supports AR sessions in compatible browsers.

## Features

- WebXR AR session with camera access
- Real-time localization using MultiSet VPS API
- Visualization of pose results with 3D gizmo and axes
- Uses Three.js for rendering and model loading
- Tailwind CSS for styling

## Getting Started

### 1. Clone the repository

```sh
git clone <repo-url>
cd multiset-webxr-sdk
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure API Credentials

Edit [`src/config.ts`](src/config.ts) and set your `CLIENT_ID`, `CLIENT_SECRET`, and `CODE`:

> [!NOTE]
> See the [MultiSet AI developer portal](https://developer.multiset.ai/) for credentials and map details
>
> See the documentation on [Creating MultiSet Credentials here](https://docs.multiset.ai/basics/credentials)

```ts
export const CLIENT_ID = "YOUR_CLIENT_ID";
export const CLIENT_SECRET = "YOUR_CLIENT_SECRET";
// Valid options: "map" | "map-set"
export const CURRENT_MAP_TYPE = "YOUR_MAP_TYPE";
export const CODE = "YOUR_MAP_CODE";
```

### 4. Start the development server

```sh
npm run dev -- --host
```

Open the printed URL in a browser that supports WebXR (e.g., Chrome for Android).

## Project Structure

- [`src/`](src/)
  - [`App.tsx`](src/App.tsx): Main React component and AR logic
  - [`Utils.ts`](src/Utils.ts): Camera, image, and API utilities
  - [`config.ts`](src/config.ts): API configuration
  - [`interfaces.ts`](src/interfaces.ts): TypeScript interfaces
  - [`assets/`](src/assets/): Icons and images
- [`public/`](public/): Static files, Draco decoders, models, and video assets

## Scripts

- `npm run dev` — Start development server with Vite
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

## Notes

> [!IMPORTANT]
>
> - Requires HTTPS for WebXR camera access (Vite dev server is configured for HTTPS).
> - The Draco decoder files are included in [`public/draco/`](public/draco/).
> - Tested with Chrome on Android.

## GitHub pages deployment

A GitHub actions manual workflow has been provided for easy testing.

To use this feature, you will need to:

- Enable GitHub pages for your repository (or Fork)
- Configure the following secrets for the required credentials and map details
  - CLIENT_ID - The public API key from your MultiSet credentials.
  - CLIENT_SECRET - The private API key from your MultiSet credentials (only available when the credentials are generated)
  - CURRENT_MAP_TYPE - The type of map to be loaded, either `map` or `map-set`.
  - MAP_CODE - The specific code to be loaded, from the "Maps" view on the Developer portal

Once the secrets have been configured, you only need to manually run the "Deploy NPM Site" workflow to publish the test application.

> [!NOTE]
> See the [GitHub Pages documentation](https://docs.github.com/en/pages) site for more details on using GitHub pages.
