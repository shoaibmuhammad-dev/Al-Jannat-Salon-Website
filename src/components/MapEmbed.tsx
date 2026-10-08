"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

type Props = {
  src: string;
  title: string;
  directionsUrl: string;
};

const TIMEOUT_MS = 8000;
const MAX_RETRIES = 2;

export default function MapEmbed({ src, title, directionsUrl }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  // Start loading only when the map is close to the viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // If the iframe hasn't loaded in time, remount it (new key) and try again
  useEffect(() => {
    if (!inView || loaded || failed) return;
    const timer = setTimeout(() => {
      if (attempt < MAX_RETRIES) setAttempt((a) => a + 1);
      else setFailed(true);
    }, TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [inView, loaded, failed, attempt]);

  return (
    <div
      ref={wrapperRef}
      className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-blush-200 shadow-soft"
    >
      {inView && !failed && (
        <iframe
          key={attempt}
          title={title}
          src={src}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className={`h-full w-full border-0 transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {!loaded && !failed && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center">
          <MapPin className="h-10 w-10 text-gold-600" aria-hidden="true" />
          <span className="sr-only">Loading map…</span>
        </div>
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="text-plum-900">The map couldn't be loaded.</p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-plum-900 underline decoration-gold-500 decoration-2 underline-offset-4"
          >
            Open in Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
