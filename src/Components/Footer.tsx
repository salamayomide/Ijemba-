export default function Footer() {
  return (
    <footer className="mt-10 bg-[#2E7D32] text-[#FFF8E1] rounded-t-2xl p-6 text-center shadow-inner">
      <p className="text-sm font-medium">
        © {new Date().getFullYear()} Ijemba Community — Iseyin
      </p>
      <p className="text-xs italic mt-1 text-[#FB8C00]">
        “Islamic Heart of Iseyin.”
      </p>
    </footer>
  );
}
