import createMiddleware from "next-intl/middleware";
import { locales} from "./locale-config";
import { NextRequest } from "next/server";

function shouldExclude(request: NextRequest) {
  const path = request.nextUrl.pathname;

  return (
      path.startsWith('/api') || //  exclude all API routes
      path.startsWith('/static') || // exclude static files
      path.includes('.') // exclude all files in the public folder
  );
}

const middleware = createMiddleware({
  // Add locales you want in the app
  locales,

  // Default locale if no match
  defaultLocale: locales[0],
});

export default middleware;

// const p='/('+locales.join("|")+')/:page*';

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|hi)/:page*"],
};
