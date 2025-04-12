import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-24 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "React Native",
            "Next.js",
            "Tailwind CSS",
            "Redux",
            "Node.js",
            "Git",
            "RESTful APIs",
            "Responsive Design",
            "Teamwork",
            "Creativity",
            "Time Management",
            "Attention to Detail",
            "Communication",
            "Adaptability",
            "Interpersonal Skills",
            "SEO Principles",
            "Agile Scrum",
          ].map((skill) => (
            <Badge
              key={skill}
              className="py-3 px-4 text-sm font-medium bg-white text-blue-800 hover:bg-blue-100 transition-colors duration-300 shadow-md dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
