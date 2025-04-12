import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 bg-white/80 dark:bg-gray-700/95 backdrop-blur-sm"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-8"></div>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Feel free to contact me for any work or suggestions.
          </p>
        </div>
        <Card className="hover:shadow-md transition-shadow duration-300 py-6">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">
              Send a Message
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
