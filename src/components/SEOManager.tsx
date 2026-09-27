import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import socialImage from "@/assets/images/logo/springfall.png";

type SeoConfig = {
  title: string;
  description: string;
  noindex?: boolean;
};

const SITE_URL = "https://springfallus.org";
const SITE_NAME = "Spring/Fall USA";

const routeSeo: Record<string, SeoConfig> = {
  "/": {
    title: "Spring/Fall USA | Free F-1 Visa Guidance for International Students",
    description:
      "Free F-1 visa guidance, interview preparation, visa experiences, resources, and community support for international students planning to study in the USA.",
  },
  "/about": {
    title: "About Spring/Fall USA | Free Student Visa Guidance",
    description:
      "Learn about Spring/Fall USA and our mission to provide free F-1 visa guidance, practical resources, and community support for international students.",
  },
  "/f1-visa-info": {
    title: "F-1 Visa Guide: Requirements, Documents & Process | Spring/Fall USA",
    description:
      "Understand the F-1 student visa process, eligibility, required documents, application steps, and practical guidance for studying in the United States.",
  },
  "/interview-prep": {
    title: "F-1 Visa Interview Questions & Preparation | Spring/Fall USA",
    description:
      "Prepare for your F-1 visa interview with common questions, practical preparation tips, document guidance, and student-focused interview resources.",
  },
  "/visa-experiences": {
    title: "F-1 Visa Interview Experiences | Spring/Fall USA",
    description:
      "Read real F-1 visa interview experiences shared by students and learn from common questions, outcomes, and preparation strategies.",
  },
  "/testimonials": {
    title: "Student Testimonials | Spring/Fall USA",
    description:
      "Read testimonials from students who used Spring/Fall USA resources and guidance while preparing for their U.S. study and F-1 visa journey.",
  },
  "/resources": {
    title: "F-1 Visa Resources for International Students | Spring/Fall USA",
    description:
      "Explore useful F-1 visa, U.S. study, interview preparation, and international student resources collected by Spring/Fall USA.",
  },
  "/uniportal": {
    title: "Uniportal | U.S. Study Resources | Spring/Fall USA",
    description:
      "Access Spring/Fall USA Uniportal resources created to help international students organize and navigate their U.S. study journey.",
  },
  "/blog": {
    title: "F-1 Visa & Study in USA Blog | Spring/Fall USA",
    description:
      "Read articles about F-1 visas, interview preparation, studying in the USA, international student resources, and practical student guidance.",
  },
  "/logo-competition": {
    title: "Spring/Fall USA Logo Competition",
    description:
      "View information about the Spring/Fall USA logo competition and community participation.",
  },
  "/community": {
    title: "Spring/Fall USA Community | Student Groups & Links",
    description:
      "Connect with the Spring/Fall USA community and find useful student groups, social channels, and community resources.",
  },
  "/dashboard": {
    title: "Dashboard | Spring/Fall USA",
    description: "Spring/Fall USA dashboard.",
    noindex: true,
  },
  "/admin-elections": {
    title: "Admin Elections | Spring/Fall USA",
    description: "Administrative election page.",
    noindex: true,
  },
  "/admin-login": {
    title: "Admin Login | Spring/Fall USA",
    description: "Administrative login page.",
    noindex: true,
  },
  "/admin-dashboard": {
    title: "Admin Dashboard | Spring/Fall USA",
    description: "Administrative dashboard.",
    noindex: true,
  },
  "/visa-experiences/share": {
    title: "Share Your F-1 Visa Experience | Spring/Fall USA",
    description: "Share your F-1 visa interview experience with the Spring/Fall USA community.",
    noindex: true,
  },
  "/testimonials/share": {
    title: "Share a Testimonial | Spring/Fall USA",
    description: "Share your feedback with Spring/Fall USA.",
    noindex: true,
  },
};

const upsertMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
};

const getSeo = (pathname: string): SeoConfig => {
  if (routeSeo[pathname]) return routeSeo[pathname];

  if (pathname.startsWith("/visa-experiences/")) {
    return {
      title: "F-1 Visa Experience | Spring/Fall USA",
      description: "Read a student-submitted F-1 visa interview experience on Spring/Fall USA.",
    };
  }

  if (pathname.startsWith("/blog/")) {
    return {
      title: "Student Visa & Study in USA Article | Spring/Fall USA",
      description: "Read practical F-1 visa and study in the USA guidance from Spring/Fall USA.",
    };
  }

  if (pathname.startsWith("/notice/")) {
    return {
      title: "Notice | Spring/Fall USA",
      description: "Read the latest Spring/Fall USA community notice.",
    };
  }

  return {
    title: "Spring/Fall USA | F-1 Visa Guidance",
    description:
      "Free guidance and resources for international students preparing to study in the United States.",
    noindex: true,
  };
};

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const absoluteSocialImage = new URL(socialImage, window.location.origin).href;

    document.title = seo.title;
    upsertMeta('meta[name="description"]', "name", "description", seo.description);
    upsertMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
    );

    upsertCanonical(canonical);

    upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    upsertMeta('meta[property="og:image"]', "property", "og:image", absoluteSocialImage);

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteSocialImage);

    let structuredData = document.getElementById("springfall-structured-data") as HTMLScriptElement | null;
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "springfall-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }

    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: absoluteSocialImage,
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: seo.title,
          description: seo.description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
      ],
    });
  }, [pathname]);

  return null;
};

export default SEOManager;
