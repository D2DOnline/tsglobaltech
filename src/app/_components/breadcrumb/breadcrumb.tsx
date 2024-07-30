"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import "./breadcrumb.css";
import { locales } from "@/locale-config";
import { useTranslations } from "next-intl";
import { lc } from "@/app/language-content/iLanguageContent";

export const Breadcrumb = () => {
  const t = useTranslations();

  const homeElement = `${t(lc.site_navigation_home)}`;
  const separator = <span className="bd-seperator">{">"}</span>;

  const paths = usePathname();
  const pathNames = paths
    .split("/")
    .filter((path) => !locales.includes(path))
    .filter((p) => p);

  const translateLink = (link: string) => {
    let linlkName: string = link;
    switch (link.toLocaleLowerCase()) {
      case "services":
        linlkName = t(lc.site_navigation_services);
        break;
      case "about":
        linlkName = t(lc.site_navigation_about_us);
        break;
      case "career":
        linlkName = t(lc.site_navigation_career);
        break;
    }
    return linlkName;
  };

  return (
    <>
      <ul
        className={`body-content bd-container ${
          pathNames.length ? "" : "hidden"
        }`}
      >
        <li className={"bd-list"}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let pathAfterLocale = paths.split("/").slice(2).join("/");

          let itemClasses =
            `/${pathAfterLocale}` === href
              ? `${"bd-list"} ${"bd-active"}`
              : "bd-list";
          let itemLink = translateLink(link);
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
