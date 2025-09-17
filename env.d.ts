interface ImportMetaEnv {
  readonly VITE_SOME_KEY?: string;
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Declare global Buffer for polyfill
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}
