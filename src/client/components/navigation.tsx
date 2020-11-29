import React from "react";
import { Link } from "react-router-dom";
import { HorizontalScroll, LoginButton, Tag } from ".";
import { ThemeButton } from "./theme-button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface INavigationPages {
  [label: string]: {
    icon: IconProp;
    link: string;
  };
}

export function Navigation() {
  const pages: INavigationPages = {
    challenges: { icon: "rocket", link: "/" },
    submissions: { icon: "inbox", link: "/submissions" },
    leaderboards: { icon: "trophy-alt", link: "/leaderboards" },
    "tips & tricks": { icon: "head-side-brain", link: "/tips" },
    paths: { icon: "graduation-cap", link: "/paths" },
  };

  return (
    <div className="mb-3" role="presentation">
      <div className="mx-auto container justify-between flex items-center py-1" role="presentation">
        <Link
          to="/"
          className="uppercase font-bold text-font-bold text-2xl block focus"
          role="link"
          aria-label="Gig Gym: Go to home page.">
          <span aria-hidden="true">gig gym</span>
        </Link>

        <div className="items-center flex" aria-label="Account Stuff">
          <ThemeButton className="mr-2" />
          <LoginButton />
        </div>
      </div>

      <nav className="mx-auto container mt-3" role="presentation" aria-label="Navigation">
        <HorizontalScroll>
          {Object.keys(pages).map((key) => {
            const page = pages[key];
            return (
              <Tag to={page.link} key={key} label={key} icon={page.icon} color="bg-gray-100" />
            );
          })}
        </HorizontalScroll>
      </nav>
    </div>
  );
}
