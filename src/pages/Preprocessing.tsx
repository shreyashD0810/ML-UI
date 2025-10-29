import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Preprocessing = () => {
  const sampleData = [
    { state: "MAHARASHTRA", district: "CHANDRAPUR", pincode: "442502", enterprise: "ABDUL KADAR MAJEET SHEIKH" },
    { state: "MAHARASHTRA", district: "OSMANABAD", pincode: "413504", enterprise: "AAPULUCKY COLLECTION" },
    { state: "MAHARASHTRA", district: "MUMBAI SUBURBAN", pincode: "400101", enterprise: "MOMAI MATERIAL" },
    { state: "MAHARASHTRA", district: "KOLHAPUR", pincode: "416502", enterprise: "SAFALYA CLINIC" },
    { state: "MAHARASHTRA", district: "NANDURBAR", pincode: "425409", enterprise: "SHEETAL ENTERPRISES" },
  ];

  const preprocessingSteps = [
    "Load raw MSME data from Maharashtra (19,400 records)",
    "Parse Activities JSON field to extract descriptions",
    "Fill missing values in EnterpriseName and ActivityText",
    "Calculate MSME_Density = total enterprises / 1000",
    "Calculate Micro_Ratio = micro enterprises / total enterprises",
    "Handle infinite values by replacing with NA",
    "Create feature set: MSME_Density, Micro_Ratio, small, medium",
    "Apply StandardScaler for feature normalization",
    "Export processed data for model training",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Data Preprocessing</h2>
        <p className="text-muted-foreground">
          View the data cleaning and feature engineering pipeline
        </p>
      </div>

      {/* Sample Data Card */}
      <Card className="p-6">
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

      {/* Preprocessing Steps */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Preprocessing Pipeline</h3>
        <div className="space-y-3">
          {preprocessingSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Step {i + 1}</p>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Features Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-4">Engineered Features</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">MSME_Density</h4>
            <p className="text-sm text-muted-foreground">
              Number of MSMEs per 1000 population, indicates enterprise concentration
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Micro_Ratio</h4>
            <p className="text-sm text-muted-foreground">
              Proportion of micro enterprises to total, shows business size distribution
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Small Enterprises</h4>
            <p className="text-sm text-muted-foreground">
              Count of small-scale businesses in the district
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Medium Enterprises</h4>
            <p className="text-sm text-muted-foreground">
              Count of medium-scale businesses in the district
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Preprocessing;
