import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12 pb-28 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Dr. Ravi Sharma</h3>
            <p className="text-sm md:text-base text-foreground/70 mb-4">
              Empowering students through personalized mentorship and innovative educational frameworks.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vidyajeevan" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Vidyajeevan
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Student Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Contact Info</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>info@drravisharma.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Follow Us</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Dr. Ravi Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
