"use client";

import { useEffect, useState } from "react";
import { Dropdown } from "../../commom/dropdown/dropdown";
import { useTranslations } from "next-intl";

import { lc } from "@/app/language-content/iLanguageContent";
import { FaPalette } from "react-icons/fa";

type theme = {
  text: string;
  value: string;
};

const themes: theme[] = [
  { text: "Light mode", value: "light" },
  { text: "Dark mode", value: "dark" },
  { text: "Custom mode", value: "custom" },
];

const ThemeSwitcher = () => {
  const t = useTranslations();

  const [selectedTheme, setSelectedTheme] = useState("");

  useEffect(() => {
    const savedValue = window.localStorage.getItem("selectedTheme") || "";
    setSelectedTheme(savedValue);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

    const updateTheme = () => {
      const storedTheme = localStorage.getItem("selectedTheme");
      const setTheme = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
        setSelectedTheme(theme);
      };

      if (storedTheme !== null) {
        setTheme(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            setTheme("dark");
            break;
          case prefersLight.matches:
            setTheme("light");
            break;
          default:
            break;
        }
      }
    };

    updateTheme();

    prefersDark.addEventListener("change", updateTheme);
    prefersLight.addEventListener("change", updateTheme);

    return () => {
      prefersDark.removeEventListener("change", updateTheme);
      prefersLight.removeEventListener("change", updateTheme);
    };
  }, []);

  const handleThemeChange = (selectedTheme: theme) => {
    setSelectedTheme(selectedTheme.value);
    document.documentElement.setAttribute("data-theme", selectedTheme.value);
    localStorage.setItem("selectedTheme", selectedTheme.value);
  };

  return (
    <Dropdown
      label={{ text: t(lc.common_theme), icon: <FaPalette /> }}
      dropdownItems={themes}
      onSelectedItem={handleThemeChange}
    />
  );
};

export default ThemeSwitcher;
