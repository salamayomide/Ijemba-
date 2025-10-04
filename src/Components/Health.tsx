type Health = {
  id: number;
  name: string;
  founded: string;
  image: string;
};

const people: Health[] = [
  {
    id: 1,
    name: "Community Health Centre, Ijemba",
    founded: "Founded: 1970",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 2,
    name: "Ijemba Maternity & Child Care Clinic",
    founded: "Founded: 1985",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 3,
    name: "Ijemba General Health Post",
    founded: "Founded: 1995",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 4,
    name: "Ijemba Community Clinic",
    founded: "Founded: 2001",
    image: "/src/assets/leader1.jpg",
  },
];

export default function Health() {
  return (
    <section
      id="health"
      className="bg-[#FFF8E1] rounded-2xl p-6 shadow-md text-[#2E7D32]"
    >
      <h3 className="text-2xl font-bold text-[#2E7D32] mb-4">Our Health Centres</h3>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {people.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-[#FB8C00]/40 bg-white hover:bg-[#FB8C00]/10 p-4 shadow-sm flex flex-col items-center text-center transition-all"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-32 w-32 object-cover rounded-full border-4 border-[#2E7D32]/40 shadow"
            />
            <h4 className="mt-4 font-bold text-[#2E7D32]">{p.name}</h4>
            <p className="text-sm text-[#FB8C00]">{p.founded}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
