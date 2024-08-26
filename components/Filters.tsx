"use client";

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
  const [activeLinkId, setActiveLinkId] = useState(1);
  function handleButtonClick(linkId: number) {
    setActiveLinkId(linkId);
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