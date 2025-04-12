import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 bg-white/80 dark:bg-gray-700/95 backdrop-blur-sm"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-8"></div>
          <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Experienced React Developer with a proven track record in creating
            engaging and interactive web and mobile applications. Skilled in
            utilizing a wide range of technologies including HTML, CSS,
            JavaScript, React, Typescript, React Native, Next JS, Tailwind CSS,
            Redux, Redux toolkit, and Node.js to develop dynamic user
            experiences. Committed to delivering high-quality code and staying
            up to date with the latest industry trends and best practices. Adept
            at collaborating with cross-functional teams to meet project
            objectives and exceed client expectations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="hover:shadow-md transition-shadow duration-300 py-6">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Front-end Developer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    GE-Techs, Alexandria, Egypt (Remote)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    01/2022 to Current
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-300 py-6">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Arabic</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Native
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">English</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    B2 - Upper Intermediate
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
