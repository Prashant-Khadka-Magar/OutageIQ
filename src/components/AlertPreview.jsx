import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Send, Truck } from "lucide-react";

export default function AlertPreview({ selectedArea }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-slate-950">
          Alert & Crew Recommendation
        </h2>

        <Alert className="mt-5 border-orange-200 bg-orange-50">
          <Bell className="h-4 w-4" />
          <AlertTitle>Customer Alert Preview</AlertTitle>
          <AlertDescription className="leading-6">
            {selectedArea.alertMessage}
          </AlertDescription>
        </Alert>

        <div className="mt-6">
          <h3 className="flex items-center gap-2 font-semibold text-slate-950">
            <Truck className="h-4 w-4" />
            Proactive Crew Actions
          </h3>

          <ul className="mt-3 space-y-2">
            {selectedArea.recommendedActions.map((action) => (
              <li
                key={action}
                className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {action}
              </li>
            ))}
          </ul>
        </div>

        <Button className="mt-6 w-full">
          <Send className="mr-2 h-4 w-4" />
          Generate Alert Package
        </Button>

        <p className="mt-3 text-xs text-slate-500">
          Prototype note: this button represents a future system action. In a
          real version, it would send alerts and notify dispatch teams.
        </p>
      </CardContent>
    </Card>
  );
}
