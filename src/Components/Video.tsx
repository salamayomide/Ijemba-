export default function Video() {
  return (
    <section
      id="video"
      className="p-10 bg-[#FFF8E1] text-center text-[#2E7D32] rounded-2xl shadow-md"
    >
      <h3 className="text-3xl font-bold text-[#2E7D32] mb-6">
        Community Documentary
      </h3>
      <div className="max-w-4xl mx-auto border-4 border-[#FB8C00] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/yourVideoID"
          title="Community Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
