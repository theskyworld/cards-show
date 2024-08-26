"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

type Link = {
  id: number;
  title: string;
}
const links: Link[] = [
  {
    id: 1,
    title: "all"
  },
  {
    id: 2,
    title: "Next 13"
  },
  {
    id: 3,
    title: "frontend"
  },
  {
    id: 4,
    title: "backend"
  },
  {
    id: 5,
    title: "fullstack"
  },

]
export default function Filters() {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleButtonClick(linkId: number) {
    // newUrl用于接收拼接参数后的url
    let newUrl = "";
    if (activeLinkId === linkId) {
      setActiveLinkId(null);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category", // 在url例如/?category=all中的category
        value: null
      })
    } else {
      setActiveLinkId(linkId);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: links[linkId - 1].title.toLowerCase()
      })
    }
    // 修改url
    router.push(newUrl, { scroll: false })
  }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {
        links.map(link => (
          <button
            key={link.id}
            className={`${activeLinkId === link.id ? "gradient_blue-purple" : ""}  whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
            onClick={() => handleButtonClick(link.id)}>
            {link.title}
          </button>
        ))
      }
    </ul>
  )
}