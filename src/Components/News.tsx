import { useEffect, useState } from "react";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
};

const FESTIVAL_DATE = new Date("2025-12-15T09:00:00");

export default function News() {
  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Ijemba Day",
      date: "Ileya time",
      excerpt: "Ijemba Day celebration and cultural festival for all residents.",
    },
    {
      id: 2,
      title: "Community Health Outreach",
      date: "2025-10-02",
      excerpt:
        "Free health screening for residents at the community center.",
    },
  ]);

  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = FESTIVAL_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown("Festival is happening now!");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${mins}m ${secs}s`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="news"
      className="bg-[#FFF8E1] rounded-2xl p-6 shadow-md text-[#2E7D32]"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-3xl font-bold text-[#FB8C00]">News & Events</h3>
        <div className="text-right">
          <p className="text-xs text-[#2E7D32]/70">Ijemba Day</p>
          <p className="font-semibold text-[#FB8C00]">{countdown}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((n) => (
          <article
            key={n.id}
            className="border border-[#2E7D32]/30 rounded-lg p-4 bg-white hover:bg-[#FFF3E0] transition-colors duration-300"
          >
            <h4 className="font-semibold text-[#FB8C00]">{n.title}</h4>
            <time className="text-xs text-[#2E7D32]/60">{n.date}</time>
            <p className="mt-2 text-sm text-[#2E7D32]">{n.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
