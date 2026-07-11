import PublicLayout from "@/Layouts/PublicLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// UI Components
import SectionHero from "@/Components/Public/UI/SectionHero";
import StyledCard from "@/Components/Public/UI/StyledCard";
import { FormInput, FormTextarea } from "@/Components/Public/UI/FormControls";
import GradientButton from "@/Components/Public/UI/GradientButton";
import { Settings } from "@/types";

interface ContactProps {
    settings: Settings;
}

export default function Contact({ settings }: ContactProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post("/contact", {
            onSuccess: () => reset(),
        });
    };

    const socialLinks = [
        { name: "GitHub", icon: FaGithub, url: settings.github_url || "#" },
        { name: "LinkedIn", icon: FaLinkedin, url: settings.linkedin_url || "#" },
        { name: "Twitter", icon: FaTwitter, url: settings.twitter_url || "#" },
    ];

    return (
        <PublicLayout title="Contact">
            <div className="w-full">
                {/* Header */}
                <SectionHero
                    title="Get In"
                    gradientWord="Touch"
                    subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life with clean code and modern design."
                />

                {/* Konten Utama */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Kolom Kiri: Sidebar Informasi Kontak */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-6">
                            {/* Kartu Status Ketersediaan */}
                            <StyledCard className="p-6">
                                <div className="flex items-center mb-4 text-slate-900 dark:text-white font-semibold">
                                    <span className="relative flex h-3 w-3 mr-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                    </span>
                                    AVAILABLE FOR FREELANCE
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    I'm currently available for freelance work and new opportunities.
                                    Let's build something amazing together.
                                </p>
                            </StyledCard>

                            {/* Info Kontak Dasar */}
                            <StyledCard className="p-0">
                                <ul className="divide-y divide-slate-200 dark:divide-slate-700/50">
                                    <li className="p-6 flex items-start">
                                        <div className="h-10 w-10 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center mr-4">
                                            <EnvelopeIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 uppercase tracking-wider">Email</span>
                                            <a href={`mailto:${settings.email}`} className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                                {settings.email || "your.email@example.com"}
                                            </a>
                                        </div>
                                    </li>
                                    <li className="p-6 flex items-start">
                                        <div className="h-10 w-10 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center mr-4">
                                            <MapPinIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 uppercase tracking-wider">Location</span>
                                            <span className="text-slate-900 dark:text-white font-medium">
                                                {settings.address || "Your City, Country"}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="p-6 flex items-start">
                                        <div className="h-10 w-10 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center mr-4">
                                            <PhoneIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 uppercase tracking-wider">Phone</span>
                                            <a href={`tel:${settings.phone}`} className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                                {settings.phone || "+1 234 567 890"}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </StyledCard>

                            {/* Media Sosial */}
                            <StyledCard className="p-6">
                                <h3 className="text-slate-900 dark:text-white font-bold mb-4">Follow Me</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white transition-all duration-300"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </StyledCard>
                        </div>

                        {/* Kolom Kanan: Area Formulir dan Fitur */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-6">
                            {/* Formulir */}
                            <StyledCard className="p-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send Me a Message</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8">Fill out the form below and I'll get back to you within 24 hours.</p>

                                <form onSubmit={submit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                        <FormInput
                                            label="Your Name"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            error={errors.name}
                                            placeholder="John Doe"
                                            required
                                        />
                                        <FormInput
                                            label="Your Email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData("email", e.target.value)}
                                            error={errors.email}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <FormInput
                                        label="Subject"
                                        value={data.subject}
                                        onChange={(e) => setData("subject", e.target.value)}
                                        error={errors.subject}
                                        placeholder="Project Inquiry / Job Opportunity"
                                        required
                                    />
                                    <FormTextarea
                                        label="Message"
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        error={errors.message}
                                        placeholder="Tell me more about your project goals, timeline, and budget..."
                                        rows={5}
                                        required
                                    />
                                    <GradientButton type="submit" disabled={processing} className="mt-4">
                                        {processing ? "Sending..." : "Send Message"}
                                    </GradientButton>
                                </form>
                            </StyledCard>

                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
