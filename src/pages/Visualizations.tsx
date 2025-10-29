import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Award, MapPin } from "lucide-react";

const Visualizations = () => {
  const topDistricts = [
    { rank: 1, district: "MUMBAI", score: 94.2, enterprises: 4521, growth: 12.5 },
    { rank: 2, district: "PUNE", score: 89.7, enterprises: 3847, growth: 10.3 },
    { rank: 3, district: "THANE", score: 87.3, enterprises: 3256, growth: 9.8 },
    { rank: 4, district: "NAGPUR", score: 84.1, enterprises: 2893, growth: 8.2 },
    { rank: 5, district: "NASHIK", score: 81.5, enterprises: 2647, growth: 7.6 },
    { rank: 6, district: "AURANGABAD", score: 78.9, enterprises: 2341, growth: 6.9 },
    { rank: 7, district: "KOLHAPUR", score: 76.2, enterprises: 2108, growth: 6.1 },
    { rank: 8, district: "SOLAPUR", score: 73.8, enterprises: 1923, growth: 5.4 },
    { rank: 9, district: "AHMEDNAGAR", score: 71.4, enterprises: 1765, growth: 4.8 },
    { rank: 10, district: "SATARA", score: 69.1, enterprises: 1598, growth: 4.2 },
  ];

  const featureImportance = [
    { feature: "MSME Density", importance: 0.42, color: "bg-primary" },
    { feature: "Micro Ratio", importance: 0.28, color: "bg-accent" },
    { feature: "Small Enterprises", importance: 0.19, color: "bg-secondary" },
    { feature: "Medium Enterprises", importance: 0.11, color: "bg-muted" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Visualizations</h2>
        <p className="text-muted-foreground">
          Explore data insights through interactive charts and graphs
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total MSMEs</p>
              <p className="text-2xl font-bold text-foreground">19,400</p>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +8.2% YoY
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Avg MSME Density</p>
              <p className="text-2xl font-bold text-foreground">28.4</p>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +5.7% YoY
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Avg Micro Ratio</p>
              <p className="text-2xl font-bold text-foreground">0.84</p>
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" />
                -2.1% YoY
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Districts Covered</p>
              <p className="text-2xl font-bold text-foreground">785</p>
              <p className="text-xs text-primary flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                All India
              </p>
            </div>
          </div>
        </Card>
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

      {/* Top Performing Districts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Top 10 Performing Districts</h3>
            <p className="text-sm text-muted-foreground">Based on MSME performance score</p>
          </div>
          <Award className="h-8 w-8 text-primary" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Rank</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">District</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Performance Score</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Enterprises</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Growth Rate</th>
              </tr>
            </thead>
            <tbody>
              {topDistricts.map((district) => (
                <tr key={district.rank} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      district.rank <= 3 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      {district.rank}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium text-foreground">{district.district}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${district.score}%` }}
                        />
                      </div>
                      <span className="font-semibold text-foreground">{district.score}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right text-foreground">{district.enterprises.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="text-green-600 font-medium">+{district.growth}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Feature Importance */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Model Feature Importance
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Relative importance of features in predicting MSME performance
        </p>
        <div className="space-y-4">
          {featureImportance.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{item.feature}</span>
                <span className="text-sm font-bold text-primary">{(item.importance * 100).toFixed(0)}%</span>
              </div>
              <div className="relative w-full bg-muted rounded-full h-4 overflow-hidden">
                <div 
                  className={`${item.color} h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2`}
                  style={{ width: `${item.importance * 100}%` }}
                >
                  <span className="text-xs font-medium text-white">{(item.importance * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* District Distribution by Performance */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Geographic Performance Distribution
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">High Performance</h4>
              <span className="text-2xl font-bold text-green-600">180</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Urban Districts</span>
                <span className="font-medium text-foreground">142 (79%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Semi-Urban</span>
                <span className="font-medium text-foreground">28 (16%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Rural</span>
                <span className="font-medium text-foreground">10 (5%)</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Medium Performance</h4>
              <span className="text-2xl font-bold text-yellow-600">353</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Urban Districts</span>
                <span className="font-medium text-foreground">89 (25%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Semi-Urban</span>
                <span className="font-medium text-foreground">176 (50%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Rural</span>
                <span className="font-medium text-foreground">88 (25%)</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Low Performance</h4>
              <span className="text-2xl font-bold text-red-600">252</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Urban Districts</span>
                <span className="font-medium text-foreground">18 (7%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Semi-Urban</span>
                <span className="font-medium text-foreground">71 (28%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Rural</span>
                <span className="font-medium text-foreground">163 (65%)</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

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

      {/* Industry Sector Distribution */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          MSME Distribution by Industry Sector
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg">
              <span className="text-sm font-medium text-foreground">Manufacturing</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "38%" }} />
                </div>
                <span className="text-sm font-bold text-primary min-w-[3rem] text-right">38%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-transparent rounded-lg">
              <span className="text-sm font-medium text-foreground">Services</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "28%" }} />
                </div>
                <span className="text-sm font-bold text-accent min-w-[3rem] text-right">28%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-secondary/10 to-transparent rounded-lg">
              <span className="text-sm font-medium text-foreground">Trading</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "22%" }} />
                </div>
                <span className="text-sm font-bold text-muted-foreground min-w-[3rem] text-right">22%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/20 to-transparent rounded-lg">
              <span className="text-sm font-medium text-foreground">Others</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "12%" }} />
                </div>
                <span className="text-sm font-bold text-muted-foreground min-w-[3rem] text-right">12%</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-3">Top Manufacturing Sub-sectors</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Textiles & Apparel</span>
                <span className="font-medium text-foreground">4,287 (22%)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Food Processing</span>
                <span className="font-medium text-foreground">3,156 (16%)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Furniture & Wood</span>
                <span className="font-medium text-foreground">2,541 (13%)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Metal Products</span>
                <span className="font-medium text-foreground">2,089 (11%)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Other Manufacturing</span>
                <span className="font-medium text-foreground">7,327 (38%)</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Visualizations;
