import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { locales } from "./locale-config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./app/language-content/${locale}.ts`))
      .content,
  };
});
