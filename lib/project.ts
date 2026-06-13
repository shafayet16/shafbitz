export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  media: string;
  tags: string[];
  liveUrl: string;
  isComingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "feral",
    title: "FERAL",
    description:
      "Complete e‑commerce platform for a Dhaka‑based streetwear brand.",
    longDescription:
      "Built from scratch with Next.js and Supabase, this full‑stack store handles everything from product discovery to checkout. It includes a persistent cart, division‑based delivery fees (Dhaka vs. outside Dhaka), bKash/Nagad payment integration with transaction ID submission, and a secure admin dashboard protected by Supabase Auth. The admin panel lets the owner manage orders, update stock, and upload product images directly. Row‑Level Security and server‑side service role policies keep all customer data safe.",
    media: "/feral-overview.mp4",        // replace with actual screenshot
    tags: ["Next.js", "Supabase", "Tailwind", "bKash", "Framer Motion"],
    liveUrl: "https://feralbd.vercel.app",
    isComingSoon: false,
  },
  {
    slug: "lazward",
    title: "Lazward",
    description:
      "Social platform where game‑stats replace followers and guilds replace servers.",
    longDescription:
      "Currently in design phase. A social app that reimagines social media for competitive and casual gamers. Profiles show game stats instead of follower counts, milestones replace posts, and guilds act as communities. Stack: Rust, Three.js, WebSocket, Supabase.",
    media: "/lazward-sketch.svg",
    tags: ["Rust", "Three.js", "WebSocket", "Supabase"],
    liveUrl: "#",
    isComingSoon: true,
  },
];