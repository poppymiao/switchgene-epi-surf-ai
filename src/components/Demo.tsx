
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Upload, Play, Download, BarChart3 } from "lucide-react";
import { GenomicVisualization } from "@/components/GenomicVisualization";

export const Demo = () => {
  const [sequence, setSequence] = useState("ATCGATCGATCGATCGATCG");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Experience SwitchGene in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Upload DNA sequences or coordinates to see real-time chromatin accessibility predictions 
            with interactive visualizations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="sequence" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sequence">Sequence Analysis</TabsTrigger>
              <TabsTrigger value="coordinates">Coordinate Query</TabsTrigger>
              <TabsTrigger value="results">Results & Visualization</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sequence">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    DNA Sequence Input
                  </CardTitle>
                  <CardDescription>
                    Enter a DNA sequence to predict chromatin accessibility patterns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      DNA Sequence (FASTA format supported)
                    </label>
                    <Input
                      placeholder="Enter DNA sequence (e.g., ATCGATCGATCG...)"
                      value={sequence}
                      onChange={(e) => setSequence(e.target.value)}
                      className="font-mono"
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isAnalyzing ? (
                        <>Analyzing...</>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Analyze Sequence
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload FASTA
                    </Button>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Sample Sequences</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-white rounded border cursor-pointer hover:bg-blue-50 transition-colors">
                        <strong>Promoter Region:</strong> TATAAGGATCCCGGGAATTC...
                      </div>
                      <div className="p-2 bg-white rounded border cursor-pointer hover:bg-blue-50 transition-colors">
                        <strong>Enhancer Sequence:</strong> CACGTGACGTCACGTGACGT...
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="coordinates">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Genomic Coordinates</CardTitle>
                  <CardDescription>
                    Query specific genomic regions by chromosome coordinates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Chromosome</label>
                      <Input placeholder="chr1" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Start Position</label>
                      <Input placeholder="1000000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">End Position</label>
                      <Input placeholder="1010000" type="number" />
                    </div>
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Play className="mr-2 h-4 w-4" />
                    Query Region
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="results">
              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Accessibility Predictions
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Interactive visualization of predicted chromatin accessibility
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <GenomicVisualization />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Accessibility Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">0.847</div>
                      <p className="text-sm text-slate-600 mt-1">High accessibility predicted</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Regulatory Elements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary">Enhancer</Badge>
                        <Badge variant="secondary">CTCF Binding</Badge>
                        <Badge variant="secondary">Open Chromatin</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Therapeutic Potential</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">High</div>
                      <p className="text-sm text-slate-600 mt-1">Suitable for vector delivery</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
