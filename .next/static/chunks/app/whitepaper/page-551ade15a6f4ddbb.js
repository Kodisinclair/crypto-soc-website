(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [190],
  {
    3724: (e, l, r) => {
      Promise.resolve().then(r.bind(r, 5957));
    },
    5957: (e, l, r) => {
      "use strict";
      r.d(l, { default: () => a });
      var s = r(5155);
      let a = () =>
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
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [441, 684, 358], () => l(3724)), (_N_E = e.O());
  },
]);
