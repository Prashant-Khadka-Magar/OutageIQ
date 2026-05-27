import { useState } from "react";
import { riskAreas } from "@/data/riskAreas";

import AlertPreview from "@/components/AlertPreview";
import ArcGISExperience from "@/components/ArcGISExperience";
import FutureScope from "@/components/FutureScope";
import Header from "@/components/Header";
import RiskPanel from "@/components/RiskPanel";
import SummaryCards from "@/components/SummaryCards";
import Workflow from "@/components/Workflow";

export default function App() {
  const [selectedArea, setSelectedArea] = useState(riskAreas[0]);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-6 md:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <Header />

        <SummaryCards areas={riskAreas} />

        <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <ArcGISExperience />

          <div className="space-y-6">
            <RiskPanel
              areas={riskAreas}
              selectedArea={selectedArea}
              onSelectArea={setSelectedArea}
            />

            <AlertPreview selectedArea={selectedArea} />
          </div>
        </section>

        <Workflow />

        <FutureScope />
      </div>
    </main>
  );
}
