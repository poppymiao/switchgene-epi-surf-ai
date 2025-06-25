import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/b8617696-28bc-4be7-ad4a-9eaf52a84251.png" alt="SwitchGene Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">SwitchGene</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              AI-powered chromatin accessibility prediction platform for genomic research 
              and drug discovery. Accelerating therapeutic development through advanced 
              multi-omics integration.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Legal */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span>contact@switchgene.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span>+44 7653219988</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span>Cambridge, UK</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-slate-400 text-sm">
                <p>&copy; 2025 SwitchGene. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
