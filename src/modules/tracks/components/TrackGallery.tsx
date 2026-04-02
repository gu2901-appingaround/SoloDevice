"use client";

import { useEffect, useState } from "react";
import { Track, fetchTracks } from "../api";
import { homeCopy } from "@/core/copy/home";

export const TrackGallery = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTracks().then((res) => {
      if (res.data) setTracks(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center p-10">{homeCopy.gallery.loading}</p>;

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      {tracks.map((track) => (
        <div key={track.id} className="relative group overflow-hidden rounded-xl shadow-lg">
          <img
            src={track.imageUrl}
            alt={track.name}
            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-2xl font-bold">{track.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
