import { NextApiRequest, NextApiResponse } from "next";
import { SITE_URL } from "@/constant";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let robots = `
User-agent: *
allow: /
Disallow: /_next/static/
Disallow: /_next/image/
Disallow: /_next/server/
Disallow: /_next/data/
Disallow: /.next/
Disallow: /api

Sitemap: ${SITE_URL}/sitemap.xml
    `.trim();

  res.setHeader("Content-Type", "text/plain");
  res.send(robots);
}
