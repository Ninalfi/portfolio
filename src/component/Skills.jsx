export default function Skills({ groups }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {groups.map((g) => (
        <div
          key={g.category}
          className="rounded-2xl border bg-white p-5
                     dark:bg-[#111] dark:border-white/10"
        >
          <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
            {g.category}
          </h3>

          <div className="space-y-4">
            {g.items.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-800 dark:text-gray-200">
                    {s.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {s.level}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-100 overflow-hidden dark:bg-white/10">
                  <div
                    className="h-full bg-black rounded-full dark:bg-white"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}