export default function Opportunities() {
  return (
    <section id="opps" className="bg-green-50 rounded-2xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-green-800">
        Opportunities — Youth Corner
      </h3>

      <ul className="mt-4 space-y-3">
        <li className="p-4 border border-green-200 rounded-lg bg-white hover:bg-green-100 transition">
          <strong className="text-green-700">Digital Skills Workshop</strong>
          <p className="text-xs text-gray-700 mt-1">
            Free training in web & mobile development
          </p>
        </li>

        <li className="p-4 border border-green-200 rounded-lg bg-white hover:bg-green-100 transition">
          <strong className="text-green-700">Scholarship Fund</strong>
          <p className="text-xs text-gray-700 mt-1">
            Providing free uniforms for primary school pupils
          </p>
        </li>
      </ul>
    </section>
  );
}
