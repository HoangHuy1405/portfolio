"use client";

import React, { useState, useTransition } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { TextArea } from "./ui/textarea";
import { motion } from "motion/react";
import { submitContactForm } from "@/actions/contact";
import { toast } from "react-toastify";
import { Mail, MapPin, Phone, Send } from "lucide-react";

// Types
interface ContactFormData {
  senderName: string;
  senderEmail: string;
  message: string;
}

// Initial form state
const INITIAL_FORM_STATE: ContactFormData = {
  senderName: "",
  senderEmail: "",
  message: "",
};

// Contact info - you can update these later
const CONTACT_INFO = {
  email: "nguyenmaihoanghuy@gmail.com",
  phone: "+84 0332818144",
  address: "Q9, Ho Chi Minh City, Vietnam",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.senderName.trim() ||
      !formData.senderEmail.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    startTransition(async () => {
      const response = await submitContactForm(formData);

      if (response.success) {
        toast.success(response.message);
        setFormData(INITIAL_FORM_STATE);
      } else {
        toast.error(response.message);
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="contact"
      className="py-30 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-black dark:text-neutral-200">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-semibold tracking-widest text-orange-500 dark:text-orange-400 mb-2">
              STAY CONNECTED
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-8">
              Let&apos;s work together
            </h3>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <ContactInfoCard
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
              <ContactInfoCard
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value={CONTACT_INFO.phone}
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              />
              <ContactInfoCard
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value={CONTACT_INFO.address}
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(255,140,80,0.25),0_6px_20px_-2px_rgba(255,120,60,0.18),0_0_0_2px_rgba(255,180,140,0.3)]"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <FormField
                id="senderName"
                label="Your Name"
                type="text"
                placeholder="John Doe"
                value={formData.senderName}
                onChange={(value) => handleInputChange("senderName", value)}
                disabled={isPending}
              />

              <FormField
                id="senderEmail"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData.senderEmail}
                onChange={(value) => handleInputChange("senderEmail", value)}
                disabled={isPending}
              />

              <LabelInputContainer>
                <Label
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="message"
                >
                  Message
                </Label>
                <TextArea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  disabled={isPending}
                  className="min-h-[140px]"
                />
              </LabelInputContainer>

              <SubmitButton isPending={isPending} />
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Contact Info Card Component
interface ContactInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactInfoCard({ icon, label, value, href }: ContactInfoCardProps) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-neutral-800/50 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-900 dark:text-white font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

// Sub-components
interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: FormFieldProps) {
  return (
    <LabelInputContainer>
      <Label
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </LabelInputContainer>
  );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      className="group/btn relative cursor-pointer flex items-center justify-center gap-2 h-12 w-full rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      type="submit"
      disabled={isPending}
    >
      {isPending ? (
        <span className="flex items-center justify-center gap-2">
          <LoadingSpinner />
          Sending...
        </span>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}
