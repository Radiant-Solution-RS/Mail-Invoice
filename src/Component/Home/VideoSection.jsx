import React, { useState } from "react";
import thumbnail from "../../assets/thumbnail.png";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="px-12 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-10">
        <div className="relative rounded-2xl border-6 border-gray-200  p-2">
          {!isPlaying ? (
            <div className="relative">
              <img
                src={thumbnail}
                alt="demo video"
                className="w-full h-auto rounded-xl"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl opacity-80 hover:opacity-100 transition">
                  ▶
                </div>
              </button>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
