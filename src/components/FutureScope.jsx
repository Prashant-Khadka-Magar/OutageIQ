import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { futureRoadmap } from "@/data/riskAreas";

export default function FutureScope() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Future Improvements
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              These are the next steps if OutageIQ becomes a production utility
              platform.
            </p>
          </div>

          <Badge variant="outline">Roadmap</Badge>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {futureRoadmap.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
