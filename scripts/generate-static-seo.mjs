import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const sourcePath = path.join(distDir, "index.html");
const sourceHtml = fs.readFileSync(sourcePath, "utf8");
const siteUrl = "https://springfallus.org";

const routes = {
  about: {
    title: "About Spring/Fall USA | Free Student Visa Guidance",
    description:
      "Learn about Spring/Fall USA and our mission to provide free F-1 visa guidance, practical resources, and community support for international students.",
  },
  "f1-visa-info": {
    title: "F-1 Visa Guide: Requirements, Documents & Process | Spring/Fall USA",
    description:
      "Understand the F-1 student visa process, eligibility, required documents, application steps, and practical guidance for studying in the United States.",
  },
  "interview-prep": {
    title: "F-1 Visa Interview Questions & Preparation | Spring/Fall USA",
    description:
      "Prepare for your F-1 visa interview with common questions, practical preparation tips, document guidance, and student-focused interview resources.",
  },
  "visa-experiences": {
    title: "F-1 Visa Interview Experiences | Spring/Fall USA",
    description:
      "Read real F-1 visa interview experiences shared by students and learn from common questions, outcomes, and preparation strategies.",
  },
  testimonials: {
    title: "Student Testimonials | Spring/Fall USA",
    description:
      "Read testimonials from students who used Spring/Fall USA resources and guidance while preparing for their U.S. study and F-1 visa journey.",
  },
  resources: {
    title: "F-1 Visa Resources for International Students | Spring/Fall USA",
    description:
      "Explore useful F-1 visa, U.S. study, interview preparation, and international student resources collected by Spring/Fall USA.",
  },
  uniportal: {
    title: "Uniportal | U.S. Study Resources | Spring/Fall USA",
    description:
      "Access Spring/Fall USA Uniportal resources created to help international students organize and navigate their U.S. study journey.",
  },
  blog: {
    title: "F-1 Visa & Study in USA Blog | Spring/Fall USA",
    description:
      "Read articles about F-1 visas, interview preparation, studying in the USA, international student resources, and practical student guidance.",
  },
  "logo-competition": {
    title: "Spring/Fall USA Logo Competition",
    description:
      "View information about the Spring/Fall USA logo competition and community participation.",
  },
  community: {
    title: "Spring/Fall USA Community | Student Groups & Links",
    description:
      "Connect with the Spring/Fall USA community and find useful student groups, social channels, and community resources.",
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setOrInsertMeta(html, selectorRegex, tag) {
  if (selectorRegex.test(html)) return html.replace(selectorRegex, tag);
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function renderRoute(route, config) {
  const canonical = `${siteUrl}/${route}`;
  const title = escapeHtml(config.title);
  const description = escapeHtml(config.description);
  let html = sourceHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = setOrInsertMeta(
    html,
    /<meta[^>]+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}" />`
  );
  html = setOrInsertMeta(
    html,
    /<meta[^>]+name=["']robots["'][^>]*>/i,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`
  );
  html = setOrInsertMeta(
    html,
    /<meta[^>]+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${title}" />`
  );
  html = setOrInsertMeta(
    html,
    /<meta[^>]+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${description}" />`
  );
  html = setOrInsertMeta(
    html,
    /<meta[^>]+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonical}" />`
  );

  if (/<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<link[^>]+rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    html = html.replace("</head>", `  <link rel="canonical" href="${canonical}" />\n  </head>`);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Spring/Fall USA",
        url: `${siteUrl}/`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Spring/Fall USA",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: config.title,
        description: config.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
    ],
  };

  html = html.replace(
    "</head>",
    `  <script id="springfall-structured-data" type="application/ld+json">${JSON.stringify(structuredData)}</script>\n  </head>`
  );

  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
}

for (const [route, config] of Object.entries(routes)) {
  renderRoute(route, config);
}

console.log(`Generated SEO-ready static entry points for ${Object.keys(routes).length} routes.`);
