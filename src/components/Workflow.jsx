import { Card, CardContent } from "@/components/ui/card";

const steps = [
  "Severe weather forecast is loaded",
  "GIS layers are analyzed",
  "Risk score is calculated",
  "High-risk areas are ranked",
  "Crews are recommended",
  "Customer alerts are prepared",
];

export default function Workflow() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-slate-950">
          Proactive Response Workflow
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          OutageIQ helps utilities move from reactive response to proactive
          storm preparation.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="mt-3 text-sm font-medium leading-5 text-slate-700">
                {step}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
