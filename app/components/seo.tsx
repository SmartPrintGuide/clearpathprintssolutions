import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  slug?: string;
  keywords?: string[];
  image?: string;
}

export default function Seo({
  title,
  description,
  slug = "",
  keywords = [],
  image = "/home-hero-image.webp",
}: SeoProps) {
  const canonical = `https://clearpathprintsolutions.com/${slug}`.replace(/([^:]\/)\/{2,}/g, "$1/");
  const pageTitle = `${title} | Clear Path Print Solutions`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://clearpathprintsolutions.com${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://clearpathprintsolutions.com${image}`} />
      <meta name="robots" content="index,follow" />
    </Head>
  );
}
