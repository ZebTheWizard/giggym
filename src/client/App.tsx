import React from "react";
import { Route } from "react-router-dom";
import { Navigation } from "./components";
import { Helmet } from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { Auth } from "./providers";
import { routes } from "./routes";

library.add(fab, fas);

export const App = function () {
  return (
    <Auth>
      <div className="sm:p-3 p-1">
        <Helmet>
          <meta charSet="utf-8" />
          <html className="text-font-muted bg-white default-theme" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/assets/devicon-colors.css" />
          <link rel="stylesheet" href="/assets/main.css" />
        </Helmet>

        <Navigation />

        <div className="container mx-auto">
          {routes.map(({ ...route }, i) => (
            <Route key={i} {...route} />
          ))}
        </div>
      </div>
    </Auth>
  );
};
