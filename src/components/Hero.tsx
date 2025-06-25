import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Target, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#004853]/5 to-[#004853]/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#004853]/10 rounded-full text-[#004853] text-sm font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Chromatin Analysis
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Predict & Visualize
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#004853] to-[#004853]/80">
              Chromatin Accessibility
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The first lightweight AI tool that integrates ATAC-seq, NanoMe-seq, and Fiber-seq data 
            to predict molecular-level chromatin accessibility and accelerate drug discovery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#004853] hover:bg-[#004853]/90 text-lg px-8">
              Try Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/60 rounded-lg backdrop-blur-sm">
              <Target className="h-8 w-8 text-[#004853] mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Precise Predictions</h3>
              <p className="text-slate-600 text-sm">
                AI-driven accessibility scoring with molecular-level accuracy
              </p>
            </div>
            <div className="p-6 bg-white/60 rounded-lg backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-[#004853] mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Multi-Omics Integration</h3>
              <p className="text-slate-600 text-sm">
                Combines ATAC-seq, NanoMe-seq, and Fiber-seq data seamlessly
              </p>
            </div>
            <div className="p-6 bg-white/60 rounded-lg backdrop-blur-sm">
              <Zap className="h-8 w-8 text-[#004853] mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Instant Insights</h3>
              <p className="text-slate-600 text-sm">
                Upload coordinates and get immediate therapeutic insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
