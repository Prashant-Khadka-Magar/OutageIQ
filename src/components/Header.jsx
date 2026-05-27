import { Badge } from "@/components/ui/badge";
import logo from "@/assets/IMG.webp";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="OutageIQ Logo"
            className="h-14 w-14 rounded-2xl object-cover"
          />

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                OutageIQ
              </h1>
              <Badge className="bg-slate-900 text-white">Prototype</Badge>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              A GIS-based storm outage prediction dashboard that helps utilities
              identify high-risk outage areas, prepare repair crews, and send
              proactive customer alerts before severe weather hits.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-700">
          <Zap className="h-4 w-4" />
          Storm Response Mode
        </div>
      </div>
    </header>
  );
}
