export {};

declare global {
  interface Window {
    setTheme: (theme: "dark" | "light") => void;
    toggleTheme: () => void;
  }
}
