import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export const StatsCard = ({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border bg-gradient-to-br from-card via-card to-primary/5 animate-fade-in relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-2 font-medium">{title}</p>
          <h3 className="text-4xl font-bold text-foreground mb-1">{value}</h3>
          {trend && (
            <p className={`text-xs mt-2 font-semibold ${trendUp ? "text-green-600" : "text-red-600"}`}>
              {trend}
            </p>
          )}
        </div>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </Card>
  );
};
