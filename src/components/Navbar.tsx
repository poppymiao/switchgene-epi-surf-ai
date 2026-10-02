
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href={import.meta.env.BASE_URL} className="flex items-center space-x-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SwitchGene Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-slate-800">SwitchGene</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-[#004853] transition-colors">
              Features
            </a>
            <a href="#demo" className="text-slate-600 hover:text-[#004853] transition-colors">
              Demo
            </a>
            <a href="#applications" className="text-slate-600 hover:text-[#004853] transition-colors">
              Applications
            </a>
            <Button asChild className="bg-[#004853] hover:bg-[#004853]/90">
              <a href="#demo">Schedule a Demo</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-slate-600 hover:text-[#004853]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-slate-600 hover:text-[#004853]">
              Features
            </a>
            <a href="#demo" className="block text-slate-600 hover:text-[#004853]">
              Demo
            </a>
            <a href="#applications" className="block text-slate-600 hover:text-[#004853]">
              Applications
            </a>
            <div className="flex space-x-4 pt-4">
              <Button asChild className="bg-[#004853] hover:bg-[#004853]/90">
                <a href="#demo">Schedule a Demo</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
