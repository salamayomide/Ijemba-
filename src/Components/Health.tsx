type Health = {
  id: number;
  name: string;
  founded: string;
  image: string;
};

const people: Health[] = [
  {
    id: 1,
    name: "Community Health Centre",
    founded: "1970",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 2,
    name: "Community Primary school Ladogan,Ijemba",
    founded: "1970",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 3,
    name: "Community Primary school Ladogan,Ijemba",
    founded: "1970",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 4,
    name: "Community Primary school Ladogan,Ijemba",
    founded: "1970",
    image: "/src/assets/leader1.jpg",
  },
];

export default function Health() {
  return (
    <section id="people" className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-amber-900">Our Health</h3>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {people.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border p-4 shadow-sm flex flex-col items-center text-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-32 w-32 object-cover rounded-full border-4 border-amber-200"
            />
            <h4 className="mt-4 font-bold text-amber-900">{p.name}</h4>
            <p className="text-sm text-gray-500">{p.founded}</p>
            <p className="text-xs text-gray-600 mt-2">
              {" "}
              <img src={p.image} alt="" />{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
