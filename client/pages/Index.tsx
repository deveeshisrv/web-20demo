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
  Star,
  Stethoscope
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Dr. Sarah Chen</span>
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
                  Board Certified Internal Medicine
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Compassionate Care for Your 
                  <span className="text-primary"> Health</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Welcome to my practice where personalized healthcare meets cutting-edge medicine. 
                  I'm dedicated to providing comprehensive, patient-centered care in a warm and welcoming environment.
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
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    Patient Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Dr. Sarah Chen" 
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
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Dr. Chen</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dedicated to Your Wellbeing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 15 years of experience in internal medicine, I believe in building lasting 
              relationships with my patients through comprehensive, personalized care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">My Approach to Medicine</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that excellent healthcare starts with listening. Every patient has a unique story, 
                and understanding your concerns, lifestyle, and goals is essential to providing the best possible care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My practice focuses on preventive medicine, chronic disease management, and helping patients 
                achieve their optimal health through evidence-based treatments and lifestyle modifications.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Patient-Centered Care</h4>
                    <p className="text-sm text-muted-foreground">Personalized treatment plans tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Preventive Focus</h4>
                    <p className="text-sm text-muted-foreground">Emphasis on preventing illness before it starts</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Dr. Chen in consultation" 
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground mb-2">MD, Johns Hopkins University</p>
                <p className="text-sm text-muted-foreground">Residency: Internal Medicine, Mayo Clinic</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <p className="text-muted-foreground mb-2">Board Certified Internal Medicine</p>
                <p className="text-sm text-muted-foreground">American Board of Internal Medicine</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Specializations</h3>
                <p className="text-muted-foreground mb-2">Diabetes Management</p>
                <p className="text-sm text-muted-foreground">Cardiovascular Health, Preventive Care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your Appointment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take the first step towards better health? Contact us today to schedule 
              your consultation or ask any questions you may have.
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
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">appointments@drsarahchen.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">123 Medical Center Drive<br />Suite 200, Healthcare City, HC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
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
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Same-Day Appointments</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer same-day appointments for urgent concerns. Call us before 2 PM 
                      for availability on the same day.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Appointment Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Book an Appointment</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john.doe@email.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                  <Input type="date" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Reason for Visit</label>
                  <Textarea 
                    placeholder="Please describe your symptoms or reason for the appointment..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Appointment
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm your appointment time.
                </p>
              </form>
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
              <span className="text-xl font-bold text-foreground">Dr. Sarah Chen</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Providing compassionate, comprehensive healthcare for over 15 years.
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
