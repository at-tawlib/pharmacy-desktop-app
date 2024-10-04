# Pharmacy Desktop App

This is a **front-end desktop application** built with **Electron**, **React**, and **Vite**. The app simulates a pharmacy system interface, utilizing mock data with no backend integration.

## Features
- **Electron**: Desktop application framework.
- **React**: Front-end framework for building the UI.
- **Vite**: Fast development environment.
- **Material-UI (MUI)**: UI components and icons.
- **Mock Data**: All data is mocked for the sake of this example.

## Folder Structure
```
pharmacy-desktop-app/
├── node_modules/          # Dependencies installed via npm
├── out/                   # Compiled output from Electron
│   └── main/
│       └── main.js        # Main process output for Electron
├── public/                # Static assets such as icons and images
├── src/                   # Main source code of the application
│   ├── main/              # Electron's main process code
│   │   └── main.js        # Electron entry point (main process)
│   ├── preload/           # Preload scripts for Electron
│   │   └── preload.js     # Preload entry point
│   └── renderer/          # Front-end (React) code
│       ├── components/    # Reusable React components
│       ├── constants/     # Application-wide constants
│       ├── hooks/         # Custom React hooks
│       ├── layouts/       # Layout components for app structure
│       ├── mock/          # Mock data for development
│       ├── pages/         # Application pages (views)
│       ├── routes/        # React Router configuration
│       ├── sections/      # Segments of the UI, like headers, footers
│       ├── theme/         # MUI theme settings and customization
│       ├── utils/         # Utility functions
│       ├── App.jsx        # Root component for the React app
│       ├── global.css     # Global styling for the application
│       └── main.jsx       # Entry point for React's rendering
├── .gitignore             # Git ignored files
├── electron.vite.config.js # Configuration for Electron with Vite
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite bundler configuration
```

## Getting Started

####  Prerequisites

-   **Node.js**: Make sure you have Node.js installed (v14 or higher recommended).
-   **npm**: Node Package Manager comes with Node.js. Make sure it's up to date.

#### Installation
1.  **Clone the repository**:
 
    ```bash
    git clone https://github.com/at-tawlib/pharmacy-desktop-app.git
    ```
    
2.  **Navigate to the project directory**:
    
	```bash
	cd pharmacy-desktop-app 
	```
    
3.  **Install dependencies**:
    
    Run the following command to install all required dependencies:
	 ```bash
	npm install 
	```
	
## Running the App
1.  **Development Mode**:
    
    To run the app in development mode, where Vite will serve the React app and Electron will open a desktop window:
    
	```bash
	npm run dev
	```
    
    This will start the Electron app with live reload support.
    
2.  **Build the App**:
    
    To build the Electron app for production, run:
    ```bash
	npm run build
	```
    This will create a production-ready build of the app.
    
3.  **Preview the Build**:

    To preview the production build:
	```bash
	npm run preview
	```        
    This will open the Electron app in production mode.
    

### Running Vite Standalone

You can also run the React app alone without the Electron wrapper using Vite:

-   **Development Mode** (without Electron):
	```bash
	npm run dev-vite
	```    
-  
-  **Build the Vite App**:
	```bash
	npm run build-vite
	```    
    
-   **Preview the Vite Build**:
	```bash
	npm run preview-vite
	```

### Linting

To run ESLint to check for any code quality issues:
```bash
npm run lint
```


## Tech Stack

-   **Electron**: Desktop app framework to build cross-platform apps.
-   **React**: JavaScript library for building user interfaces.
-   **Vite**: Next-generation front-end tooling.
-   **Material-UI (MUI)**: Component library for a great user interface.
-   **React Query**: Data-fetching and caching.
-   **Mock Data**: Simulated data used for this app.

## Notes

-   This project does not include any backend integration. All data displayed in the app is mock data.
-   Ensure your Node.js and npm versions are up to date for smooth development.

## License

This project is licensed under the MIT License.

----------

If you run into any issues or have questions, feel free to open an issue or contact me.

### Breakdown:
1. **Project Overview**: High-level overview of what the project does.
2. **Folder Structure**: Helps users understand how the project is organized.
3. **Getting Started**: Step-by-step instructions on how to set up and run the app, both in development and production modes.
4. **Running Standalone Vite**: Instructions to run the app with Vite alone (for front-end development).
5. **Linting**: Instructions for running ESLint.
6. **Tech Stack**: Overview of technologies used.
7. **Notes**: Important notes on the use of mock data and Node.js requirements.
8. **License**: You can customize this section if needed.

Let me know if you need any more adjustments! 😊`

> Written with [StackEdit](https://stackedit.io/).
