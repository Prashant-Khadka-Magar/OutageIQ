import { Card, CardContent } from "@/components/ui/card";

export default function ArcGISExperience() {
  return (
    <Card className="overflow-hidden rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-0">
        <iframe
          title="OutageIQ ArcGIS Experience"
          src="https://experience.arcgis.com/experience/7908f5115bf64de3902468862363ca2b/"
          className="h-[560px] w-full"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
}
