import { useState, FormEventHandler } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { useForm, usePage } from "@inertiajs/react";
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    CheckIcon,
    SparklesIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// UI Components
import SectionHero from "@/Components/Public/UI/SectionHero";
import { FormInput, FormTextarea } from "@/Components/Public/UI/FormControls";
import { Settings, PageProps } from "@/types";

interface ContactProps {
    settings: Settings;
}

export default function Contact({ settings }: ContactProps) {
    const { flash } = usePage<PageProps>().props;
    const [copiedEmail, setCopiedEmail] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post("/contact", {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const handleCopyEmail = () => {
        if (!settings.email) return;
        navigator.clipboard.writeText(settings.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const socialLinks = [
        { name: "GitHub", icon: FaGithub, url: settings.github_url },
        { name: "LinkedIn", icon: FaLinkedin, url: settings.linkedin_url },
        { name: "Twitter", icon: FaTwitter, url: settings.twitter_url },
        { name: "Instagram", icon: FaInstagram, url: settings.instagram_url },
    ].filter((s) => s.url && s.url !== "#");

    return (
        <PublicLayout title="Contact">
            <div className="w-full pb-24">
                {/* Header */}
                <SectionHero
                    badgeText="Open For Collaboration"
                    badgeIcon={<SparklesIcon className="w-4 h-4" />}
                    title={settings.contact_hero_title || "Let's Start a"}
                    gradientWord={settings.contact_hero_gradient || "Conversation"}
                    subtitle={
                        settings.contact_hero_subtitle ||
                        "Have a project inquiry, open engineering position, or just want to discuss software architecture? Send a message and I'll get back to you promptly."
                    }
                />

                {/* Main Content */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Success Flash Banner */}
                    {flash?.success && (
                        <div className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-sm font-mono flex items-center gap-2">
                            <CheckIcon className="w-5 h-5" />
                            <span>{flash.success}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Direct Info & Availability */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Availability Card */}
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span>{settings.contact_freelance_status || "AVAILABLE FOR WORK"}</span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                                    Available for full-time engineering roles, high-impact contract work, and technical consulting.
                                </p>
                            </div>

                            {/* Contact Details Card */}
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-4">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
                                    Direct Channels
                                </h3>

                                <div className="space-y-3">
                                    {/* Email with copy */}
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                                        <div className="flex items-center gap-2.5 overflow-hidden">
                                            <EnvelopeIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                            <span className="text-xs font-mono text-slate-700 dark:text-zinc-300 truncate">
                                                {settings.email || "ulumdev@gmail.com"}
                                            </span>
                                        </div>
                                        <button
                                            onClick={handleCopyEmail}
                                            className="ml-2 text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                                        >
                                            {copiedEmail ? "Copied!" : "Copy"}
                                        </button>
                                    </div>

                                    {settings.address && (
                                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06] text-xs font-mono text-slate-700 dark:text-zinc-300">
                                            <MapPinIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                            <span>{settings.address}</span>
                                        </div>
                                    )}

                                    {settings.phone && (
                                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06] text-xs font-mono text-slate-700 dark:text-zinc-300">
                                            <PhoneIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                            <a href={`tel:${settings.phone}`} className="hover:underline">
                                                {settings.phone}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Social Profiles */}
                            {socialLinks.length > 0 && (
                                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold mb-3">
                                        Professional Networks
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {socialLinks.map((s) => {
                                            const Icon = s.icon;
                                            return (
                                                <a
                                                    key={s.name}
                                                    href={s.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-white/[0.06] hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-200"
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                    <span>{s.name}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div className="lg:col-span-7">
                            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                    Send a Direct Message
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 font-normal">
                                    Fill out the form below. Messages are delivered straight to my personal inbox.
                                </p>

                                <form onSubmit={submit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                        <FormInput
                                            label="Your Name"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            error={errors.name}
                                            placeholder="Moh. Bahrul"
                                            required
                                        />
                                        <FormInput
                                            label="Email Address"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData("email", e.target.value)}
                                            error={errors.email}
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>

                                    <FormInput
                                        label="Subject"
                                        value={data.subject}
                                        onChange={(e) => setData("subject", e.target.value)}
                                        error={errors.subject}
                                        placeholder="Full Stack Opportunity / Project Collaboration"
                                        required
                                    />

                                    <FormTextarea
                                        label="Message"
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        error={errors.message}
                                        placeholder="Tell me about your project, timeline, tech stack, or opportunity..."
                                        rows={5}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        <PaperAirplaneIcon className="w-4 h-4" />
                                        <span>{processing ? "Sending Message..." : "Submit Inquiry"}</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
