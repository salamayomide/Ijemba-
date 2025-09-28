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
      excerpt: "Ijemba Day.",
    },
    {
      id: 2,
      title: "Community Health Outreach",
      date: "2025-10-02",
      excerpt: "Free health screening for residents at the community center.",
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
    <section id="news" className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-amber-900">News & Events</h3>
        <div className="text-right">
          <p className="text-xs text-gray-500">Ijemba Day</p>
          <p className="font-semibold">{countdown}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((n) => (
          <article key={n.id} className="border rounded-lg p-4">
            <h4 className="font-semibold">{n.title}</h4>
            <time className="text-xs text-gray-500">{n.date}</time>
            <p className="mt-2 text-sm text-gray-700">{n.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
