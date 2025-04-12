"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Mobile number is required"),
  description: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        toast.success("Your message has been sent successfully!");
        resetForm();
      } catch {
        toast.error("Failed to send message. Please try again later.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Your Name"
            }
            className={`pl-10 ${
              formik.touched.name && formik.errors.name
                ? "border-red-500 placeholder:text-red-500 bg-red-500/10"
                : ""
            }`}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Your Email"
            }
            className={`pl-10 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 placeholder:text-red-500 bg-red-500/10"
                : ""
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder={
              formik.touched.mobile && formik.errors.mobile
                ? formik.errors.mobile
                : "Your Mobile Number"
            }
            className={`pl-10 ${
              formik.touched.mobile && formik.errors.mobile
                ? "border-red-500 placeholder:text-red-500 bg-red-500/10"
                : ""
            }`}
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Textarea
            id="description"
            name="description"
            placeholder={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : "Your Message"
            }
            className={`pl-10 min-h-[150px] resize-none ${
              formik.touched.description && formik.errors.description
                ? "border-red-500 placeholder:text-red-500 bg-red-500/10"
                : ""
            }`}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
