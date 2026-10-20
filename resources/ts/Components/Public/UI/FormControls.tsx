import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    required?: boolean;
}

export function FormInput({ label, error, required, className = "", ...props }: InputProps) {
    return (
        <div className={`mb-5 ${className}`}>
            <label className="block text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                {label} {required && <span className="text-rose-500">*</span>}
            </label>
            <input
                className={`w-full bg-white dark:bg-zinc-900/90 border ${
                    error
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-200 dark:border-white/[0.08] focus:border-blue-500 dark:focus:border-blue-400"
                } rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                required={required}
                {...props}
            />
            {error && <p className="mt-1.5 text-xs text-rose-500 font-mono">{error}</p>}
        </div>
    );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
    required?: boolean;
}

export function FormTextarea({ label, error, required, className = "", ...props }: TextareaProps) {
    return (
        <div className={`mb-5 ${className}`}>
            <label className="block text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                {label} {required && <span className="text-rose-500">*</span>}
            </label>
            <textarea
                className={`w-full bg-white dark:bg-zinc-900/90 border ${
                    error
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-200 dark:border-white/[0.08] focus:border-blue-500 dark:focus:border-blue-400"
                } rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[140px]`}
                required={required}
                {...props}
            />
            {error && <p className="mt-1.5 text-xs text-rose-500 font-mono">{error}</p>}
        </div>
    );
}
