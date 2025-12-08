declare module '@inertiajs/react' {
  interface PageProps {
    auth: {
      user: import('./models').User | null;
    };
    flash: {
      success?: string;
      error?: string;
    };
    settings: {
      site_name: string;
      site_tagline: string;
    };
  }
}

export {};
