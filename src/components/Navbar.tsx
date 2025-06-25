
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dna } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Dna className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">SwitchGene</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-slate-600 hover:text-blue-600 transition-colors">
              Demo
            </a>
            <a href="#applications" className="text-slate-600 hover:text-blue-600 transition-colors">
              Applications
            </a>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Sales
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Schedule a Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-slate-600 hover:text-blue-600">
              Features
            </a>
            <a href="#demo" className="block text-slate-600 hover:text-blue-600">
              Demo
            </a>
            <a href="#applications" className="block text-slate-600 hover:text-blue-600">
              Applications
            </a>
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" className="border-blue-600 text-blue-600">
                Contact Sales
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Schedule a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
