import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function HobbiesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-24 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Swimming", "Gaming", "Reading", "Learning new things"].map(
            (hobby, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow duration-300 dark:bg-gray-700 dark:text-white py-6"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{hobby}</CardTitle>
                </CardHeader>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
