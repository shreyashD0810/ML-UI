import { StatsCard } from "@/components/StatsCard";
import { Building2, TrendingUp, MapPin, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
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

      {/* Recent Activity */}
      <Card className="p-6">
        <h4 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h4>
        <div className="space-y-3">
          {[
            { action: "New prediction batch completed", time: "2 minutes ago", status: "success" },
            { action: "Model training updated", time: "1 hour ago", status: "info" },
            { action: "Data preprocessing completed", time: "3 hours ago", status: "success" },
            { action: "Visualization report generated", time: "5 hours ago", status: "info" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : 'bg-primary'}`} />
                <span className="text-sm text-foreground">{activity.action}</span>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
