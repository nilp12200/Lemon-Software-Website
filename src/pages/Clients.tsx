import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Building, MapPin, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Clients = () => {
  const testimonials = [
    {
      company: "Crystal Ceramic Industries Ltd",
      logo: "CC",
      location: "Morbi, Gujarat",
      rating: 5,
      testimonial: "Lemon Software's ERP solution completely transformed our production planning and inventory management. We've seen 30% improvement in efficiency since implementation.",
      contact: "Rajesh Patel",
      designation: "Production Manager",
      modules: ["Inventory", "Production", "Quality Control", "Sales"]
    },
    {
      company: "AMAZOONE CERAMICS LIMITED",
      logo: "AC",
      location: "Morbi, Gujarat",
      rating: 5,
      testimonial: "The custom ERP modules perfectly fit our business needs. The support team is excellent and always available when needed. Highly recommended!",
      contact: "Priya Shah",
      designation: "Operations Head",
      modules: ["Complete ERP Suite", "Financial Management", "HR"]
    },
    {
      company: "BLUEZONE VITRIFIED PVT LTD",
      logo: "BV",
      location: "Morbi, Gujarat",
      rating: 5,
      testimonial: "Fast deployment and minimal business disruption. The system was up and running within 2 weeks. ROI was visible within 3 months.",
      contact: "Amit Kumar",
      designation: "CEO",
      modules: ["Sales", "Purchase", "Inventory", "Analytics"]
    }
  ];

  const clientStats = [
    { number: "10+", label: "Happy Clients", description: "Satisfied customers across Gujarat" },
    { number: "100%", label: "Success Rate", description: "Every project delivered successfully" },
    { number: "2 weeks", label: "Avg Deployment", description: "Quick implementation" },
    { number: "30%", label: "Efficiency Gain", description: "Average improvement reported" }
  ];

  const clientLogos = [
    { name: "Adicon Ceramica Tiles Private Limited", logo: "/lovable-uploads/051503af-cba1-45fd-bd86-ed0bf15f35e8.png", size: "h-12" },
    { name: "Crystal Ceramic Industries Ltd", logo: "/lovable-uploads/48755310-2355-46f6-b14d-ef8b704884d0.png", size: "h-16" },
    { name: "AMAZOONE CERAMICS LIMITED", logo: "/lovable-uploads/6b9a2d3b-c375-443d-890b-e8bbad34c31a.png", size: "h-14" },
    { name: "ARA TILES PRIVATE LIMITED", logo: "/lovable-uploads/051503af-cba1-45fd-bd86-ed0bf15f35e8.png", size: "h-12" },
    { name: "ORINDA INDUSTRIES LLP", logo: "/lovable-uploads/48755310-2355-46f6-b14d-ef8b704884d0.png", size: "h-16" },
    { name: "BLUEZONE VITRIFIED PVT LTD", logo: "/lovable-uploads/6b9a2d3b-c375-443d-890b-e8bbad34c31a.png", size: "h-14" },
    { name: "future ceramic pvt ltd", logo: "/lovable-uploads/051503af-cba1-45fd-bd86-ed0bf15f35e8.png", size: "h-12" },
    { name: "agl sanitaryware pvt ltd", logo: "/lovable-uploads/48755310-2355-46f6-b14d-ef8b704884d0.png", size: "h-16" },
    { name: "SEGA GRANITO LLP", logo: "/lovable-uploads/6b9a2d3b-c375-443d-890b-e8bbad34c31a.png", size: "h-14" },
    { name: "REY CERA EXIM", logo: "/lovable-uploads/051503af-cba1-45fd-bd86-ed0bf15f35e8.png", size: "h-12" }
  ];

  const benefits = [
    "Reduced manual errors by 90%",
    "Improved inventory accuracy to 99%",
    "Faster order processing by 50%",
    "Real-time production visibility",
    "Better cost control and profitability",
    "Enhanced customer satisfaction"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client <span className="text-yellow-300">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Trusted by leading tile and ceramic manufacturers in Morbi and across Gujarat
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>10+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-yellow-300" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What Our Clients Say */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from tile manufacturers who have transformed their operations with our ERP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  {/* Company Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{testimonial.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.company}</h3>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-primary mb-2" />
                    <p className="text-muted-foreground italic">{testimonial.testimonial}</p>
                  </div>

                  {/* Contact */}
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="font-semibold text-sm">{testimonial.contact}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                  </div>

                  {/* Modules Used */}
                  <div>
                    <p className="text-sm font-medium mb-2">Modules Implemented:</p>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.modules.map((module, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Major tile and ceramic manufacturers across Gujarat trust our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-lg shadow-soft p-4 group-hover:shadow-medium transition-shadow duration-300 mb-3">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className={`${client.size} w-auto mx-auto object-contain`}
                  />
                </div>
                <p className="text-xs text-muted-foreground font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Achieved */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Benefits Our Clients Achieved
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Measurable improvements that our ERP solutions have delivered to tile manufacturers
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-soft animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your tile manufacturing business like Crystal Tiles and other industry leaders?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/erp-modules">View ERP Modules</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;