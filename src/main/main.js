console.log("Running the app")
const { app, BrowserWindow } = require("electron");
import * as path from "path";

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "../preload/preload.js"),
      webSecurity: false,
    },
  });

  // Vite dev server URL
  mainWindow.loadURL("http://localhost:5173");

  mainWindow.on("closed", () => (mainWindow = null));
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
