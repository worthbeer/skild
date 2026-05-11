import { ClerkProvider } from "@clerk/tanstack-react-start";
import Navbar from "#/components/Navbar";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import Crosshair from "#/components/Crosshair";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Skild the registry for Agentic Intelligence",
      },
      {
        name: "description",
        content:
          "Discover, publish, and operate reusable agent capabilites from a route-driven workspace",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere">
        <ClerkProvider>
          <div id="root-layout">
            <header>
              <div className="frame">
                <Navbar />
                <Crosshair />
                <Crosshair />
              </div>
            </header>
            <main>
              <div className="frame">{children}</div>
            </main>
          </div>
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </ClerkProvider>
      </body>
    </html>
  );
}
