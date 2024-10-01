"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import "./topbar.css";
import { LanguageSwitcher } from "../language-switcher/language-switcher";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGripLinesVertical,
} from "react-icons/fa";
import Link from "next/link";

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    },
    [ref, handler]
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleClickOutside]);
};

export const Topbar = () => {
  const [isThemeDropdown, setIsThemeDropdown] = useState<boolean>(false);
  const themeSwitcherRef = useRef<HTMLDivElement>(null);

  const closeThemeDropdown = () => {
    setIsThemeDropdown(false);
  };

  useClickOutside(themeSwitcherRef, closeThemeDropdown);

  return (
    <>
      <div className="topbar body-content">
        <ul className="right-content">
          <li>
            <Link
              href={
                "https://www.facebook.com/people/TS-Global-TECH/61566470257707/"
              }
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li className="opacity-[0.25]">
            <FaGripLinesVertical />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </>
  );
};
