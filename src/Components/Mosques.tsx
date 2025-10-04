type Mosque = {
  id: number;
  name: string;
  location: string;
  image: string;
};

const mosques: Mosque[] = [
  {
    id: 1,
    name: "Agarawu Mosque",
    location: "Agarawu Area, Ijemba",
    image: "/src/assets/mosque1.jpg",
  },
  {
    id: 2,
    name: "Alagbede Mosque",
    location: "Ile Alagbede, Ijemba",
    image: "/src/assets/mosque2.jpg",
  },
  {
    id: 3,
    name: "Alalumkiba Mosque",
    location: "Ita Oye",
    image: "/src/assets/mosque3.jpg",
  },
  {
    id: 4,
    name: "Mogaji Mosque",
    location: "Isale Papa",
    image: "/src/assets/mosque4.jpg",
  },
  {
    id: 5,
    name: "Bale Mosque",
    location: "Market Area",
    image: "/src/assets/mosque5.jpg",
  },
  {
    id: 6,
    name: "Community Youth Mosque",
    location: "Ijemba East",
    image: "/src/assets/mosque6.jpg",
  },
];

export default function Mosques() {
  return (
    <section
      id="mosques"
      className="bg-[#FFF8E1] rounded-2xl p-6 shadow-md text-[#2E7D32]"
    >
      <h3 className="text-3xl font-bold text-[#FB8C00]">Mosques in Ijemba</h3>
      <p className="mt-2 text-sm text-[#2E7D32]/80">
        Ijemba is blessed with many mosques that serve as centers of worship,
        learning, and unity for our community.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mosques.map((m) => (
          <div
            key={m.id}
            className="border border-[#2E7D32]/30 rounded-lg p-3 shadow-sm flex flex-col items-center text-center bg-white hover:bg-[#FFF3E0] transition-all duration-300"
          >
            <img
              src={m.image}
              alt={m.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h4 className="mt-3 font-semibold text-[#FB8C00]">{m.name}</h4>
            <p className="text-xs text-[#2E7D32]/70">{m.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
