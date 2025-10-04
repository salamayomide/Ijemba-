type Person = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const allPeople: Person[] = [
  // include all 9 people here 👇
  {
    id: 1,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },

  {
    id: 2,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },

  {
    id: 3,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },

  {
    id: 4,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 5,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 6,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 7,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 8,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 9,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  // ... other people
];

export default function PeoplePage() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Some Selected Inspiring People of Ijemba
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allPeople.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border p-4 shadow bg-white flex flex-col items-center text-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-32 w-32 object-cover rounded-full border-4 border-green-200"
            />
            <h4 className="mt-4 font-bold text-green-800">{p.name}</h4>
            <p className="text-sm text-gray-500">{p.role}</p>
            <p className="text-xs text-gray-600 mt-2">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
