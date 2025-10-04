import { Link } from "react-router-dom";

export default function Directory() {
  return (
    <section
      id="directory"
      className="bg-[#FFF8E1] rounded-2xl p-6 shadow-md text-[#2E7D32]"
    >
      <h3 className="text-2xl font-bold text-[#2E7D32]">Directory</h3>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {/* Schools */}
        <Link
          to="/schools"
          className="p-3 rounded-lg border border-[#2E7D32] text-sm text-center hover:bg-[#FB8C00] hover:text-white transition-all"
        >
          Schools
        </Link>

        {/* Health */}
        <Link
          to="/health"
          className="p-3 rounded-lg border border-[#2E7D32] text-sm text-center hover:bg-[#FB8C00] hover:text-white transition-all"
        >
          Health
        </Link>

        {/* Markets */}
        <button className="p-3 rounded-lg border border-[#2E7D32] text-sm hover:bg-[#FB8C00] hover:text-white transition-all">
          Markets
        </button>

        {/* Businesses */}
        <Link
          to="/businesses"
          className="p-3 rounded-lg border border-[#2E7D32] text-sm text-center hover:bg-[#FB8C00] hover:text-white transition-all"
        >
          Businesses
        </Link>
      </div>
    </section>
  );
}
