import { Card, CardContent } from "@/components/ui/card";
import { Activity, AlertTriangle, Truck, Users } from "lucide-react";

export default function SummaryCards({ areas }) {
  const criticalZones = areas.filter(
    (area) => area.riskLevel === "Critical",
  ).length;

  const highRiskZones = areas.filter((area) => area.riskLevel === "High").length;

  const customersAtRisk = areas.reduce(
    (total, area) => total + area.customersAtRisk,
    0,
  );

  const recommendedCrews = areas.reduce(
    (total, area) => total + area.recommendedCrews,
    0,
  );

  const cards = [
    {
      label: "Critical Zones",
      value: criticalZones,
      icon: AlertTriangle,
    },
    {
      label: "High Risk Zones",
      value: highRiskZones,
      icon: Activity,
    },
    {
      label: "Customers at Risk",
      value: customersAtRisk.toLocaleString(),
      icon: Users,
    },
    {
      label: "Crews Recommended",
      value: recommendedCrews,
      icon: Truck,
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.label} className="rounded-2xl shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  {card.label}
                </p>
                <Icon className="h-5 w-5 text-slate-500" />
              </div>

              <p className="mt-3 text-3xl font-bold text-slate-950">
                {card.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
