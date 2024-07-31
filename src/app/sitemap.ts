import { MetadataRoute } from "next";

const baseURL: string = "https://www.tsglobaltech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: baseURL + "/en",
          hi: baseURL + "/hi",
        },
      },
    },
    {
      url: baseURL + "/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: baseURL + "/en/about",
          hi: baseURL + "/hi/about",
        },
      },
    },
    {
      url: baseURL + "/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: baseURL + "/en/services",
          hi: baseURL + "/hi/services",
        },
      },
    },

    {
      url: baseURL + "/career",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: baseURL + "/en/career",
          hi: baseURL + "/hi/career",
        },
      },
    },
  ];
}
