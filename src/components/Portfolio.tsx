import { motion } from "framer-motion";
import { Building2, Factory, Briefcase, Frame, Settings, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import categoryAluminumPartition from "@/assets/category-aluminum-partition.jpg";
import categoryFalseCeiling from "@/assets/category-false-ceiling.jpg";
import categoryButterflyLouver from "@/assets/category-butterfly-louver.jpg";
import categoryGrillPartition from "@/assets/category-grill-partition.jpg";
import categoryOfficeCabins from "@/assets/category-office-cabins.jpg";
import categoryCustomDesigns from "@/assets/category-custom-designs.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/office-partition-modern.png";
import project3 from "@/assets/project-3.jpg";
import aboutOfficePartition from "@/assets/about-office-partition.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio14 from "@/assets/portfolio-14.jpg";
import portfolio15 from "@/assets/portfolio-15.jpg";
import portfolio16 from "@/assets/portfolio-16.jpg";
import portfolio17 from "@/assets/portfolio-17.jpg";
import portfolio18 from "@/assets/portfolio-18.jpg";
import portfolio19 from "@/assets/portfolio-19.jpg";
import portfolio20 from "@/assets/portfolio-20.jpg";
import portfolio21 from "@/assets/portfolio-21.jpg";
import portfolio22 from "@/assets/portfolio-22.jpg";
import portfolio23 from "@/assets/portfolio-23.jpg";
import portfolio24 from "@/assets/portfolio-24.jpg";
import portfolio25 from "@/assets/portfolio-25.jpg";
import portfolio26 from "@/assets/portfolio-26.jpg";
import portfolio27 from "@/assets/portfolio-27.jpg";
import portfolio28 from "@/assets/portfolio-28.jpg";
import portfolio29 from "@/assets/portfolio-29.jpg";
const Portfolio = () => {
  const categories = [{
    title: "Aluminum Partition",
    description: "Modern aluminum partition systems for offices and commercial spaces",
    image: categoryAluminumPartition,
    icon: Building2
  }, {
    title: "False Ceiling",
    description: "Industrial-grade false ceiling solutions for manufacturing facilities",
    image: categoryFalseCeiling,
    icon: Factory
  }, {
    title: "Butterfly Louver",
    description: "Stylish butterfly louver systems for ventilation and aesthetics",
    image: categoryButterflyLouver,
    icon: Briefcase
  }, {
    title: "Grill Partition",
    description: "Durable grill partition designs for security and style",
    image: categoryGrillPartition,
    icon: Frame
  }, {
    title: "Office Cabins",
    description: "Professional office cabin solutions with modern finishes",
    image: categoryOfficeCabins,
    icon: Settings
  }, {
    title: "Custom Designs",
    description: "Bespoke aluminum solutions tailored to your unique requirements",
    image: categoryCustomDesigns,
    icon: Sparkles
  }];
  const galleryImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8, portfolio9, portfolio10, portfolio11, portfolio12, portfolio13, portfolio14, portfolio15, portfolio16, portfolio17, portfolio18, portfolio19, portfolio20, portfolio21, portfolio22, portfolio23, portfolio24, portfolio25, portfolio26, portfolio27, portfolio28, portfolio29];
  const handleWhatsApp = () => {
    window.open('https://wa.me/917358403185?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank');
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our Work & <span className="text-gradient-accent">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Explore our aluminum partitions and false ceiling designs for modern spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Project <span className="text-gradient-accent">Categories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions across diverse sectors and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => {
            const Icon = category.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer h-full">
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
                        <div className="bg-accent/20 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                        </div>
                        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-heading font-semibold mb-1 md:mb-2">
                          {category.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-xs md:text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          

          <ParallaxScroll images={galleryImages} />

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-center mt-12">
            
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your <span className="text-gradient-accent">Project?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Get in touch with us today and let's bring your vision to life with premium aluminum solutions
            </p>
            <Button onClick={handleWhatsApp} size="lg" className="text-lg px-8 py-6 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-strong hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:rotate-1 hover:-translate-y-1">
              Contact Us on WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Portfolio;