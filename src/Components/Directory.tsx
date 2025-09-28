import { Link } from "react-router-dom";

export default function Directory() {
  return (
    <section id="directory" className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-amber-900">Directory</h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="p-3 rounded-lg border text-sm">
          {" "}
          <Link className="w-full" to={"/schools"}>
            Schools
          </Link>{" "}
        </button>
        <button className="p-3 rounded-lg border text-sm">
          <Link className="w-full" to={"/health"}>
            Health
          </Link>{" "}
        </button>
        <button className="p-3 rounded-lg border text-sm">Markets</button>
        <button className="p-3 rounded-lg border text-sm">
          <Link className="w-full" to={"/Businesses"}>
            Businesses
          </Link>{" "}
        </button>
      </div>
    </section>
  );
}
