"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { EaseDriver, FadeIn, FadeInWithStagger } from "@/components/ui/FadeIn";
import Header from "@/layouts/v2/Header";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <FadeInWithStagger>
      <Header />
      <div className="w-full md:w-1/2 mx-auto space-y-8">
        <FadeIn>
          <div className="flex flex-col mt-9 md:mt-12">
            <div className="mb-8">
              <SectionLabel as="h1">About</SectionLabel>
            </div>
            <div className="flex justify-between space-x-3 md:space-x-4 px-2">
              <p className="whitespace-pre-line tracking-widest">
                バドミントンと写真が好き
                <br />
                沖縄出身 宮崎在住
              </p>
              <FadeIn>
                <a href="https://技術者倫理.com">
                  <Image
                    src="https://img.shields.io/badge/%E6%8A%80%E8%A1%93%E8%80%85%E5%80%AB%E7%90%86-%E9%81%B5%E5%AE%88%E6%B8%88%E3%81%BF-0a0a0a?style=for-the-badge&labelColor=ffffff"
                    alt="技術者倫理 遵守済み"
                    width={158}
                    height={28}
                    unoptimized
                  />
                </a>
              </FadeIn>

              <div className="flex flex-col items-end justify-end">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Link target="_blank" href="https://twitter.com/T_kanntoku">
                    <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                  <Link target="_blank" href="https://github.com/nematatu">
                    <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                  <Link target="_blank" href="https://zenn.dev/kotopasi">
                    <SiZenn className="text-blue-300 w-5 h-5 md:w-6 md:h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <EaseDriver />
        <FadeIn>
          <div className="flex flex-col mb-8">
            <div className="mb-8">
              <SectionLabel>Skill</SectionLabel>
            </div>
            <div className="whitespace-pre-line tracking-widest space-y-4 px-2">
              <p className="tracking-widest font-bold text-lg md:text-xl">
                Frontend
              </p>
              TypeScript / Next.js / React
              <br />
              <p className="tracking-widest font-bold text-lg md:text-xl">
                Backend
              </p>
              Python / Bun / Deno
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInWithStagger>
  );
}
