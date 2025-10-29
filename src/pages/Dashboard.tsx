import { StatsCard } from "@/components/StatsCard";
import { Building2, TrendingUp, MapPin, Activity, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const monthlyData = [
    { month: "Jan", predictions: 245, accuracy: 92 },
    { month: "Feb", predictions: 312, accuracy: 93 },
    { month: "Mar", predictions: 389, accuracy: 91 },
    { month: "Apr", predictions: 421, accuracy: 94 },
    { month: "May", predictions: 478, accuracy: 95 },
    { month: "Jun", predictions: 534, accuracy: 94 },
  ];

  const performanceBreakdown = [
    { category: "High", count: 180, color: "from-green-500 to-emerald-600", percentage: 23 },
    { category: "Medium", count: 353, color: "from-yellow-500 to-orange-500", percentage: 45 },
    { category: "Low", count: 252, color: "from-red-500 to-rose-600", percentage: 32 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          MSME performance prediction across Indian districts
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Enterprises"
          value="19,400"
          icon={Building2}
          trend="+12.5% from last month"
          trendUp={true}
        />
        <StatsCard
          title="Districts Analyzed"
          value="785"
          icon={MapPin}
          trend="+5.2% coverage"
          trendUp={true}
        />
        <StatsCard
          title="Model Accuracy"
          value="94.2%"
          icon={Activity}
          trend="SVM Classifier"
          trendUp={true}
        />
        <StatsCard
          title="Predictions Made"
          value="2,847"
          icon={TrendingUp}
          trend="+18.3% this week"
          trendUp={true}
        />
      </div>

      {/* Hero Card */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 via-card to-accent/5 border-primary/20">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Machine Learning Powered MSME Analytics
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our SVM-based model analyzes MSME performance across Maharashtra districts, 
            classifying enterprise performance into Low, Medium, and High categories. 
            Using features like MSME density, micro ratio, and enterprise size distribution, 
            we provide actionable insights for business development and policy planning.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-background px-4 py-2 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground">Primary State</p>
              <p className="font-semibold text-foreground">Maharashtra</p>
            </div>
            <div className="bg-background px-4 py-2 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground">Model Type</p>
              <p className="font-semibold text-foreground">SVM Classifier</p>
            </div>
            <div className="bg-background px-4 py-2 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground">Features Used</p>
              <p className="font-semibold text-foreground">4 Key Metrics</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Monthly Performance Chart */}
      <Card className="p-6 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-1">Monthly Predictions & Accuracy</h4>
            <p className="text-sm text-muted-foreground">Last 6 months performance tracking</p>
          </div>
          <Zap className="h-8 w-8 text-primary animate-pulse-glow" />
        </div>
        <div className="space-y-4">
          {monthlyData.map((data, i) => (
            <div key={i} className="space-y-2 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{data.month}</span>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">{data.predictions} predictions</span>
                  <span className="text-primary font-semibold">{data.accuracy}% accuracy</span>
                </div>
              </div>
              <div className="relative h-10 rounded-lg overflow-hidden bg-muted">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent flex items-center px-3 transition-all duration-1000 ease-out"
                  style={{ width: `${(data.predictions / 534) * 100}%` }}
                >
                  <span className="text-xs font-bold text-white">{data.predictions}</span>
                </div>
                <div 
                  className="absolute right-0 top-0 bottom-0 w-1 bg-green-500"
                  style={{ right: `${100 - data.accuracy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance Distribution Radial */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card via-card to-primary/5 animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">District Performance</h4>
          </div>
          <div className="space-y-4">
            {performanceBreakdown.map((item, i) => (
              <div key={i} className="space-y-2" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.category} Performance</span>
                  <span className="text-lg font-bold text-foreground">{item.count}</span>
                </div>
                <div className="relative h-12 rounded-lg overflow-hidden bg-muted/50">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} flex items-center justify-between px-4 transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    <span className="text-sm font-bold text-white">{item.count} districts</span>
                    <span className="text-sm font-bold text-white">{item.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
          <h4 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h4>
          <div className="space-y-3">
            {[
              { action: "New prediction batch completed", time: "2 minutes ago", status: "success", icon: "✓" },
              { action: "Model training updated", time: "1 hour ago", status: "info", icon: "↻" },
              { action: "Data preprocessing completed", time: "3 hours ago", status: "success", icon: "✓" },
              { action: "Visualization report generated", time: "5 hours ago", status: "info", icon: "📊" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    activity.status === 'success' 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' 
                      : 'bg-gradient-to-br from-primary to-accent text-white'
                  } group-hover:scale-110 transition-transform`}>
                    {activity.icon}
                  </div>
                  <span className="text-sm text-foreground font-medium">{activity.action}</span>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
