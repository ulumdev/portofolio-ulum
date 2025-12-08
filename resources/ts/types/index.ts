import { Config } from "ziggy-js";
import { User } from "./models";

export * from "./models";

export interface PageProps {
  auth: {
    user: User | null;
  };
  flash: {
    success?: string;
    error?: string;
  };
  settings: {
    site_name: string;
    site_tagline: string;
  };
  ziggy: Config & { location: string };
  // Add index signature if you want flexible properties
  [key: string]: any;
}

export type FormErrors = Record<string, string>;
