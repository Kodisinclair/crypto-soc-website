(() => {
  var e = {};
  (e.id = 190),
    (e.ids = [190]),
    (e.modules = {
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1780: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 4085));
      },
      2201: (e, r, t) => {
        "use strict";
        t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => u,
            pages: () => l,
            routeModule: () => c,
            tree: () => d,
          });
        var s = t(5239),
          o = t(8088),
          i = t(8170),
          n = t.n(i),
          a = t(893),
          p = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (p[e] = () => a[e]);
        t.d(r, p);
        let d = {
            children: [
              "",
              {
                children: [
                  "whitepaper",
                  {
                    children: [
                      "__PAGE__",
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 5154)),
                          "/Users/kodi/Desktop/Crypto-soc-site/src/app/whitepaper/page.tsx",
                        ],
                      },
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(t.bind(t, 8042)),
                  "/Users/kodi/Desktop/Crypto-soc-site/src/app/layout.tsx",
                ],
                "not-found": [
                  () => Promise.resolve().then(t.t.bind(t, 7398, 23)),
                  "next/dist/client/components/not-found-error",
                ],
                forbidden: [
                  () => Promise.resolve().then(t.t.bind(t, 9999, 23)),
                  "next/dist/client/components/forbidden-error",
                ],
                unauthorized: [
                  () => Promise.resolve().then(t.t.bind(t, 5284, 23)),
                  "next/dist/client/components/unauthorized-error",
                ],
              },
            ],
          }.children,
          l = [
            "/Users/kodi/Desktop/Crypto-soc-site/src/app/whitepaper/page.tsx",
          ],
          u = { require: t, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: "/whitepaper/page",
              pathname: "/whitepaper",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      3023: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => s });
        let s = (0, t(2907).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/kodi/Desktop/Crypto-soc-site/src/app/whitepaper/Hero.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/kodi/Desktop/Crypto-soc-site/src/app/whitepaper/Hero.tsx",
          "default",
        );
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      4085: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => o });
        var s = t(687);
        let o = () =>
          (0, s.jsx)("div", {
            className:
              "mt-20 relative w-full flex justify-center items-center bg-black min-h-screen",
            children: (0, s.jsx)("div", {
              className: "w-full max-w-6xl h-[90vh] px-4",
              children: (0, s.jsx)("iframe", {
                src: "/whitepaper.pdf",
                title: "Whitepaper PDF",
                className: "w-full h-full border border-gray-700 rounded-md",
                style: { backgroundColor: "black" },
              }),
            }),
          });
      },
      5154: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => i });
        var s = t(7413),
          o = t(3023);
        let i = () =>
          (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(o.default, {}) });
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      9572: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 3023));
      },
    });
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [283, 704], () => t(2201));
  module.exports = s;
})();
