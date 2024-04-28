import React from "react";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonials
      </h2>
      <figure className="my-12">
        <blockquote className="bg-[#ff5400]  dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
            Good News Network has been a beacon of hope in our community. Their
            dedication to spreading positivity and uplifting stories has truly
            made a difference in my life. I'm grateful for their work.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Sarah M.
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-[#ff5400]  dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
            As a volunteer with Good News Network, I've witnessed firsthand the
            transformative power of their initiatives. They bring joy and
            inspiration to so many people, and I'm proud to be a part of their
            mission.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;John D.
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-[#ff5400]  dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
            Good News Network has restored my faith in humanity. In a world
            often overshadowed by negativity, they shine a light on the good,
            reminding us that kindness and compassion still prevail. Thank you
            for spreading hope.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212; Emily L.
        </figcaption>
      </figure>
    </section>
  );
};
