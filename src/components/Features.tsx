
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  BarChart3, 
  Globe, 
  Layers, 
  Microscope, 
  Database,
  Zap,
  Target
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Deep learning models trained on real chromatin architecture data using DNABERT and transformer architectures for genomic sequences."
    },
    {
      icon: BarChart3,
      title: "Interactive Visualizations",
      description: "Generate 2D heatmaps and 3D chromatin structure visualizations with Plotly integration for comprehensive data exploration."
    },
    {
      icon: Globe,
      title: "Web-Based Platform",
      description: "Cloud-native SaaS solution with REST API access for genome-wide querying and seamless integration with existing workflows."
    },
    {
      icon: Layers,
      title: "Multi-Omics Integration",
      description: "Combines ATAC-seq, NanoMe-seq, and Fiber-seq data to provide unprecedented insights into chromatin accessibility patterns."
    },
    {
      icon: Microscope,
      title: "Molecular-Level Accuracy",
      description: "Goes beyond traditional peak calling to provide interpretable predictions at the molecular surface level."
    },
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Handles large datasets with cloud platform integration and supports expansion to additional omics types."
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Instant accessibility scoring with SHAP-based interpretation layers for transparent AI decision-making."
    },
    {
      icon: Target,
      title: "Therapeutic Targeting",
      description: "Identify potential vector delivery sites for gene therapy and regulatory elements for drug target validation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Advanced Features for Genomic Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            SwitchGene combines cutting-edge AI with multi-omics data integration 
            to deliver unprecedented insights into chromatin accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-slate-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
