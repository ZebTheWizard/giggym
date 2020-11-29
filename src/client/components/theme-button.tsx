import React, { useState } from "react";
import { Aspect } from "./aspect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

export interface IThemeButtonProps {}

function getTheme(): boolean {
  const loaded =
    typeof window !== undefined ? JSON.parse(window.localStorage.getItem("dark") || "true") : true;

  return typeof loaded === undefined ? true : loaded;
}

export function ThemeButton(props: React.PropsWithChildren<any>) {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(true);
  const top =
    count > 0 ? (
      <Helmet>
        <html className={`text-font-muted bg-white ${dark ? "dark" : "light"}`} />
      </Helmet>
    ) : (
      <Helmet>
        <html className={`text-font-muted bg-white default-theme`} />
      </Helmet>
    );

  React.useEffect(() => {
    const theme = getTheme();
    console.log("trying to change theme", theme);
    setCount((c) => c + 1);
    setDark(theme);
    window.localStorage.setItem("dark", JSON.stringify(theme));
  }, []);
  return (
    <button
      className={`items-center text-font-bold flex bg-gray-300 hover:bg-gray-200 rounded-lg focus ${props.className}`}
      aria-label="theme toggle"
      tabIndex={0}
      onClick={() => {
        const theme = getTheme();
        setCount((c) => c + 1);
        setDark(!theme);
        window.localStorage.setItem("dark", JSON.stringify(!theme));
      }}
      aria-checked={false}>
      {top}
      <Aspect width="40px" aria-hidden="true">
        <FontAwesomeIcon icon="moon-stars" size="lg" />
      </Aspect>
    </button>
  );
}
