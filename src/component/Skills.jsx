import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Skills({ groups }) {
  const categories = useMemo(() => groups.map((g) => g.category), [groups]);
  const [active, setActive] = useState(categories[0] || "");

  const current = groups.find((g) => g.category === active) || groups[0];

  return (
    <div className="rounded-2xl border bg-white p-5 md:p-6
                    dark:bg-[#111] dark:border-white/10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <MagneticButton
              key={c}
              onClick={() => setActive(c)}
              className={[
                "px-4 py-2 rounded-xl text-sm border transition",
                isActive
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-[#111] dark:text-gray-200 dark:border-white/10 dark:hover:bg-white/5",
              ].join(" ")}
            >
              {c}
            </MagneticButton>
          );
        })}
      </div>

      {/* Skills grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {current?.items?.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border p-4 bg-gray-50
                       dark:bg-white/5 dark:border-white/10"
          >
           
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                {s.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {s.level}%
              </p>
            </div>
            

            {/* Animated bar */}
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden dark:bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-black dark:bg-white"
              />
            </div>

            {/* Mini tags (optional feel) */}
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 rounded-full border bg-white text-gray-600
                               dark:bg-[#111] dark:text-gray-300 dark:border-white/10">
                Level: {s.level}
              </span>
              <span className="text-xs px-2 py-1 rounded-full border bg-white text-gray-600
                               dark:bg-[#111] dark:text-gray-300 dark:border-white/10">
                Category: {active}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}