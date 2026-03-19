import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-papaya-dark py-12">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-extrabold mb-3">
              <span className="text-papaya-orange">Papaya</span>{" "}
              <span className="text-papaya-peach">International</span>
            </h3>
            <p className="text-papaya-peach/60 text-sm max-w-sm">
              Empowering young people across Europe through international cooperation, non-formal education, and Erasmus+ projects.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-papaya-peach mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-papaya-peach/60">
              <li><Link to="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">What We Do</Link></li>
              <li><Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-papaya-peach mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-papaya-peach/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-papaya-peach/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-papaya-peach/40">
          <p>© {new Date().getFullYear()} Papaya International. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> for Europe's youth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
