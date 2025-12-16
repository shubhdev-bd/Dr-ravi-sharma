import { useLocation, Link } from "react-router-dom";
import { Home, BookOpen, Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MobileNav() {
  const location = useLocation();
  const pathname = location.pathname;
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/vidyajeevan", label: "Vidyajeevan", icon: BookOpen },
    { href: "/reviews", label: "Testimonials", icon: Star },
    { href: "/about", label: "About", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-sm">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-primary/95 backdrop-blur-lg rounded-full shadow-2xl border border-primary/20 px-1.5 py-2"
      >
        <div className="flex items-center justify-around gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const isExpanded = activeItem === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setActiveItem(isExpanded ? null : item.href)}
                className="relative"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    width: isExpanded ? "auto" : "40px",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      width: isExpanded ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
