import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, Play, TrendingUp, Award, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Prediction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast({
        title: "File uploaded",
        description: `${e.target.files[0].name} ready for prediction`,
      });
    }
  };

  const handlePredict = () => {
    // Simulate predictions
    const mockPredictions = [
      { district: "MUMBAI", msme_density: 45.2, micro_ratio: 0.82, prediction: "High", confidence: 0.94 },
      { district: "PUNE", msme_density: 38.7, micro_ratio: 0.79, prediction: "High", confidence: 0.89 },
      { district: "NASHIK", msme_density: 28.3, micro_ratio: 0.85, prediction: "Medium", confidence: 0.87 },
      { district: "NAGPUR", msme_density: 32.1, micro_ratio: 0.81, prediction: "Medium", confidence: 0.91 },
      { district: "THANE", msme_density: 41.5, micro_ratio: 0.78, prediction: "High", confidence: 0.93 },
      { district: "SOLAPUR", msme_density: 22.8, micro_ratio: 0.88, prediction: "Medium", confidence: 0.85 },
      { district: "KOLHAPUR", msme_density: 25.6, micro_ratio: 0.84, prediction: "Medium", confidence: 0.88 },
      { district: "AURANGABAD", msme_density: 29.4, micro_ratio: 0.83, prediction: "Medium", confidence: 0.86 },
      { district: "JALGAON", msme_density: 18.9, micro_ratio: 0.91, prediction: "Low", confidence: 0.82 },
      { district: "RATNAGIRI", msme_density: 15.3, micro_ratio: 0.93, prediction: "Low", confidence: 0.79 },
    ];
    
    setPredictions(mockPredictions);
    toast({
      title: "Predictions generated",
      description: `Successfully predicted performance for ${mockPredictions.length} districts`,
    });
  };

  const handleDownload = () => {
    const csv = [
      "District,MSME_Density,Micro_Ratio,Prediction,Confidence",
      ...predictions.map(p => `${p.district},${p.msme_density},${p.micro_ratio},${p.prediction},${p.confidence}`)
    ].join("\n");
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "msme_predictions.csv";
    a.click();
    
    toast({
      title: "Download started",
      description: "Predictions exported as CSV",
    });
  };

  const performanceStats = {
    high: predictions.filter(p => p.prediction === "High").length,
    medium: predictions.filter(p => p.prediction === "Medium").length,
    low: predictions.filter(p => p.prediction === "Low").length,
  };

  const topPerformers = predictions
    .filter(p => p.prediction === "High")
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 5);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Model Prediction</h2>
        <p className="text-muted-foreground">
          Upload test data and generate MSME performance predictions
        </p>
      </div>

      {/* Upload Card */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Upload Test Data</h3>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-foreground font-medium mb-1">
                {file ? file.name : "Click to upload test data"}
              </p>
              <p className="text-xs text-muted-foreground">
                CSV file with MSME_Density, Micro_Ratio, small, medium columns
              </p>
            </label>
          </div>
          
          <Button 
            onClick={handlePredict} 
            disabled={!file && predictions.length === 0}
            className="w-full"
          >
            <Play className="h-4 w-4 mr-2" />
            Generate Predictions
          </Button>
        </div>
      </Card>

      {/* Results */}
      {predictions.length > 0 && (
        <>
          {/* Stats with Flashy Charts */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white overflow-hidden relative animate-scale-in hover:scale-105 transition-all">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-white/80 font-medium">High Performance</p>
                  <TrendingUp className="h-5 w-5 animate-pulse" />
                </div>
                <p className="text-4xl font-bold mb-2">{performanceStats.high}</p>
                <p className="text-xs text-white/80">
                  {((performanceStats.high / predictions.length) * 100).toFixed(1)}% of total districts
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-white overflow-hidden relative animate-scale-in hover:scale-105 transition-all" style={{ animationDelay: "100ms" }}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-white/80 font-medium">Medium Performance</p>
                  <Zap className="h-5 w-5 animate-pulse" />
                </div>
                <p className="text-4xl font-bold mb-2">{performanceStats.medium}</p>
                <p className="text-xs text-white/80">
                  {((performanceStats.medium / predictions.length) * 100).toFixed(1)}% of total districts
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-red-500 to-rose-600 text-white overflow-hidden relative animate-scale-in hover:scale-105 transition-all" style={{ animationDelay: "200ms" }}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-white/80 font-medium">Low Performance</p>
                  <Award className="h-5 w-5 animate-pulse" />
                </div>
                <p className="text-4xl font-bold mb-2">{performanceStats.low}</p>
                <p className="text-xs text-white/80">
                  {((performanceStats.low / predictions.length) * 100).toFixed(1)}% of total districts
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </Card>
          </div>

          {/* Top Performers */}
          {topPerformers.length > 0 && (
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20 animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Top Performing Districts</h3>
                  <p className="text-sm text-muted-foreground">Highest confidence predictions</p>
                </div>
              </div>
              <div className="space-y-3">
                {topPerformers.map((district, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
                      #{i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{district.district}</h4>
                      <p className="text-xs text-muted-foreground">
                        Density: {district.msme_density} | Ratio: {district.micro_ratio}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600 mb-1">{district.prediction}</div>
                      <div className="text-xs text-muted-foreground">{(district.confidence * 100).toFixed(1)}% confidence</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Predictions Table */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">Prediction Results</h3>
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download CSV
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">District</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">MSME Density</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Micro Ratio</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Prediction</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {predictions.map((pred, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{pred.district}</td>
                      <td className="py-3 px-4 text-right text-foreground">{pred.msme_density}</td>
                      <td className="py-3 px-4 text-right text-foreground">{pred.micro_ratio}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          pred.prediction === "High" ? "bg-green-500/20 text-green-700" :
                          pred.prediction === "Medium" ? "bg-yellow-500/20 text-yellow-700" :
                          "bg-red-500/20 text-red-700"
                        }`}>
                          {pred.prediction}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right text-foreground">{(pred.confidence * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default Prediction;
