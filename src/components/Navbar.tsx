
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/b8617696-28bc-4be7-ad4a-9eaf52a84251.png" alt="SwitchGene Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-slate-800">SwitchGene</span>
          </div>
          
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
            <Button variant="outline" className="border-[#004853] text-[#004853] hover:bg-[#004853]/10">
              Contact Sales
            </Button>
            <Button className="bg-[#004853] hover:bg-[#004853]/90">
              Schedule a Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
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
              <Button variant="outline" className="border-[#004853] text-[#004853]">
                Contact Sales
              </Button>
              <Button className="bg-[#004853] hover:bg-[#004853]/90">
                Schedule a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
