// Shared Tailwind utilities keep typography and themes consistent across routes.
export const container = "mx-auto w-[calc(100%-40px)] max-w-[1060px] min-[701px]:w-[calc(100%-48px)]";
export const muted = "text-[#737580] [html[data-theme=dark]_&]:text-[#94949f]";
export const border = "border-[#ececef] [html[data-theme=dark]_&]:border-[#242427]";
export const interactive = "transition-colors duration-150 hover:text-[#1b1b1d] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#737580] motion-reduce:transition-none [html[data-theme=dark]_&]:hover:text-[#ededee]";
export const eyebrow = "text-xs leading-[22px] font-normal tracking-[3px] text-[#838895] uppercase min-[701px]:text-sm min-[701px]:tracking-[4px]";
export const pageTitle = "mt-5 mb-5 text-[clamp(38px,8vw,56px)] leading-[1.2] font-normal min-[701px]:mt-[22px] min-[701px]:text-[60px]";
export const bodyCopy = `${muted} text-base leading-[26px] min-[701px]:text-[17px]`;
