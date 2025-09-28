export default function Video() {
  return (
    <section id="video" className="p-10 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-6">Community Documentary</h3>
      <div className="max-w-4xl mx-auto">
        <iframe
          className="w-full h-96 rounded shadow"
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
