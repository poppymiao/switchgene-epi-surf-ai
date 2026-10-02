import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  FlaskConical, 
  Microscope, 
  Pill,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const Applications = () => {
  const applications = [
    {
      icon: FlaskConical,
      title: "Research Labs",
      subtitle: "SaaS for Academic & Biotech Research",
      description: "Subscription-based platform for labs conducting chromatin analysis and epigenomics research.",
      features: [
        "Multi-user collaboration tools",
        "Data sharing and version control",
        "Integration with existing pipelines",
        "Custom model training"
      ],
      badge: "Most Popular",
      ctaText: "Start Free Trial"
    },
    {
      icon: Building2,
      title: "Pharmaceutical Companies",
      subtitle: "Drug Discovery & Target Validation",
      description: "Enterprise solutions for drug target identification through regulatory region prediction.",
      features: [
        "Target identification workflows",
        "Regulatory element mapping",
        "Therapeutic site prediction",
        "API access & cloud deployment"
      ],
      badge: "Enterprise",
      ctaText: "Schedule Demo"
    },
    {
      icon: Pill,
      title: "Gene Therapy",
      subtitle: "Vector Delivery Optimization",
      description: "Identify optimal harbor sites and delivery vectors for gene therapy applications.",
      features: [
        "Vector delivery site prediction",
        "Accessibility scoring",
        "Safety assessment tools",
        "Regulatory compliance support"
      ],
      badge: "Specialized",
      ctaText: "Learn More"
    }
  ];

  const metrics = [
    { icon: Users, value: "500+", label: "Research Teams" },
    { icon: FlaskConical, value: "10M+", label: "Sequences Analyzed" },
    { icon: TrendingUp, value: "95%", label: "Prediction Accuracy" },
    { icon: Microscope, value: "50+", label: "Publications" }
  ];

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Transforming Genomic Research & Drug Discovery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From academic research to pharmaceutical development, SwitchGene accelerates 
            scientific discovery across multiple domains.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-[#004853]/5 to-[#004853]/10 rounded-lg">
              <metric.icon className="h-8 w-8 text-[#004853] mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-800 mb-1">{metric.value}</div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => (
            <Card key={index} className="relative border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {app.badge && (
                <Badge className="absolute -top-3 left-6 bg-[#004853] text-white">
                  {app.badge}
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="mb-4">
                  <app.icon className="h-10 w-10 text-[#004853]" />
                </div>
                <CardTitle className="text-xl text-slate-800">{app.title}</CardTitle>
                <CardDescription className="text-[#004853] font-medium">
                  {app.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  {app.description}
                </p>
                
                <div className="space-y-3">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-[#004853] hover:bg-[#004853]/90 group">
                  {app.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-[#004853] to-[#004853]/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Accelerate Your Research?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join leading research institutions and biotech companies using SwitchGene 
            to unlock new therapeutic possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#004853] hover:bg-gray-50">
              <a href="mailto:contact@switchgene.ai?subject=Demo%20request">Schedule a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="mailto:contact@switchgene.ai?subject=Sales%20enquiry">Contact Sales</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
