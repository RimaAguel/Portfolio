import { useState } from "react";

import scrumOps from "../../images/ScrumforOpsandDevOpsFundamentalsCertified-aguelrima-1013409.516b7c27__1_-1.png";
import scrumFund from "../../images/ScrumFundamentalsCertified-aguelrima-1066335-1.png";
import sixSigma from "../../images/SixSigmaYellowBelt-AguelRima-902820-1.png";
import corporateSales from "../../images/CorporateSalesFundamentals-AguelRima-606257-1.png";
import digitalMarketing from "../../images/DigitalMarketingFundamentals-AguelRima-612316-1.png";
import negotiation from "../../images/NegotiationAssociate-AguelRima-596525-1.png";

interface CertItem {
  src: string;
  alt: string;
}

const certifications: CertItem[] = [
  {
    src: scrumOps,
    alt: "Scrum for Ops and DevOps Fundamentals",
  },
  { src: scrumFund, alt: "Scrum Fundamentals Certified" },
  { src: sixSigma, alt: "Six Sigma Yellow Belt" },
  { src: corporateSales, alt: "Corporate Sales Fundamentals" },
  {
    src: digitalMarketing,
    alt: "Digital Marketing Fundamentals",
  },
  { src: negotiation, alt: "Negotiation Associate" },
];

export function Certifications() {
  const [selected, setSelected] = useState<CertItem | null>(
    null,
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Certifications
          </h2>
          <p className="text-gray-500 mt-2">
            Continuous learning in electronics, embedded
            systems, and industrial computing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              onClick={() => setSelected(cert)}
              className="cursor-pointer rounded-xl border shadow-sm hover:shadow-lg transition overflow-hidden bg-white dark:bg-zinc-900"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-52 object-contain p-4 bg-white"
              />

              <div className="p-3 text-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {cert.alt}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <div
              className="max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full max-h-[90vh] object-contain rounded-lg bg-white"
              />

              <p className="text-center text-white mt-3">
                {selected.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}