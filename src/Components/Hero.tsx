import leader3 from "../assets/leader3.jpg";

export default function Hero() {
  return (
    <div
      className="h-[75vh] bg-cover bg-center bg-no-repeat flex justify-center items-center relative rounded-2xl shadow-md overflow-hidden"
      style={{ backgroundImage: `url(${leader3})` }}
    >
      {/* Cream overlay for readability */}
      <div className="absolute inset-0 bg-[#FFF8E1]/70 backdrop-brightness-90"></div>

      {/* Content */}
      <div className="relative z-10 w-[70%] p-6 bg-white/70 rounded-xl border border-[#FB8C00]/40 flex flex-col items-center text-center shadow-md">
        <h1 className="text-4xl font-extrabold text-[#2E7D32]">
          Welcome to Ijemba, Iseyin
        </h1>
        <p className="mt-3 text-[#FB8C00] font-medium text-lg">
          Unity • Growth • Culture
        </p>
      </div>
    </div>
  );
}
