declare module '@inertiajs/react' {
  interface PageProps {
    auth: {
      user: import('./models').User | null;
    };
    flash: {
      success?: string;
      error?: string;
      warning?: string;
      info?: string;
    };
    settings: import('./index').Settings;
  }
}

export {};
