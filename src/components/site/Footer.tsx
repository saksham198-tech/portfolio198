import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-1.5">
          © {currentYear} Charak Srivastava. Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
