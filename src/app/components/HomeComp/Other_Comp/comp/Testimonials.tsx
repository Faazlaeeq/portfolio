"use client";

import { useState } from "react";
import Image from "next/image";
import quoteImg from "../../../../../../public/quote.svg";
import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { Star, CheckCircle, ChevronLeft, ChevronRight, Award } from "lucide-react";

interface UpworkReview {
  id: string;
  project: string;
  date: string;
  rating: number;
  quote: string;
  endorsements: string[];
  client: string;
}

const UPWORK_REVIEWS: UpworkReview[] = [
  {
    id: "review-1",
    project: "WordPress Site for Online Learning",
    date: "April 2026",
    rating: 5.0,
    quote:
      "Faaz is a clear communicator. There were some delays in the project due to the checkout issue but Faaz has also gone above and beyond the expectations with server change and configuration.",
    endorsements: ["Clear Communicator", "Accountable for Outcomes"],
    client: "Online Learning Platform Client",
  },
  {
    id: "review-2",
    project: "U.S.-Based E-Commerce — Shopify Store",
    date: "November 2022",
    rating: 5.0,
    quote:
      "Faaz's work is excellent. He is highly responsive, and his work is always done promptly and quickly. We are a U.S.-based company, and Faaz's communication skills and knowledge of web development are top notch.",
    endorsements: ["Clear Communicator", "Reliable", "Committed to Quality"],
    client: "U.S. Company",
  },
  {
    id: "review-3",
    project: "Shopify – TikTok Pixel Debugging & Clean Implementation",
    date: "December 2025",
    rating: 5.0,
    quote:
      "Faaz did an amazing job with our TikTok Pixel setup. All events are firing perfectly, values are correct, and everything is fully ready for ads. Communication was top, very fast.",
    endorsements: ["Committed to Quality", "Clear Communicator"],
    client: "E-Commerce Advertising Client",
  },
  {
    id: "review-4",
    project: "Convert Static Web to WordPress Custom Theme",
    date: "March 2026",
    rating: 5.0,
    quote:
      "Faaz did an excellent job on the WordPress site and took a custom design and made it into a flexible theme. He worked hard to make sure I was pleased with the result.",
    endorsements: ["Committed to Quality"],
    client: "Design Agency Client",
  },
  {
    id: "review-5",
    project: "Flutter Developer for Travel Agency Booking App",
    date: "March 2026",
    rating: 5.0,
    quote:
      "Great job and tries his best to get the work done! Highly dedicated to getting the mobile app delivered properly.",
    endorsements: ["Committed to Quality"],
    client: "Travel Tech Client",
  },
  {
    id: "review-6",
    project: "WordPress Website Redesign",
    date: "January 2023",
    rating: 5.0,
    quote:
      "Faaz did a great job. He did exactly what we asked for. Very pleased with his work.",
    endorsements: ["Committed to Quality"],
    client: "Business Client",
  },
  {
    id: "review-7",
    project: "Shopify Website Quick Fixes & Optimization",
    date: "June 2022",
    rating: 5.0,
    quote:
      "It is great to work with Faaz. He responds quickly and gets the job done right away. I will definitely hire him again.",
    endorsements: ["Collaborative", "Reliable"],
    client: "Shopify Store Owner",
  },
  {
    id: "review-8",
    project: "Time-Sensitive Shopify Website Resolution",
    date: "April 2022",
    rating: 5.0,
    quote:
      "It was great to work with Faaz. I posted a simple job on Upwork but was somewhat time-sensitive on my end. Faaz was quick to respond to my request and resolved it cleanly.",
    endorsements: ["Collaborative", "Reliable", "Committed to Quality"],
    client: "E-Commerce Client",
  },
  {
    id: "review-9",
    project: "Flutter Dashboard Web Application",
    date: "December 2023",
    rating: 5.0,
    quote:
      "Faaz is hardworking and a good developer. Solid implementation on the dashboard modules.",
    endorsements: ["Reliable"],
    client: "Web App Client",
  },
];

export default function Testimonials({
  initialTestimonials,
}: {
  initialTestimonials?: any;
} = {}) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % UPWORK_REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + UPWORK_REVIEWS.length) % UPWORK_REVIEWS.length,
    );
  };

  const activeReview = UPWORK_REVIEWS[current];

  return (
    <section className="mt-[102px]">
      <FadeUp tag="div">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <GradientTxt
              tagName="h4"
              txt="CLIENT REVIEWS"
              className="mb-4 text-[22px] font-bold tracking-[4px]"
            />
            <p className="text-[36px] font-bold leading-[110%] tracking-[0.5px] md:text-[50px] xl:text-[54px]">
              Word on the Street
            </p>
          </div>

          {/* Rating Summary Badge */}
          <div className="flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950 px-5 py-3 shadow-lg">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 / 5.0</span>
            <span className="text-sm text-neutral-400">• 100% Top Rated</span>
          </div>
        </div>
      </FadeUp>

      {/* Main Review Card */}
      <div className="relative mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Image src={quoteImg} alt="quote icon" width={40} height={40} priority />
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Review Quote */}
            <blockquote className="my-6 text-xl font-medium leading-relaxed text-neutral-100 md:text-2xl lg:text-3xl">
              &ldquo;{activeReview.quote}&rdquo;
            </blockquote>

            {/* Client and Project Info */}
            <div className="mt-8 border-t border-neutral-900 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white md:text-xl">
                    {activeReview.project}
                  </h4>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle className="size-3.5" />
                      Verified Upwork Client
                    </span>
                    <span>• {activeReview.date}</span>
                  </div>
                </div>

                {/* Client Endorsement Badges */}
                <div className="flex flex-wrap gap-2">
                  {activeReview.endorsements.map((endorsement, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-semibold text-neutral-300"
                    >
                      <Award className="size-3 text-blue-400" />
                      {endorsement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-neutral-900 pt-6">
          <span className="text-xs font-semibold tracking-widest text-neutral-500">
            {String(current + 1).padStart(2, "0")} / {String(UPWORK_REVIEWS.length).padStart(2, "0")} REVIEWS
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="flex size-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
              aria-label="Previous review"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex size-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
              aria-label="Next review"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of All Client Feedback Thumbnails */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {UPWORK_REVIEWS.map((review, idx) => (
          <div
            key={review.id}
            onClick={() => setCurrent(idx)}
            className={`cursor-pointer rounded-xl border p-5 transition-all duration-200 ${
              idx === current
                ? "border-blue-500/80 bg-neutral-900/90 shadow-[0_4px_20px_rgba(59,130,246,0.15)]"
                : "border-neutral-800/80 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-neutral-500">{review.date}</span>
            </div>

            <p className="mt-3 line-clamp-2 text-sm text-neutral-300">
              &ldquo;{review.quote}&rdquo;
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-neutral-900 pt-3 text-xs">
              <span className="truncate font-medium text-neutral-400">
                {review.project}
              </span>
              {review.endorsements[0] && (
                <span className="ml-2 shrink-0 rounded bg-neutral-900 px-2 py-0.5 text-[10px] text-blue-400">
                  {review.endorsements[0]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
