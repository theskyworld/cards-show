"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface ResourceCardProps {
  id: string;
  title: string;
  image: string;
  views: number;
  downloadLink: string;
}
export default function ResourceCard({ id, title, image, views: downloadedNumber, downloadLink }: ResourceCardProps) {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={downloadLink}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>

        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image
            src="/downloads.svg" width={20} height={20} alt="download"
          />  
          {downloadedNumber}
        </div>
        <Link href={downloadLink} className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
          Download Now
          <Image
            src="/arrow-blue.svg"
            width={13}
            height={10}
            alt="arrow"
          />
        </Link>
      </CardContent>
    </Card>
  )

}
