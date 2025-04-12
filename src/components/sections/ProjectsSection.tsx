import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NoImage from "@/assets/no-image.png";

export function ProjectsSection() {
  const featuredProjects = [
    {
      title: "GE-Techs Website",
      description: "Company website for GE-Techs agency",
      link: "https://ge-techs.com/",
      github: "https://github.com/GE-Techs/ge-techs-website",
      image: NoImage,
    },
    {
      title: "Gold.sa",
      description: "E-commerce platform for gold products",
      link: "https://gold.sa/",
      github: "https://github.com/GE-Techs/gold-sa-website",
      image: NoImage,
    },
    {
      title: "Furns",
      description: "Furniture e-commerce website with Snip Cart integration",
      link: "https://furns-snip-cart-next-js.vercel.app/",
      github: "",
      image: NoImage,
    },
    {
      title: "GOV.SA",
      description: "Saudi government services platform",
      link: "https://my.gov.sa/",
      github: "https://gitlab.sharedt.com/gov.sa/gov-sa-frontend/",
      image: NoImage,
    },
    {
      title: "Gasgo Dashboard",
      description: "Admin and station dashboards for Gasgo",
      link: "http://dash.gasgo.matrixzone.net",
      github: "",
      image: NoImage,
    },
    {
      title: "Resume Site",
      description: "Personal resume website",
      link: "https://resume-new-three.vercel.app/",
      github: "",
      image: NoImage,
    },
  ];

  const allProjects = [
    {
      title: "Resume",
      link: "https://resume-new-three.vercel.app/",
      github: "",
      image: NoImage,
    },
    {
      title: "Zoric",
      link: "https://zoric-test.vercel.app/",
      github: "",
      image: NoImage,
    },
    {
      title: "Furns",
      link: "https://furns-snip-cart-next-js.vercel.app/",
      github: "",
      image: NoImage,
    },
    {
      title: "Uber Eats APP",
      link: "",
      github: "https://github.com/midokhalil1987/uber-eats-APP",
      image: NoImage,
    },
    {
      title: "Haseb",
      link: "",
      github: "https://github.com/GE-Techs/haseb-frontend",
      image: NoImage,
    },
    {
      title: "Login Auth App",
      link: "",
      github: "https://github.com/midokhalil1987/loginAppAuth",
      image: NoImage,
    },
    {
      title: "Ge-Techs",
      link: "https://ge-techs.com/",
      github: "https://github.com/GE-Techs/ge-techs-website",
      image: NoImage,
    },
    {
      title: "Social App",
      link: "",
      github: "https://github.com/midokhalil1987/mern-social-app",
      image: NoImage,
    },
    {
      title: "Eventy-web",
      link: "",
      github: "https://github.com/GE-Techs/eventy-web",
      image: NoImage,
    },
    {
      title: "Next-auth",
      link: "",
      github: "https://github.com/midokhalil1987/nextauth",
      image: NoImage,
    },
    {
      title: "Dashboard (Gasgo)",
      link: "http://stationdash.gasgo.matrixzone.net",
      github: "",
      image: NoImage,
    },
    {
      title: "Admin Dashboard (Gasgo)",
      link: "http://dash.gasgo.matrixzone.net",
      github: "",
      image: NoImage,
    },
    {
      title: "Brush - Web",
      link: "",
      github: "https://github.com/GE-Techs/brush",
      image: NoImage,
    },
    {
      title: "Gold-sa",
      link: "https://gold.sa/",
      github: "https://github.com/GE-Techs/gold-sa-website",
      image: NoImage,
    },
    {
      title: "Mostaneer",
      link: "",
      github: "https://github.com/GE-Techs/enarah",
      image: NoImage,
    },
    {
      title: "gov-sa",
      link: "https://my.gov.sa/",
      github: "https://gitlab.sharedt.com/gov.sa/gov-sa-frontend/",
      image: NoImage,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 bg-white/80 dark:bg-gray-700/95 backdrop-blur-sm"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="featured" className="text-lg">
              Featured Projects
            </TabsTrigger>
            <TabsTrigger value="all" className="text-lg">
              All Projects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="featured" className="space-y-8">
            <div className="grid gap-8 grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-6"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fill"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {project.link && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="hover:bg-blue-50"
                          title="Visit"
                        >
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} className="md:mr-2" />
                            <span className="hidden md:block">Visit</span>
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="hover:bg-blue-50"
                          title="Code"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon size={16} className="md:mr-2" />
                            <span className="hidden md:block">Code</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fill transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.link && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="hover:bg-blue-50 bg-white dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Visit
                            </Link>
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="hover:bg-blue-50 bg-white dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GithubIcon size={16} className="mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
