import PublicLayout from "@/Layouts/PublicLayout";
import Button from "@/Components/Common/Button";
import Input from "@/Components/Common/Input";
import Textarea from "@/Components/Common/Textarea";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    SparklesIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ContactProps {
    settings: {
        email?: string;
        phone?: string;
        address?: string;
        github_url?: string;
        linkedin_url?: string;
        twitter_url?: string;
    };
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

    const contactInfo = [
        {
            icon: EnvelopeIcon,
            label: "Email",
            value: settings.email || "your@email.com",
            href: settings.email ? `mailto:${settings.email}` : null,
            color: "from-primary-500 to-primary-700",
        },
        {
            icon: PhoneIcon,
            label: "Phone",
            value: settings.phone || "+1 234 567 890",
            href: settings.phone ? `tel:${settings.phone}` : null,
            color: "from-green-500 to-green-700",
        },
        {
            icon: MapPinIcon,
            label: "Location",
            value: settings.address || "Your City, Country",
            href: null,
            color: "from-purple-500 to-purple-700",
        },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: settings.github_url || "#",
            color: "hover:bg-gray-900 hover:text-white",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: settings.linkedin_url || "#",
            color: "hover:bg-blue-600 hover:text-white",
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            url: settings.twitter_url || "#",
            color: "hover:bg-blue-400 hover:text-white",
        },
    ];

    return (
        <PublicLayout title="Contact">
            {/* Hero Header */}
            <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 dark:from-primary-900 dark:via-purple-900 dark:to-pink-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up border border-white/30">
                        <SparklesIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">
                            Let's Connect
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Get In Touch
                    </h1>
                    <p
                        className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Have a project in mind? Let's discuss how I can help
                        bring your ideas to life
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                                            >
                                                <info.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                                    {info.label}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 truncate">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                                            >
                                                <info.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                                    {info.label}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 truncate">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Social Links */}
                        <div
                            className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-primary-200 dark:border-gray-700 animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white ${social.color} transition-all duration-300 transform hover:scale-110 shadow-lg`}
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Availability */}
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Available for freelance
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                I'm currently available for freelance work and
                                new opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    Send Me a Message
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Fill out the form below and I'll get back to
                                    you as soon as possible
                                </p>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="Your Name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        error={errors.name}
                                        required
                                        placeholder="John Doe"
                                        className="dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
                                    />
                                    <Input
                                        label="Your Email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        error={errors.email}
                                        required
                                        placeholder="john@example.com"
                                        className="dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
                                    />
                                </div>

                                <Input
                                    label="Subject"
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData("subject", e.target.value)
                                    }
                                    error={errors.subject}
                                    required
                                    placeholder="What is this about?"
                                    className="dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
                                />

                                <Textarea
                                    label="Message"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    error={errors.message}
                                    required
                                    rows={6}
                                    placeholder="Tell me more about your project or question..."
                                    className="dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
                                />

                                <Button
                                    type="submit"
                                    loading={processing}
                                    size="lg"
                                    className="w-full md:w-auto group"
                                >
                                    <PaperAirplaneIcon className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* FAQ or Additional Info */}
                        <div
                            className="mt-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                What to Expect
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "I typically respond within 24 hours",
                                    "Free initial consultation for all projects",
                                    "Detailed project proposals and timelines",
                                    "Transparent pricing and communication",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start text-gray-700 dark:text-gray-300"
                                    >
                                        <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
