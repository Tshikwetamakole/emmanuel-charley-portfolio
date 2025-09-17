interface ImportMetaEnv {
  readonly VITE_SOME_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
