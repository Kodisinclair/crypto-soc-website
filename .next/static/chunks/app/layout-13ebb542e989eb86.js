(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    347: () => {},
    1963: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 6874, 23)),
        Promise.resolve().then(a.t.bind(a, 3063, 23)),
        Promise.resolve().then(a.t.bind(a, 6141, 23)),
        Promise.resolve().then(a.t.bind(a, 6696, 23)),
        Promise.resolve().then(a.t.bind(a, 347, 23)),
        Promise.resolve().then(a.bind(a, 4737));
    },
    4737: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => C });
      var s = a(5155),
        r = a(2115);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) =>
            a ? a.toUpperCase() : t.toLowerCase(),
          ),
        n = (e) => {
          let t = i(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        l = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t
            .filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let d = (0, r.forwardRef)((e, t) => {
          let {
            color: a = "currentColor",
            size: s = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: i,
            className: n = "",
            children: d,
            iconNode: x,
            ...h
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: s,
              height: s,
              stroke: a,
              strokeWidth: i ? (24 * Number(o)) / Number(s) : o,
              className: l("lucide", n),
              ...h,
            },
            [
              ...x.map((e) => {
                let [t, a] = e;
                return (0, r.createElement)(t, a);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ],
          );
        }),
        x = (e, t) => {
          let a = (0, r.forwardRef)((a, s) => {
            let { className: i, ...c } = a;
            return (0, r.createElement)(d, {
              ref: s,
              iconNode: t,
              className: l("lucide-".concat(o(n(e))), "lucide-".concat(e), i),
              ...c,
            });
          });
          return (a.displayName = n(e)), a;
        },
        h = x("x", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        m = x("menu", [
          ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
          ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
          ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
        ]),
        p = x("house", [
          [
            "path",
            { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
          ],
          [
            "path",
            {
              d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              key: "1d0kgt",
            },
          ],
        ]),
        g = x("book-text", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "M8 11h8", key: "vwpz6n" }],
          ["path", { d: "M8 7h6", key: "1f0q6e" }],
        ]),
        u = x("swords", [
          [
            "polyline",
            { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" },
          ],
          ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
          ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
          ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
          [
            "polyline",
            { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" },
          ],
          ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
          ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
          ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }],
        ]),
        v = x("book", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
        ]),
        b = [
          { text: "Home", path: "/", icon: p, isDropdown: !1 },
          { text: "Whitepaper", path: "/whitepaper", icon: g, isDropdown: !1 },
          { text: "DAO", path: "/dao", icon: u, isDropdown: !1 },
          { text: "History", path: "/history", icon: v, isDropdown: !1 },
          {
            text: "Support us",
            path: "mailto:UCCryptoSocDAO@protonmail.com",
            icon: x("handshake", [
              ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
              [
                "path",
                {
                  d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
                  key: "9pr0kb",
                },
              ],
              ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
              ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
              ["path", { d: "M3 4h8", key: "1ep09j" }],
            ]),
            isDropdown: !1,
          },
          {
            text: "Contact",
            icon: x("mail", [
              [
                "rect",
                {
                  width: "20",
                  height: "16",
                  x: "2",
                  y: "4",
                  rx: "2",
                  key: "18n3k1",
                },
              ],
              [
                "path",
                {
                  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                  key: "1ocrg3",
                },
              ],
            ]),
            path: "mailto:UCCryptoSocDAO@protonmail.com",
            isDropdown: !1,
          },
        ],
        y = (e) => !0 === e.isDropdown,
        f = () => {
          let e = [];
          return (
            b.forEach((t) => {
              if (y(t)) {
                var a;
                null === (a = t.sections) ||
                  void 0 === a ||
                  a.forEach((t) => {
                    t.items.forEach((a) => {
                      e.push({
                        title: a.title,
                        path: a.path,
                        icon: a.icon,
                        section: t.title,
                        hasSubItems: a.hasSubItems,
                        subItems: a.subItems,
                      });
                    });
                  });
              } else
                e.push({ title: t.text, path: t.path || "#", icon: t.icon });
            }),
            e
          );
        };
      var k = a(6874),
        w = a.n(k);
      let N = (e) => {
          var t, a;
          let { item: o } = e;
          return o.hasSubItems &&
            (null === (t = o.subItems) || void 0 === t ? void 0 : t.length)
            ? (0, s.jsxs)("div", {
                className: "relative group/subdropdown",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] group/item",
                    children: [
                      (0, s.jsx)("span", {
                        className: "text-orange-400 mt-1 flex-shrink-0",
                        children: (0, r.createElement)(o.icon, { size: 20 }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, s.jsx)("span", {
                                className:
                                  "text-white block group-hover/item:text-orange-400 transition-colors text-base",
                                children: o.title,
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "text-sm transition-transform duration-300 group-hover/subdropdown:rotate-180",
                                children: "▾",
                              }),
                            ],
                          }),
                          (0, s.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: o.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute left-0 top-full w-full min-w-[220px] bg-black/95 backdrop-blur-md  border border-orange-500/30 rounded-xl p-2 opacity-0 invisible  group-hover/subdropdown:opacity-100 group-hover/subdropdown:visible transform  translate-y-2 group-hover/subdropdown:translate-y-0 transition-all duration-300 shadow-xl shadow-orange-900/30 z-50 ml-8",
                    children:
                      null === (a = o.subItems) || void 0 === a
                        ? void 0
                        : a.map((e, t) =>
                            (0, s.jsx)(
                              "a",
                              {
                                href: e.path,
                                className:
                                  "block py-2 px-3 my-1 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]",
                                children: (0, s.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-orange-400 flex-shrink-0",
                                      children: (0, r.createElement)(e.icon, {
                                        size: 16,
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "text-white block hover:text-orange-400 transition-colors text-sm",
                                          children: e.title,
                                        }),
                                        (0, s.jsx)("span", {
                                          className: "text-xs text-gray-400",
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              t,
                            ),
                          ),
                  }),
                ],
              })
            : (0, s.jsxs)("a", {
                href: o.path,
                className:
                  "flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] group/item",
                children: [
                  (0, s.jsx)("span", {
                    className: "text-orange-400 mt-1 flex-shrink-0",
                    children: (0, r.createElement)(o.icon, { size: 20 }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "text-white block group-hover/item:text-orange-400 transition-colors text-base",
                        children: o.title,
                      }),
                      (0, s.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: o.description,
                      }),
                    ],
                  }),
                ],
              });
        },
        j = (e) => {
          let { text: t, link: a, icon: o, dropdownContent: i } = e;
          return i
            ? (0, s.jsxs)("div", {
                className: "relative group",
                children: [
                  (0, s.jsxs)("button", {
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300  hover:text-white hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] font-medium text-base",
                    children: [
                      o &&
                        (0, s.jsx)("span", {
                          className: "text-orange-400",
                          children: (0, r.createElement)(o, { size: 20 }),
                        }),
                      t,
                      (0, s.jsx)("span", {
                        className:
                          "text-sm transition-transform duration-300 group-hover:rotate-180",
                        children: "▾",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute right-0 top-full w-[600px] bg-black/95 backdrop-blur-md  border border-orange-500/30 rounded-xl p-4 opacity-0 invisible  group-hover:opacity-100 group-hover:visible transform  translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-orange-900/30 z-50",
                    children: i,
                  }),
                ],
              })
            : (0, s.jsxs)("a", {
                href: a || "#",
                className:
                  "px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10  transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]  font-medium flex items-center gap-2 text-base whitespace-nowrap",
                children: [
                  o &&
                    (0, s.jsx)("span", {
                      className: "text-orange-400",
                      children: (0, r.createElement)(o, { size: 18 }),
                    }),
                  t,
                ],
              });
        },
        _ = (e) => {
          var t, a;
          let { item: o } = e,
            [i, n] = (0, r.useState)(!1);
          return o.hasSubItems &&
            (null === (t = o.subItems) || void 0 === t ? void 0 : t.length)
            ? (0, s.jsxs)("div", {
                className: "group/mobile-sub relative",
                children: [
                  (0, s.jsxs)("button", {
                    onClick: () => n(!i),
                    className:
                      "w-full px-4 py-2 rounded-lg text-gray-400 hover:text-white  hover:bg-orange-500/10 transition-colors text-xs sm:text-sm flex items-center justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, r.createElement)(o.icon, {
                            size: 16,
                            className: "text-orange-400",
                          }),
                          o.title,
                        ],
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "text-xs transition-transform duration-300 ".concat(
                            i ? "rotate-180" : "",
                          ),
                        children: "▾",
                      }),
                    ],
                  }),
                  i &&
                    (0, s.jsx)("div", {
                      className: "pl-8 border-l border-orange-500/30 ml-4 mt-1",
                      children:
                        null === (a = o.subItems) || void 0 === a
                          ? void 0
                          : a.map((e, t) =>
                              (0, s.jsxs)(
                                "a",
                                {
                                  href: e.path,
                                  className:
                                    "block px-4 py-2 rounded-lg text-gray-400 hover:text-white  hover:bg-orange-500/10 transition-colors text-xs flex items-center gap-2",
                                  children: [
                                    (0, r.createElement)(e.icon, {
                                      size: 14,
                                      className: "text-orange-400",
                                    }),
                                    e.title,
                                  ],
                                },
                                t,
                              ),
                            ),
                    }),
                ],
              })
            : (0, s.jsxs)("a", {
                href: o.path,
                className:
                  "block px-4 py-2 rounded-lg text-gray-400 hover:text-white  hover:bg-orange-500/10 transition-colors text-xs sm:text-sm flex items-center gap-2",
                children: [
                  (0, r.createElement)(o.icon, {
                    size: 16,
                    className: "text-orange-400",
                  }),
                  o.title,
                ],
              });
        },
        C = () => {
          var e;
          let [t, a] = (0, r.useState)(!1),
            o = f(),
            i = o.filter(
              (e) =>
                e.section &&
                ["Crypto Basics", "Advanced Topics"].includes(e.section),
            ),
            n = o.filter((e) => !e.section);
          return (0, s.jsxs)("nav", {
            className:
              "fixed top-0 left-0 right-0 bg-black backdrop-blur-md z-50 border-b border-orange-500/20 shadow-lg shadow-zinc-900/50",
            children: [
              (0, s.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, s.jsxs)("div", {
                  className: "flex items-center h-25 md:h-18 lg:h-25",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-1 items-center justify-between min-[1200px]:justify-between ",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-center flex-shrink-0 mx-2 md:mx-4",
                          children: (0, s.jsx)(w(), {
                            href: "/",
                            children: (0, s.jsx)("img", {
                              src: "../images/Crypto-soc-Logo.png",
                              alt: "Crypto Soc Logo",
                              className:
                                "h-20 md:h-20 mx-auto hover:border-orange-400",
                            }),
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:space-x-2 lg:space-x-3 flex-shrink-0",
                          children: b.map((e, t) =>
                            (0, s.jsx)(
                              j,
                              {
                                text: e.text,
                                icon: e.icon,
                                link: y(e) ? void 0 : e.path,
                                dropdownContent:
                                  y(e) && e.sections
                                    ? (0, s.jsx)("div", {
                                        className: "grid grid-cols-2 gap-6",
                                        children: e.sections.map((e, t) =>
                                          (0, s.jsxs)(
                                            "div",
                                            {
                                              children: [
                                                (0, s.jsx)("h3", {
                                                  className:
                                                    "text-orange-400 font-semibold mb-3 pl-2 text-base",
                                                  children: e.title,
                                                }),
                                                (0, s.jsx)("div", {
                                                  className: "space-y-1",
                                                  children: e.items.map(
                                                    (e, t) =>
                                                      (0, s.jsx)(
                                                        N,
                                                        { item: e },
                                                        t,
                                                      ),
                                                  ),
                                                }),
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                      })
                                    : void 0,
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "min-[1200px]:hidden flex-shrink-0",
                      children: (0, s.jsx)("button", {
                        onClick: () => a(!t),
                        className:
                          "p-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-colors",
                        "aria-label": t ? "Close menu" : "Open menu",
                        children: t
                          ? (0, s.jsx)(h, { size: 24 })
                          : (0, s.jsx)(m, { size: 24 }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "".concat(
                  t ? "block" : "hidden",
                  " min-[1200px]:hidden bg-black/95 backdrop-blur-md",
                ),
                children: (0, s.jsxs)("div", {
                  className: "px-4 pt-2 pb-4 space-y-1",
                  children: [
                    n.find((e) => "Home" === e.title) &&
                      (0, s.jsxs)("a", {
                        href:
                          null === (e = n.find((e) => "Home" === e.title)) ||
                          void 0 === e
                            ? void 0
                            : e.path,
                        className:
                          "block px-4 py-2 rounded-lg text-gray-300 hover:text-white  hover:bg-orange-500/10 transition-colors text-sm sm:text-base flex items-center gap-3",
                        children: [
                          (0, r.createElement)(
                            n.find((e) => "Home" === e.title).icon,
                            { className: "text-orange-400" },
                          ),
                          "Home",
                        ],
                      }),
                    i.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "px-4 py-2",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "font-medium text-orange-400 mb-2 text-sm sm:text-base flex items-center gap-2",
                            children: [
                              (0, r.createElement)(
                                b.find((e) => "Learn" === e.text).icon,
                                { className: "text-orange-400" },
                              ),
                              "Learn",
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "pl-4 space-y-2",
                            children: i.map((e, t) =>
                              (0, s.jsx)(_, { item: e }, t),
                            ),
                          }),
                        ],
                      }),
                    n
                      .filter((e) => "Home" !== e.title)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "a",
                          {
                            href: e.path,
                            className:
                              "block px-4 py-2 rounded-lg text-gray-300 hover:text-white  hover:bg-orange-500/10 transition-colors text-sm sm:text-base flex items-center gap-3",
                            children: [
                              (0, r.createElement)(e.icon, {
                                size: 18,
                                className: "text-orange-400",
                              }),
                              e.title,
                            ],
                          },
                          t,
                        ),
                      ),
                  ],
                }),
              }),
            ],
          });
        };
    },
    6141: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Alegreya SC', 'Alegreya SC Fallback'",
          fontStyle: "normal",
        },
        className: "__className_da81c5",
        variable: "__variable_da81c5",
      };
    },
    6696: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_d65c78",
        variable: "__variable_d65c78",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [174, 690, 874, 63, 441, 684, 358], () => t(1963)), (_N_E = e.O());
  },
]);
