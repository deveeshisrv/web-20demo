import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Award, 
  Heart, 
  Users,
  Calendar,
  Stethoscope
} from "lucide-react";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Handle smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          const navHeight = 80; // Height of fixed navigation
          const targetPosition = targetElement.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener to all navigation links
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Dr. Chhavi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Contact</a>
            <Button className="transition-all duration-300 hover:scale-105 hover:shadow-lg">Book Appointment</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Ayurveda
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Root Cause
                  <span className="text-primary">Healing</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Dr. Chhavi specializes in comprehensive Ayurvedic medicine focused on identifying and treating the underlying causes of illness.
                  Through systematic constitutional analysis and time-tested therapeutic protocols, we address the source of health imbalances for lasting healing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">10+</div>
                  <div className="text-sm text-muted-foreground">Years Clinical Practice</div>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">100%</div>
                  <div className="text-sm text-muted-foreground">Root Cause Focus</div>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Treatments</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Dr. Chhavi - Ayurvedic Practitioner" 
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Trusted Care</div>
                      <div className="text-sm text-muted-foreground">Patient-first approach</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-accent/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Clinical Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Evidence-Based Ayurvedic Medicine
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 10 years of clinical practice in Ayurvedic medicine, Dr. Chhavi employs systematic diagnostic methodologies
              to identify fundamental imbalances and implement targeted therapeutic interventions for optimal patient outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Root Cause Treatment Methodology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our clinical approach begins with comprehensive constitutional assessment (Prakriti analysis) and systematic evaluation
                of current pathological imbalances (Vikriti). Through detailed pulse diagnosis, dietary analysis, and lifestyle assessment,
                we identify the underlying causes of disease manifestation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Treatment protocols are individually formulated using evidence-based herbal therapeutics, targeted nutritional interventions,
                panchakarma detoxification procedures, and lifestyle modifications designed to address causative factors and restore physiological equilibrium.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Diagnostic Analysis</h4>
                    <p className="text-sm text-muted-foreground">Advanced Tridosha assessment and pathological imbalance identification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Etiopathological Treatment</h4>
                    <p className="text-sm text-muted-foreground">Systematic elimination of disease causation through targeted therapeutics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Dr. Chhavi in Ayurvedic consultation" 
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
              <CardContent className="pt-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <GraduationCap className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground mb-2">BAMS, Ayurvedic Medicine & Surgery</p>
                <p className="text-sm text-muted-foreground">Advanced studies in Panchakarma & Herbology</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
              <CardContent className="pt-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Award className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <p className="text-muted-foreground mb-2">Certified Ayurvedic Practitioner</p>
                <p className="text-sm text-muted-foreground">Pulse Diagnosis & Constitutional Analysis</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
              <CardContent className="pt-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Stethoscope className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Specializations</h3>
                <p className="text-muted-foreground mb-2">Digestive Health & Detox</p>
                <p className="text-sm text-muted-foreground">Women's Health, Stress Management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Begin Your Healing Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your Ayurvedic Consultation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discover natural healing through Ayurveda? Call me today to begin your personalized
              journey toward balance, wellness, and vibrant health.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Me Directly</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Personal Email</p>
                      <p className="text-muted-foreground">dr.chhavi.ayurveda@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Where I Practice</p>
                      <p className="text-muted-foreground">
                        <a
                          href="https://maps.google.com/?q=123+Medical+Center+Drive,+Healthcare+City,+HC+12345"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors underline"
                        >
                          📍 View on Map
                        </a>
                        <br />
                        Virtual consultations welcomed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">When I'm Available</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergencies</span>
                    <span className="text-muted-foreground">Call anytime</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Call to Book */}
            <Card className="p-8 transition-all duration-300 hover:shadow-2xl bg-primary/5 border-primary/20">
              <div className="text-center space-y-6">
                <div className="p-6 bg-primary/10 rounded-full w-fit mx-auto">
                  <Phone className="h-12 w-12 text-primary" />
                </div>

                <h3 className="text-3xl font-bold text-foreground">Begin Your Ayurvedic Journey</h3>

                <p className="text-lg text-muted-foreground">
                  Ready to explore natural healing? Call me directly and let's discuss how Ayurveda can restore balance and vitality to your life.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="block w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full text-2xl py-8 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                    >
                      <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                      (555) 123-4567
                    </Button>
                  </a>

                  <p className="text-sm text-muted-foreground">
                    You'll be speaking directly with me - let's find a time that works for both of us
                  </p>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Best times to reach me:</strong> Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Stethoscope className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Dr. Chhavi</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Bringing ancient Ayurvedic wisdom to modern healing - one person at a time.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>© 2024 Dr. Sarah Chen Practice</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
