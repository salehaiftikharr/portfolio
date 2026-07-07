export interface WritingItem {
  title: string;
  outlet: string;
  date: string;
  url: string;
  blurb: string;
}

export const writing: WritingItem[] = [
  {
    title: "Ask Claude about your AI agents",
    outlet: "SuperOrgs Engineering Blog",
    date: "Jul 2026",
    url: "https://www.superorgs.com/blog/mcp",
    blurb:
      "Shipping an MCP server that lets you query your AI agent operations straight from Claude, ChatGPT, or Cursor.",
  },
  {
    title: "Every agent run, live",
    outlet: "SuperOrgs Engineering Blog",
    date: "Jul 2026",
    url: "https://www.superorgs.com/blog/activity-streaming",
    blurb:
      "Building real-time activity streaming so teams can watch every agent run, with its cost and outcome, as it happens.",
  },
];
