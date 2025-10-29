import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Database, FileText, Calculator, TrendingUp } from "lucide-react";

const Preprocessing = () => {
  const sampleData = [
    { state: "MAHARASHTRA", district: "CHANDRAPUR", pincode: "442502", enterprise: "ABDUL KADAR MAJEET SHEIKH" },
    { state: "MAHARASHTRA", district: "OSMANABAD", pincode: "413504", enterprise: "AAPULUCKY COLLECTION" },
    { state: "MAHARASHTRA", district: "MUMBAI SUBURBAN", pincode: "400101", enterprise: "MOMAI MATERIAL" },
    { state: "MAHARASHTRA", district: "KOLHAPUR", pincode: "416502", enterprise: "SAFALYA CLINIC" },
    { state: "MAHARASHTRA", district: "NANDURBAR", pincode: "425409", enterprise: "SHEETAL ENTERPRISES" },
  ];

  const pipelineSteps = [
    {
      stage: "Data Ingestion",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      steps: [
        "Load raw MSME data from Maharashtra",
        "Import 19,400 enterprise records",
        "Parse JSON activity fields"
      ]
    },
    {
      stage: "Data Cleaning",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      steps: [
        "Fill missing EnterpriseName values",
        "Handle ActivityText null values",
        "Replace infinite values with NA"
      ]
    },
    {
      stage: "Feature Engineering",
      icon: Calculator,
      color: "from-orange-500 to-red-500",
      steps: [
        "Calculate MSME_Density metric",
        "Compute Micro_Ratio percentage",
        "Extract small & medium counts"
      ]
    },
    {
      stage: "Normalization",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      steps: [
        "Apply StandardScaler transform",
        "Normalize feature distributions",
        "Export processed dataset"
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Data Preprocessing</h2>
        <p className="text-muted-foreground">
          View the data cleaning and feature engineering pipeline
        </p>
      </div>

      {/* Sample Data Card */}
      <Card className="p-6 animate-slide-up">
        <h3 className="text-xl font-semibold text-foreground mb-4">Sample Raw Data</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">State</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">District</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Pincode</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Enterprise Name</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">{row.state}</td>
                  <td className="py-3 px-4 text-foreground">{row.district}</td>
                  <td className="py-3 px-4 text-foreground">{row.pincode}</td>
                  <td className="py-3 px-4 text-foreground">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Showing 5 of 19,400 records
        </p>
      </Card>

      {/* Preprocessing Pipeline - Side by Side Flow */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Preprocessing Pipeline</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pipelineSteps.map((stage, i) => (
            <div key={i} className="relative animate-scale-in" style={{ animationDelay: `${i * 150}ms` }}>
              <Card className={`p-6 h-full bg-gradient-to-br ${stage.color} bg-opacity-10 border-2 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                      <stage.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-muted-foreground">STEP {i + 1}</div>
                      <h4 className="text-sm font-bold text-foreground">{stage.stage}</h4>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    {stage.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              {i < pipelineSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-slide-up">
        <h3 className="text-xl font-semibold text-foreground mb-4">Engineered Features</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-background p-5 rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">MSME_Density</h4>
                <p className="text-sm text-muted-foreground">
                  Number of MSMEs per 1000 population, indicates enterprise concentration
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background p-5 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Micro_Ratio</h4>
                <p className="text-sm text-muted-foreground">
                  Proportion of micro enterprises to total, shows business size distribution
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background p-5 rounded-xl border-2 border-orange-300/20 hover:border-orange-300/50 transition-all hover:shadow-lg">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Small Enterprises</h4>
                <p className="text-sm text-muted-foreground">
                  Count of small-scale businesses in the district
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background p-5 rounded-xl border-2 border-green-300/20 hover:border-green-300/50 transition-all hover:shadow-lg">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Medium Enterprises</h4>
                <p className="text-sm text-muted-foreground">
                  Count of medium-scale businesses in the district
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Preprocessing;
