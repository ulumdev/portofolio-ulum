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
    settings: {
      site_name: string;
      site_tagline: string;
      site_description?: string;
      bio: string;
      profile_photo?: string;
      github_url: string;
      linkedin_url: string;
      twitter_url: string;
      instagram_url?: string;
      email: string;
      address?: string;
      phone?: string;
      projects_completed?: string;
      years_experience?: string;
      happy_clients?: string;
      privacy_policy_url?: string;
      terms_of_service_url?: string;
    };
  }
}

export {};
