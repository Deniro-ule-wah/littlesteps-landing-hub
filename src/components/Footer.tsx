import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">TrackMyKid</h3>
              <p className="text-sm text-secondary-foreground/80">Littlesteps in Motion</p>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Powered by Jendie Automobiles Ltd.
            </p>
            <p className="text-xs text-secondary-foreground/60">
              Ensuring safety through transparent school transport tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@trackmykid.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} TrackMyKid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
