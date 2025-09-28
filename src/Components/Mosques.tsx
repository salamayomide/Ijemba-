

type Mosque = {
  id: number;
  name: string;
  location: string;
  image: string;
};

const mosques: Mosque[] = [
  {
    id: 1,
    name: "Ijemba Central Mosque",
    location: "Main Town Square",
    image: "/src/assets/mosque1.jpg",
  },
  {
    id: 2,
    name: "Ansarudeen Mosque",
    location: "Ijemba North",
    image: "/src/assets/mosque2.jpg",
  },
  {
    id: 3,
    name: "Markaz Mosque",
    location: "Ijemba West",
    image: "/src/assets/mosque3.jpg",
  },
  {
    id: 4,
    name: "Old Heritage Mosque",
    location: "Ijemba South",
    image: "/src/assets/mosque4.jpg",
  },
  {
    id: 5,
    name: "Oke-Oja Mosque",
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
    <section id="mosques" className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-amber-900">Mosques in Ijemba</h3>
      <p className="mt-2 text-sm text-gray-600">
        Ijemba is blessed with many mosques that serve as centers of worship,
        learning, and unity for our community.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mosques.map((m) => (
          <div
            key={m.id}
            className="border rounded-lg p-3 shadow-sm flex flex-col items-center text-center"
          >
            <img
              src={m.image}
              alt={m.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h4 className="mt-3 font-semibold text-amber-900">{m.name}</h4>
            <p className="text-xs text-gray-600">{m.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
