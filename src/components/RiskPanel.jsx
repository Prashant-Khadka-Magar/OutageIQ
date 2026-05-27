import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function getRiskBadgeClass(level) {
  if (level === "Critical") return "bg-red-600 text-white";
  if (level === "High") return "bg-orange-500 text-white";
  if (level === "Medium") return "bg-yellow-400 text-slate-900";
  return "bg-green-600 text-white";
}

export default function RiskPanel({ areas, selectedArea, onSelectArea }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950">
            Service Area Risk
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select a service area to view outage risk and recommended response.
          </p>
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-slate-700">
            Service Area
          </label>

          <Select
            value={selectedArea.id}
            onValueChange={(value) => {
              const nextArea = areas.find((area) => area.id === value);
              onSelectArea(nextArea);
            }}
          >
            <SelectTrigger className="mt-2 h-11">
              <SelectValue placeholder="Select area" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.id} value={area.id}>
                  {area.area}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Selected Area</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-950">
                {selectedArea.area}
              </h3>
              <p className="text-sm text-slate-500">{selectedArea.region}</p>
            </div>

            <Badge className={getRiskBadgeClass(selectedArea.riskLevel)}>
              {selectedArea.riskLevel}
            </Badge>
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-slate-600">Risk Score</span>
              <span className="font-bold text-slate-900">
                {selectedArea.riskScore}/100
              </span>
            </div>
            <Progress value={selectedArea.riskScore} className="mt-2" />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Customers at Risk</p>
            <p className="mt-1 text-xl font-bold text-slate-950">
              {selectedArea.customersAtRisk.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Recommended Crews</p>
            <p className="mt-1 text-xl font-bold text-slate-950">
              {selectedArea.recommendedCrews}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-slate-950">Weather Conditions</h3>

          <div className="mt-3 grid gap-2 text-sm">
            <p className="rounded-xl bg-slate-50 px-3 py-2">
              <strong>Condition:</strong> {selectedArea.weather.condition}
            </p>
            <p className="rounded-xl bg-slate-50 px-3 py-2">
              <strong>Wind:</strong> {selectedArea.weather.windSpeed}
            </p>
            <p className="rounded-xl bg-slate-50 px-3 py-2">
              <strong>Rainfall:</strong> {selectedArea.weather.rainfall}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-slate-950">Main Risk Causes</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {selectedArea.causes.map((cause) => (
              <Badge key={cause} variant="secondary">
                {cause}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
