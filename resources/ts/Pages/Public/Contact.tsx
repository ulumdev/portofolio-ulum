import PublicLayout from "@/Layouts/PublicLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// UI Components Dasar
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
            {/* Latar Belakang Gelap Kustom */}
            <div className="bg-slate-900 min-h-screen font-sans text-slate-300">
                {/* Header Baru dengan Desain Bersih */}
                <SectionHero
                    title="Get In"
                    gradientWord="Touch"
                    subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life with clean code and modern design."
                    badgeText="LET'S CONNECT"
                    badgeIcon={
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    }
                />

                {/* Konten Utama (Layout 2 Kolom) */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Kolom Kiri: Sidebar Informasi Kontak */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-6">
                            {/* Kartu Status Ketersediaan */}
                            <StyledCard className="p-6">
                                <div className="flex items-center mb-4 text-white font-semibold">
                                    <span className="relative flex h-3 w-3 mr-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    AVAILABLE FOR FREELANCE
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    I'm currently available for freelance work and new opportunities.
                                    Let's build something amazing together.
                                </p>
                            </StyledCard>

                            {/* Info Kontak Dasar */}
                            <StyledCard className="p-0">
                                <ul className="divide-y divide-slate-700/50">
                                    <li className="p-6 flex items-start">
                                        <div className="h-10 w-10 rounded bg-blue-900/40 text-blue-400 flex items-center justify-center mr-4">
                                            <EnvelopeIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Email</span>
                                            <a href={`mailto:${settings.email}`} className="text-white hover:text-blue-400 font-medium transition-colors">
                                                {settings.email || "your.email@example.com"}
                                            </a>
                                        </div>
                                    </li>
                                    <li className="p-6 flex items-start">
                                        <div className="h-10 w-10 rounded bg-purple-900/40 text-purple-400 flex items-center justify-center mr-4">
                                            <MapPinIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Location</span>
                                            <span className="text-white font-medium">
                                                {settings.address || "Your City, Country"}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="p-6 flex items-start">
                                        <div className="h-10 w-10 rounded bg-emerald-900/40 text-emerald-400 flex items-center justify-center mr-4">
                                            <PhoneIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Phone</span>
                                            <a href={`tel:${settings.phone}`} className="text-white hover:text-emerald-400 font-medium transition-colors">
                                                {settings.phone || "+1 234 567 890"}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </StyledCard>

                            {/* Media Sosial */}
                            <StyledCard className="p-6">
                                <h3 className="text-white font-bold mb-4">Follow Me</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-slate-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
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
                                <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
                                <p className="text-slate-400 mb-8">Fill out the form below and I'll get back to you within 24 hours.</p>

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

                            {/* How I Work Bottom Info */}
                            <StyledCard className="p-8 pb-10">
                                <div className="flex items-center mb-6 text-white font-bold text-lg">
                                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    How I Work
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="flex items-center text-white font-medium mb-1">
                                            <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            Quick Response
                                        </h4>
                                        <p className="text-sm text-slate-400 pl-6">I respond to all inquiries within 24 hours.</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center text-white font-medium mb-1">
                                            <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                            </svg>
                                            Free Consultation
                                        </h4>
                                        <p className="text-sm text-slate-400 pl-6">Initial discussion to align on project needs.</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center text-white font-medium mb-1">
                                            <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            Detailed Proposals
                                        </h4>
                                        <p className="text-sm text-slate-400 pl-6">Transparent pricing, timeline, and deliverables.</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center text-white font-medium mb-1">
                                            <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                            </svg>
                                            Confidentiality
                                        </h4>
                                        <p className="text-sm text-slate-400 pl-6">Your project details are safe and secure.</p>
                                    </div>
                                </div>
                            </StyledCard>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
