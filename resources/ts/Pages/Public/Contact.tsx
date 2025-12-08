import PublicLayout from '@/Layouts/PublicLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/contact', {
      onSuccess: () => reset(),
    });
  };

  return (
    <PublicLayout title="Contact">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-primary-100">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:hello@example.com"
                        className="text-gray-600 hover:text-primary-600"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Your City, Country</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 hover:text-primary-600"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  {/* Add social media icons/links here */}
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Your Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    required
                    placeholder="John Doe"
                  />
                  <Input
                    label="Your Email"
                    type="email"
                    value={data. email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <Input
                  label="Subject"
                  value={data.subject}
                  onChange={(e) => setData('subject', e.target.value)}
                  error={errors.subject}
                  required
                  placeholder="What is this about?"
                />

                <Textarea
                  label="Message"
                  value={data. message}
                  onChange={(e) => setData('message', e.target.value)}
                  error={errors.message}
                  required
                  rows={6}
                  placeholder="Tell me more about your project or question..."
                />

                <Button type="submit" loading={processing} size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
