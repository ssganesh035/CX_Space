export default function Stats() {
  const stats = [
    { value: "2,500+", label: "Active Members", emoji: "👥" },
    { value: "150+", label: "Events Hosted", emoji: "🎉" },
    { value: "500+", label: "Companies", emoji: "🏢" },
    { value: "45+", label: "Countries", emoji: "🌍" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 text-4xl group-hover:animate-bounce">{stat.emoji}</div>
              <div className="text-4xl font-bold gradient-text mb-2 group-hover:animate-pulse">{stat.value}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
