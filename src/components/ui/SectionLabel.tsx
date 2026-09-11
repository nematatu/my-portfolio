import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "span";
};

export function SectionLabel({ children, as: Tag = "h2" }: SectionLabelProps) {
  return (
    <Tag className="flex items-center gap-4 md:gap-8 text-2xl md:text-3xl leading-tight font-bold tracking-widest">
      <span
        aria-hidden="true"
        className="block box-border w-[12px] h-[12px] flex-none rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]"
      />
      <span>{children}</span>
    </Tag>
  );
}
