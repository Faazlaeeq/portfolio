"use client";

import { useEffect, useState } from "react";
import GradientTxt from "../Reusables/GradientTxt";
import CustomNav from "../Reusables/CustomNav";
import FadeUp from "@/animations/FadeUp";
import { ArticleProps } from "../../../../types/Articles";
import { getArticles } from "../../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Articles({
  initialArticles = [],
}: {
  initialArticles?: ArticleProps[];
}) {
  const router = useRouter();
  const [isBottom, setIsBottom] = useState(false);
  const [articles, setArticles] = useState<ArticleProps[]>(initialArticles);

  useEffect(() => {
    if (initialArticles && initialArticles.length > 0) return;

    const fetchArticles = async function () {
      try {
        const articles = await getArticles();
        setArticles(articles);
      } catch (error) {
        toast.error("Failed to fetch articles. Please try again later.");
      }
    };

    fetchArticles();
  }, [initialArticles]);

  useEffect(() => {
    const rightContent = document.getElementById("right-content");

    const handleScroll = function () {
      if (rightContent) {
        const { scrollTop, scrollHeight, clientHeight } = rightContent;
        if (scrollTop + clientHeight >= scrollHeight) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      }
    };

    if (rightContent) {
      rightContent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (rightContent) {
        rightContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section id="articles" className="w-full py-4 lg:py-8 bg-black">
      <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-5 py-2 md:flex-row md:gap-8 lg:px-20">
        <div
          id="left-content"
          className={`md:sticky ${isBottom ? "md:bottom-0" : "md:top-20"}`}
        >
          <GradientTxt
            tagName="h5"
            txt="ARTICLES"
            className="text-[22px] font-bold tracking-[4px]"
          />
          <h2 className="my-6 text-[40px] font-bold leading-[120%] tracking-[0.5px] text-white xl:text-[54px]">
            Latest Articles
          </h2>

          <CustomNav
            txt="View all"
            className="flex items-center gap-2 text-[14px] text-white lg:text-[18px]"
            to="/articles"
          />
        </div>

        <div
          id="right-content"
          className="max-w-full overflow-hidden md:max-w-[50%]"
        >
          {articles.slice(0, 10).map((article) => (
            <FadeUp
              key={article._id}
              tag="div"
              className="group mb-[50px] cursor-pointer border-b border-gray-400 pb-5"
              to={`articles/${article.slug}`}
            >
              <p className="font-medium leading-[130%] text-[#666]">
                {article.date} .{article.estimatedReadingTime} mins
              </p>
              <h2 className="md:leading[36px] truncate py-6 text-[22px] font-bold leading-[30px] text-white md:text-[28px] xl:text-[28px]">
                {article.title}.
              </h2>
              <CustomNav
                txt="Read the article"
                className="flex items-center gap-2 text-white md:text-[18px]"
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
