import { Form, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import appStylesHref from "./app.css?url";
import React from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href=
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
        </link>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="sidebar">
          <div className="sidebar-search">
            <Form id="search-form" role="search">
              <label className="fas fa-search search-input-icon"></label>
              <input
                aria-label="Search contacts"
                id="q"
                name="q"
                placeholder={"Search"}
                type="search"
              />
              <div
                aria-hidden
                hidden={true}
                id="search-spinner"
              />
            </Form>
            <Form method="post">
              <button type="submit" disabled>New</button>
            </Form>
          </div>
          <hr className="sidebar-divider" />
          <nav className="sidebar-nav">
            <ul className="sidebar-list">
              <li className="sidebar-list-item">
                <a href="#">Your Name</a>
              </li>
              <li className="sidebar-list-item">
                <a href="#">Your Friend</a>
              </li>
            </ul>
          </nav>
          <hr className="sidebar-divider" />
          <div className="sidebar-badge">
            <img src="https://remix.run/_brand/remix-letter-glowing.svg" />
            <h4>Remix Contacts</h4>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
