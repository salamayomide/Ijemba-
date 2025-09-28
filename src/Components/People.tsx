

type Person = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const people: Person[] = [
  {
    id: 1,
    name: "Chief Adewale Ogunmola",
    role: "Community Leader",
    bio: "Over 30 years of service to Ijemba, leading cultural preservation and youth empowerment.",
    image: "/src/assets/leader1.jpg",
  },
  {
    id: 2,
    name: "Mrs. Folake Adesina",
    role: "Education Advocate",
    bio: "Founder of local scholarship program, helping over 200 students access quality education.",
    image: "/src/assets/leader2.jpg",
  },
  {
    id: 3,
    name: "Mr. Sola Odetayo",
    role: "Entrepreneur",
    bio: "Successful farmer and business mentor, supporting young entrepreneurs in agriculture.",
    image: "/src/assets/leader3.jpg",
  },
   {
    id: 4,
    name: "Mr. Sola Odetayo",
    role: "Entrepreneur",
    bio: "Successful farmer and business mentor, supporting young entrepreneurs in agriculture.",
    image: "/src/assets/leader3.jpg",
  },
  {
    id: 5,
    name: "Mr. Sola Odetayo",
    role: "Entrepreneur",
    bio: "Successful farmer and business mentor, supporting young entrepreneurs in agriculture.",
    image: "/src/assets/leader3.jpg",
  },
  {
    id: 6,
    name: "Mr. Sola Odetayo",
    role: "Entrepreneur",
    bio: "Successful farmer and business mentor, supporting young entrepreneurs in agriculture.",
    image: "/src/assets/leader3.jpg",
  },
  {
    id: 7,
    name: "Mr. Sola Odetayo",
    role: "Entrepreneur",
    bio: "Successful farmer and business mentor, supporting young entrepreneurs in agriculture.",
    image: "/src/assets/leader3.jpg",
  },
  {
    id: 8,
    name: "Mr. Sola Odetayo",
    role: "Entrepreneur",
    bio: "Successful farmer and business mentor, supporting young entrepreneurs in agriculture.",
    image: "/src/assets/leader3.jpg",
  }
];

export default function People() {
  return (
    <section id="people" className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-amber-900">Exceptional People</h3>
      <p className="text-sm text-gray-600 mt-2">
        Meet some of the people who have shaped and continue to inspire Ijemba.
      </p>

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
            <p className="text-sm text-gray-500">{p.role}</p>
            <p className="text-xs text-gray-600 mt-2">{p.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
