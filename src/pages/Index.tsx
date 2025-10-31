import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                View Our <span className="text-gradient-accent">Portfolio</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our complete collection of projects and see the quality of our work
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
              {[
                { src: project1, alt: "Glass Partition Office Cabin", title: "Glass Partition Office" },
                { src: project2, alt: "Modern Office Conference Room", title: "Conference Room Design" },
                { src: project3, alt: "False Ceiling Installation", title: "False Ceiling Work" }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500 animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-heading font-bold text-xl mb-2">
                        {project.title}
                      </h3>
                      <Link 
                        to="/portfolio" 
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-white text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-strong hover:shadow-xl hover:scale-105 transition-all duration-300">
                  View Full Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
