export default function Gallery() {
  const images = [
    "/src/assets/gallery1.jpg",
    "/src/assets/gallery2.jpg",
    "/src/assets/gallery3.jpg",
    "/src/assets/gallery4.jpg",
    "/src/assets/gallery5.jpg",
    "/src/assets/gallery6.jpg",
  ];

  return (
    <section
      id="gallery"
      className="bg-[#FFF8E1] rounded-2xl p-6 shadow-md text-[#2E7D32]"
    >
      <h3 className="text-2xl font-bold text-[#2E7D32]">Gallery</h3>
      <p className="text-sm text-[#4E342E] mt-1">
        A glimpse of Ijemba’s beautiful moments, people, and heritage.
      </p>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Ijemba Gallery ${index + 1}`}
              className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
