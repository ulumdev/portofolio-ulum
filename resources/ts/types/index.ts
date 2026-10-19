import { Config } from "ziggy-js";
import { User } from "./models";

export * from "./models";

export interface Settings {
    site_name: string;
    site_tagline: string;
    site_description?: string;
    profile_photo?: string;
    bio: string;
    github_url: string;
    linkedin_url: string;
    twitter_url: string;
    instagram_url: string;
    email: string;
    address?: string;
    phone?: string;
    projects_completed?: string;
    years_experience?: string;
    happy_clients?: string;
    privacy_policy_url?: string;
    terms_of_service_url?: string;
    cv_file?: string;
    home_hero_title?: string;
    home_hero_gradient?: string;
    home_hero_subtitle?: string;
    about_hero_title?: string;
    about_hire_status?: string;
    portfolio_hero_title?: string;
    portfolio_hero_gradient?: string;
    portfolio_hero_subtitle?: string;
    blog_hero_title?: string;
    blog_hero_gradient?: string;
    blog_hero_subtitle?: string;
    contact_hero_title?: string;
    contact_hero_gradient?: string;
    contact_hero_subtitle?: string;
    contact_freelance_status?: string;
}

export interface PageProps {
    auth: {
        user: User | null;
    };
    flash: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
    settings: Settings;
    ziggy: Config & { location: string };
    // Add index signature if you want flexible properties
    [key: string]: any;
}

export type FormErrors = Record<string, string>;
