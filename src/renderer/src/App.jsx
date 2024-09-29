import AppRouter from "./routes/AppRouter";
import ThemeProvider from "./theme";

// TODO: Providers (QueryClient etc.), context etc
export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
