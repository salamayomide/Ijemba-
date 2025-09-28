import leader1 from "../assets/leader1.png";
import leader2 from "../assets/leader2.png";
import leader3 from "../assets/leader3.jpg";

export default function Leaders() {
  return (
    <section id="leaders" className="p-10 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-6"> Bale of Ijemba</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-green-50 rounded shadow">
          <img src={leader1} alt="Leader One" className="h-32 w-32 object-cover rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold">Chief Adewale Ogunleye</h4>
          <p className="text-sm text-gray-600">Served 1980 – 1995</p>
          <p className="mt-2">Known for uniting the community and starting educational programs.</p>
        </div>

        <div className="p-6 bg-green-50 rounded shadow">
          <img src={leader2} alt="Leader Two" className="h-32 w-32 object-cover rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold">Chief Folake Adebayo</h4>
          <p className="text-sm text-gray-600">Served 1996 – 2010</p>
          <p className="mt-2">Improved healthcare centers and women empowerment in Ijemba.</p>
        </div>


        <div className="p-6 bg-green-50 rounded shadow">
          <img src={leader3} alt="Leader Three" className="h-32 w-32 object-cover rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold">Chief Ibrahim Alao</h4>
          <p className="text-sm text-gray-600">2011 – Present</p>
          <p className="mt-2">Focused on modernization and digital transformation for the community.</p>
        </div>
      </div>
    </section>
  );
}
