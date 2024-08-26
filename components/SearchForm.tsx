"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { formUrlQuery } from "@/sanity/utils";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const delayedDebounceFn = setTimeout(() => {
      let newUrl = '';
      if (searchText) {
        // 拼接query参数后的url
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchText
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'] // 删除url中的query字符
        })
      }
      // 修改浏览器地址栏中的url
      router.push(newUrl, { scroll: false })
    }, 300)
  }, [searchText])

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label htmlFor="search" className="flex-center relative w-full max-w-3xl">
        {/* Icon */}
        <Image
          id="search"
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="Search Icon"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          type="text"
          placeholder="Search for courses"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
    </form>
  );
}