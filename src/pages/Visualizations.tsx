import { Card } from "@/components/ui/card";

const Visualizations = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Visualizations</h2>
        <p className="text-muted-foreground">
          Explore data insights through interactive charts and graphs
        </p>
      </div>

      {/* Word Cloud */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Enterprise Activity Word Cloud</h3>
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-12 flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <p className="text-6xl font-bold text-primary opacity-80">Manufacturing</p>
            <div className="flex gap-6 justify-center flex-wrap">
              <p className="text-4xl font-semibold text-muted-foreground">Trading</p>
              <p className="text-5xl font-bold text-accent">Services</p>
              <p className="text-3xl font-medium text-muted-foreground opacity-70">Retail</p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <p className="text-2xl text-muted-foreground opacity-60">Textile</p>
              <p className="text-3xl font-medium text-primary opacity-60">Food</p>
              <p className="text-2xl text-muted-foreground opacity-50">Construction</p>
              <p className="text-4xl font-semibold text-accent opacity-70">Healthcare</p>
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <p className="text-xl text-muted-foreground opacity-40">Agriculture</p>
              <p className="text-2xl text-primary opacity-50">Electronics</p>
              <p className="text-xl text-muted-foreground opacity-40">Transport</p>
              <p className="text-2xl text-accent opacity-50">Education</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Most common business activities across Maharashtra MSMEs
        </p>
      </Card>

      {/* Distribution Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Performance Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Performance Distribution
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Low Performance</span>
                <span className="text-sm font-medium text-foreground">32%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: "32%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Medium Performance</span>
                <span className="text-sm font-medium text-foreground">45%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "45%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">High Performance</span>
                <span className="text-sm font-medium text-foreground">23%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: "23%" }} />
              </div>
            </div>
          </div>
        </Card>

        {/* Enterprise Size Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Enterprise Size Distribution
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Micro</span>
                <span className="text-sm font-medium text-foreground">78%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: "78%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Small</span>
                <span className="text-sm font-medium text-foreground">18%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-accent h-3 rounded-full" style={{ width: "18%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Medium</span>
                <span className="text-sm font-medium text-foreground">4%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-secondary h-3 rounded-full" style={{ width: "4%" }} />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Heatmap */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Feature Correlation Heatmap
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2 text-muted-foreground font-medium">Feature</th>
                <th className="text-center p-2 text-muted-foreground font-medium">MSME Density</th>
                <th className="text-center p-2 text-muted-foreground font-medium">Micro Ratio</th>
                <th className="text-center p-2 text-muted-foreground font-medium">Small</th>
                <th className="text-center p-2 text-muted-foreground font-medium">Medium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-medium text-foreground">MSME Density</td>
                <td className="text-center p-2 bg-primary/80 text-white rounded">1.00</td>
                <td className="text-center p-2 bg-primary/30 text-foreground rounded">0.32</td>
                <td className="text-center p-2 bg-primary/60 text-white rounded">0.78</td>
                <td className="text-center p-2 bg-primary/40 text-foreground rounded">0.45</td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-foreground">Micro Ratio</td>
                <td className="text-center p-2 bg-primary/30 text-foreground rounded">0.32</td>
                <td className="text-center p-2 bg-primary/80 text-white rounded">1.00</td>
                <td className="text-center p-2 bg-primary/20 text-foreground rounded">0.15</td>
                <td className="text-center p-2 bg-red-500/30 text-foreground rounded">-0.28</td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-foreground">Small</td>
                <td className="text-center p-2 bg-primary/60 text-white rounded">0.78</td>
                <td className="text-center p-2 bg-primary/20 text-foreground rounded">0.15</td>
                <td className="text-center p-2 bg-primary/80 text-white rounded">1.00</td>
                <td className="text-center p-2 bg-primary/50 text-white rounded">0.62</td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-foreground">Medium</td>
                <td className="text-center p-2 bg-primary/40 text-foreground rounded">0.45</td>
                <td className="text-center p-2 bg-red-500/30 text-foreground rounded">-0.28</td>
                <td className="text-center p-2 bg-primary/50 text-white rounded">0.62</td>
                <td className="text-center p-2 bg-primary/80 text-white rounded">1.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Pearson correlation coefficients between model features
        </p>
      </Card>
    </div>
  );
};

export default Visualizations;
