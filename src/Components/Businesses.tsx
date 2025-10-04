type Businesses = {
  id: number;
  name: string;
  Nature: string;
  location: string;
  image: string;
};

const people: Businesses[] = [
  {
    id: 1,
    name: "Community Primary School Ladogan, Ijemba",
    Nature: "Established: 1970",
    location: "Olosoko",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 2,
    name: "Ijemba Modern Nursery & Primary School",
    Nature: "Founded: 1980",
    location: "Ijemba Central",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 3,
    name: "Ijemba Community Hall",
    Nature: "Built: 1995",
    location: "Main Road",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 4,
    name: "Ijemba Central Mosque",
    Nature: "Built: 1965",
    location: "Central Ijemba",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 5,
    name: "Ijemba Health Centre",
    Nature: "Established: 2000",
    location: "Olosoko",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 6,
    name: "Community Borehole Project",
    Nature: "Commissioned: 2015",
    location: "Ijemba Axis",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 7,
    name: "Ijemba Youth Empowerment Center",
    Nature: "Established: 2020",
    location: "Central Ijemba",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 8,
    name: "Ijemba Cooperative Society",
    Nature: "Since: 1998",
    location: "Ijemba Market Area",
    image: "/src/assets/leader1.jpg",
  },
];

export default function Business() {
  return (
    <section
      id="business"
      className="bg-[#FFF8E1] rounded-2xl p-6 shadow-md text-[#2E7D32]"
    >
      <h3 className="text-2xl font-bold text-[#2E7D32] mb-4">Businesses & Institutions</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
            <p className="text-sm text-[#FB8C00]">{p.location}</p>
            <p className="text-xs text-gray-600">{p.Nature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
