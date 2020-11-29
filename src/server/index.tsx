import React from "react";
import { https } from "firebase-functions";
import { renderToString } from "react-dom/server";
import { App } from "../client/App";
import { StaticRouter, matchPath } from "react-router-dom";
import { Helmet } from "react-helmet";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { routes } from "../client/routes";

interface IPageComponent extends React.FunctionComponent {
  asyncData?: () => Promise<any>;
}

export const ReactApp = https.onRequest(async (req: https.Request, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const currentRoute = routes.find((route) => matchPath(req.url, route));
  const component = currentRoute?.component as IPageComponent;
  const asyncData = await component?.asyncData?.call({ req, res, mode: "server" });

  const content = renderToString(
    <StaticRouter location={req.url} context={asyncData}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  const page = `<!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        ${helmet.link.toString()}
        <style id="fontawesome" type="text/css">${dom.css()}</style>
        ${helmet.script.toString()}
        ${helmet.style.toString()}
        <script>window.__ssr_data__ = ${JSON.stringify(asyncData)}</script>
        <script defer src="/assets/index_ssr.js"></script>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root" role="presentation">${content}</div>
    </body>
    </html>`;

  res.send(page);
});
