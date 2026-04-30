import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    required?: boolean;
}

export function FormInput({ label, error, required, className = "", ...props }: InputProps) {
    return (
        <div className={`mb-6 ${className}`}>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className={`w-full bg-slate-900 border ${error ? "border-red-500" : "border-slate-700"
                    } rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                required={required}
                {...props}
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
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
        <div className={`mb-6 ${className}`}>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                className={`w-full bg-slate-900 border ${error ? "border-red-500" : "border-slate-700"
                    } rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all min-h-[150px]`}
                required={required}
                {...props}
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
    );
}
