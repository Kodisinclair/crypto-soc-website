module.exports = {
  "[project]/src/app/dao/queries.ts [app-ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        daoQuery: () => daoQuery,
        proposalQuery: () => proposalQuery,
      });
      const proposalQuery = `
  query GetProposals($daoAddress: String!) {
    proposals(where: { dao: $daoAddress }) {
      id
      yesVotes
      noVotes
      yesBalance
      noBalance
      createdAt
      title
      description
      passed
      votingEnds
      processed
      dao {
        totalShares
        quorumPercent
      }
      votes {
        id
        balance
      }
    }
  }
`;
      const daoQuery = `
{
  dao(id: "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a") {
    id
    createdAt
    proposalCount
    activeMemberCount
    totalShares
    proposalOffering
    profile: records(
      first: 1
      orderBy: createdAt
      orderDirection: desc
      where: { table: "daoProfile" }
    ) {
      createdAt
      createdBy
      contentType
      content
    }
  }
}
`;
    }
  },
  "[project]/src/app/dao/fetchDAO.ts [app-ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      // lib/fetchDAO.ts
      __turbopack_context__.s({
        fetchDAOData: () => fetchDAOData,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dao$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/app/dao/queries.ts [app-ssr] (ecmascript)",
        );
      const daoAddress = "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a";
      async function fetchDAOData() {
        const endpoint =
          "https://gateway-arbitrum.network.thegraph.com/api/09ee157c2e5e6598d352197e957932f6/subgraphs/id/CgH5vtz9CJPdcSmD3XEh8fCVDjQjnRwrSawg71T1ySXW";
        try {
          const [proposalsResponse, daoResponse] = await Promise.all([
            fetch(endpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dao$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "proposalQuery"
                  ],
                variables: {
                  daoAddress,
                },
              }),
            }),
            fetch(endpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dao$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "daoQuery"
                  ],
              }),
            }),
          ]);
          const proposalsData = await proposalsResponse.json();
          const daoData = await daoResponse.json();
          if (proposalsData.errors || daoData.errors)
            throw new Error("GraphQL query failed");
          const formattedProposals = proposalsData.data.proposals.map(
            (proposal) => {
              const totalVoteBalance =
                Number(proposal.yesBalance) + Number(proposal.noBalance);
              const quorumRequired =
                (Number(proposal.dao.totalShares) *
                  Number(proposal.dao.quorumPercent)) /
                100;
              const progressPercent = (totalVoteBalance / quorumRequired) * 100;
              const date = new Date(Number(proposal.createdAt) * 1000);
              const ending = new Date(Number(proposal.votingEnds) * 1000);
              const currentDate = new Date();
              let propStatus;
              if (currentDate > ending) {
                propStatus =
                  totalVoteBalance >= quorumRequired
                    ? Number(proposal.yesBalance) > Number(proposal.noBalance)
                      ? "Passed"
                      : "Failed"
                    : "Failed";
              } else {
                propStatus = "Active";
              }
              return {
                title: proposal.title || `Proposal #${proposal.id}`,
                description: proposal.description || "No description provided",
                id: proposal.id,
                progress: Math.min(progressPercent, 100),
                quorum: {
                  current: totalVoteBalance,
                  required: quorumRequired,
                  percent: proposal.dao.quorumPercent,
                },
                status: propStatus,
                createdAt: date.toLocaleDateString("en-GB"),
                raw: proposal,
              };
            },
          );
          const dao = daoData.data.dao;
          return {
            dao: {
              proposals: formattedProposals.sort((a, b) => {
                const dateA = new Date(Number(a.raw.createdAt) * 1000);
                const dateB = new Date(Number(b.raw.createdAt) * 1000);
                return dateB.getTime() - dateA.getTime();
              }),
              activeProposals: dao.proposalOffering,
              activeMemberCount: dao.activeMemberCount || 0,
              totalShares: Math.floor(Number(dao.totalShares || 0) / 1e18),
              proposalCount: dao.proposalCount || formattedProposals.length,
              tokenBalance: "0",
              content: dao.profile?.[0]?.content || null,
              createdAt: new Date(
                Number(dao.createdAt) * 1000,
              ).toLocaleDateString("en-GB"),
            },
          };
        } catch (error) {
          console.error("Error fetching DAO data:", error);
          return {
            dao: {
              proposals: [],
              activeProposals: 0,
              activeMemberCount: 0,
              totalShares: 0,
              proposalCount: 0,
              tokenBalance: "0",
              content: null,
              createdAt: null,
            },
          };
        }
      }
    }
  },
  "[project]/src/app/dao/page.tsx [app-ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      // 'use client';
      // import { useEffect, useState } from 'react';
      // import { fetchDAOData } from './fetchDAO';
      // import gsap from 'gsap';
      // import ScrollTrigger from 'gsap/ScrollTrigger';
      // import Link from 'next/link';
      // gsap.registerPlugin(ScrollTrigger);
      // export default function DAODashboard() {
      // // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const [DAOData, setDAOData] = useState<any>(null);
      //   const [loading, setLoading] = useState(true);
      //   useEffect(() => {
      //     fetchDAOData().then(data => {
      //       setDAOData(data.dao);
      //       setLoading(false);
      //       setTimeout(() => {
      //         gsap.from(".stats-container", { y: 50, opacity: 0, duration: 1, stagger: 0.2 });
      //         gsap.to(".scroll-dot", { y: 8, repeat: -1, duration: 1.5, ease: "power2.inOut", yoyo: true });
      //         gsap.from(".proposal-card", {
      //           y: 100,
      //           opacity: 0,
      //           duration: 0.4,
      //           scrollTrigger: {
      //             trigger: ".proposals-container",
      //             start: "top center+=5",
      //             end: "top center-=100",
      //             scrub: 0.5
      //           }
      //         });
      //         gsap.to(".fade-on-scroll", {
      //           scrollTrigger: {
      //             trigger: "body",
      //             start: "top top",
      //             end: "+=200",
      //             scrub: true
      //           },
      //           opacity: 0,
      //           y: 30
      //         });
      //       }, 0);
      //     });
      //   }, []);
      //   return (
      //     <div className="relative w-full flex flex-col items-center justify-start mt-10 md:mt-20 min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black-600 to-gray-800">
      //       <Link href="/">
      //         <a className="text-white text-sm underline mb-4">← Back to Home</a>
      //         </Link>
      //         <Link href="/">
      //       <a className="text-white text-sm underline mb-4">← Back to Home</a>
      //       </Link>
      //       <div className="w-full text-center px-4 mb-10 md:px-[5%] pt-6 md:pt-8 mt-6 md:mt-10 font-bold text-2xl md:text-4xl text-white">
      //         <h2>DAO Dashboard</h2>
      //         <p className="text-gray-400 text-base font-medium mt-2">Real-time statistics and proposals</p>
      //       </div>
      //       <div className="inline-flex items-center px-4 sm:px-5 sm:py-2.5
      //                         bg-gradient-to-r from-orange-500/20 to-orange-600/10
      //                         hover:from-orange-500/30 hover:to-orange-600/20
      //                         border border-orange-500/40 hover:border-orange-400/60
      //                         rounded-lg text-orange-400 hover:text-orange-300
      //                         shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]
      //                         transition-all duration-300 text-sm sm:text-base">
      //         <a href="https://admin.daohaus.club/#/molochv3/0xa/0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a">
      //             <h2>Visit the DAO</h2>
      //         </a>
      //       </div>
      //       {loading ? (
      //         <div className="flex flex-col items-center justify-center mt-20 text-white">
      //           <div className="loading-spinner mb-4" />
      //           <p>Loading DAO data...</p>
      //         </div>
      //       ) : (
      //         <div className="w-full max-w-5xl px-4 md:px-8 py-10 md:py-20">
      //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stats-container">
      //             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
      //               <h3 className="text-lg font-semibold text-orange-400 mb-2">Members</h3>
      //               <p className="text-2xl font-bold">{DAOData.activeMemberCount}</p>
      //             </div>
      //             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
      //               <h3 className="text-lg font-semibold text-orange-400 mb-2">Total Shares</h3>
      //               <p className="text-2xl font-bold">{DAOData.totalShares}</p>
      //             </div>
      //             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
      //               <h3 className="text-lg font-semibold text-orange-400 mb-2">Proposals</h3>
      //               <p className="text-2xl font-bold">{DAOData.proposalCount}</p>
      //             </div>
      //             <div className="rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white">
      //               <h3 className="text-lg font-semibold text-orange-400 mb-2">Active Proposals</h3>
      //               <p className="text-2xl font-bold">{DAOData.activeProposals}</p>
      //             </div>
      //           </div>
      //           <div className="mt-20">
      //             <h2 className="text-3xl font-bold text-white fade-on-scroll mb-4 mb-5 md:space-y-15 text-center">Proposals</h2>
      //             <div className="proposals-container space-y-10">
      //               {DAOData.proposals.length > 0 ? (
      //                 // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //                 DAOData.proposals.map((proposal: any) => (
      //                   <div className="proposal-card rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-white shadow-xl" key={proposal.id}>
      //                     <h2 className="text-xl font-bold text-orange-400 mb-2">{proposal.title}</h2>
      //                     <p className="text-gray-300 mb-4">{proposal.description}</p>
      //                     <div className="flex flex-col gap-2">
      //                       <div className="text-sm text-gray-400">ID: {proposal.id}</div>
      //                       <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
      //                         <div className={`absolute top-0 left-0 h-full ${proposal.status === 'Failed' ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${proposal.progress}%` }}></div>
      //                       </div>
      //                       <div className="text-sm text-gray-300">
      //                         Quorum: {Math.round(proposal.progress)}% ({proposal.quorum.current} / {proposal.quorum.required} votes)
      //                       </div>
      //                       <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
      //                         <span>Status: <span className={proposal.status === 'Failed' ? 'text-red-400' : 'text-green-400'}>{proposal.status}</span></span>
      //                         <span>Created: {proposal.createdAt}</span>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 ))
      //               ) : (
      //                 <div className="text-center text-white text-lg">No active proposals at the moment.</div>
      //               )}
      //             </div>
      //           </div>
      //         </div>
      //       )}
      //     </div>
      //   );
      // }
      __turbopack_context__.s({
        default: () => DAODashboard,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dao$2f$fetchDAO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/app/dao/fetchDAO.ts [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)",
        );
      ("use client");
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        "default"
      ].registerPlugin(
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "ScrollTrigger"
        ],
      );
      function DAODashboard() {
        const [daoData, setDaoData] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ])(null);
        const [loading, setLoading] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ])(true);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useEffect"
        ])(() => {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dao$2f$fetchDAO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "fetchDAOData"
          ])().then((data) => {
            setDaoData(data.dao);
            setLoading(false);
            setTimeout(() => {
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
                "default"
              ].from(".stats-container", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
              });
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
                "default"
              ].to(".scroll-dot", {
                y: 8,
                repeat: -1,
                duration: 1.5,
                ease: "power2.inOut",
                yoyo: true,
              });
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
                "default"
              ].from(".proposal-card", {
                y: 100,
                opacity: 0,
                duration: 0.4,
                scrollTrigger: {
                  trigger: ".proposals-container",
                  start: "top center+=5",
                  end: "top center-=100",
                  scrub: 0.5,
                },
              });
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
                "default"
              ].to(".fade-on-scroll", {
                scrollTrigger: {
                  trigger: "body",
                  start: "top top",
                  end: "+=200",
                  scrub: true,
                },
                opacity: 0,
                y: 30,
              });
            }, 0);
          });
        }, []);
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className:
              "relative w-full flex flex-col items-center justify-start mt-10 md:mt-20 min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black-600 to-gray-800",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "default"
                ],
                {
                  href: "/",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      className: "text-white text-sm underline mb-4",
                      children: "← Back to Home",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/dao/page.tsx",
                      lineNumber: 214,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/app/dao/page.tsx",
                  lineNumber: 213,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "w-full text-center px-4 mb-10 md:px-[5%] pt-6 md:pt-8 mt-6 md:mt-10 font-bold text-2xl md:text-4xl text-white",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "h2",
                      {
                        children: "DAO Dashboard",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/app/dao/page.tsx",
                        lineNumber: 218,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "p",
                      {
                        className: "text-gray-400 text-base font-medium mt-2",
                        children: "Real-time statistics and proposals",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/app/dao/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/app/dao/page.tsx",
                  lineNumber: 217,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "inline-flex items-center px-4 sm:px-5 sm:py-2.5  bg-gradient-to-r from-orange-500/20 to-orange-600/10 hover:from-orange-500/30 hover:to-orange-600/20 border border-orange-500/40 hover:border-orange-400/60 rounded-lg text-orange-400 hover:text-orange-300  shadow-sm hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] transition-all duration-300 text-sm sm:text-base",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "a",
                    {
                      href: "https://admin.daohaus.club/#/molochv3/0xa/0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h2",
                        {
                          children: "Visit the DAO",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/app/dao/page.tsx",
                          lineNumber: 233,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/dao/page.tsx",
                      lineNumber: 232,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/app/dao/page.tsx",
                  lineNumber: 223,
                  columnNumber: 7,
                },
                this,
              ),
              loading
                ? /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "flex flex-col items-center justify-center mt-20 text-white",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "loading-spinner mb-4",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/dao/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            children: "Loading DAO data...",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/dao/page.tsx",
                            lineNumber: 240,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/dao/page.tsx",
                      lineNumber: 238,
                      columnNumber: 9,
                    },
                    this,
                  )
                : /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "w-full max-w-5xl px-4 md:px-8 py-10 md:py-20",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stats-container",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "h3",
                                      {
                                        className:
                                          "text-lg font-semibold text-orange-400 mb-2",
                                        children: "Members",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "p",
                                      {
                                        className: "text-2xl font-bold",
                                        children:
                                          daoData?.activeMemberCount || 0,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: "[project]/src/app/dao/page.tsx",
                                  lineNumber: 245,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "h3",
                                      {
                                        className:
                                          "text-lg font-semibold text-orange-400 mb-2",
                                        children: "Total Shares",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "p",
                                      {
                                        className: "text-2xl font-bold",
                                        children: daoData?.totalShares || 0,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: "[project]/src/app/dao/page.tsx",
                                  lineNumber: 253,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "h3",
                                      {
                                        className:
                                          "text-lg font-semibold text-orange-400 mb-2",
                                        children: "Proposals",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "p",
                                      {
                                        className: "text-2xl font-bold",
                                        children: daoData?.proposalCount || 0,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: "[project]/src/app/dao/page.tsx",
                                  lineNumber: 259,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-center text-white",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "h3",
                                      {
                                        className:
                                          "text-lg font-semibold text-orange-400 mb-2",
                                        children: "Active Proposals",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "p",
                                      {
                                        className: "text-2xl font-bold",
                                        children: daoData?.activeProposals || 0,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/app/dao/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: "[project]/src/app/dao/page.tsx",
                                  lineNumber: 267,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/app/dao/page.tsx",
                            lineNumber: 244,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "mt-20",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h2",
                                {
                                  className:
                                    "text-3xl font-bold text-white fade-on-scroll mb-4 md:space-y-15 text-center",
                                  children: "Proposals",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/src/app/dao/page.tsx",
                                  lineNumber: 278,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "proposals-container space-y-10",
                                  children:
                                    daoData && daoData.proposals.length > 0
                                      ? daoData.proposals.map((proposal) =>
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "proposal-card rounded-xl border border-orange-500 bg-zinc-800/80 backdrop-blur-sm p-6 text-white shadow-xl",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "h2",
                                                  {
                                                    className:
                                                      "text-xl font-bold text-orange-400 mb-2",
                                                    children: proposal.title,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/src/app/dao/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "p",
                                                  {
                                                    className:
                                                      "text-gray-300 mb-4",
                                                    children:
                                                      proposal.description,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/src/app/dao/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex flex-col gap-2",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "text-sm text-gray-400",
                                                          children: [
                                                            "ID: ",
                                                            proposal.id,
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/src/app/dao/page.tsx",
                                                          lineNumber: 294,
                                                          columnNumber: 23,
                                                        },
                                                        this,
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "relative w-full h-4 bg-gray-700 rounded-full overflow-hidden",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "div",
                                                              {
                                                                className: `absolute top-0 left-0 h-full ${proposal.status === "Failed" ? "bg-red-500" : "bg-green-500"}`,
                                                                style: {
                                                                  width: `${proposal.progress}%`,
                                                                },
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/src/app/dao/page.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 25,
                                                              },
                                                              this,
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/src/app/dao/page.tsx",
                                                          lineNumber: 297,
                                                          columnNumber: 23,
                                                        },
                                                        this,
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "text-sm text-gray-300",
                                                          children: [
                                                            "Quorum: ",
                                                            (
                                                              (proposal.quorum
                                                                .current /
                                                                proposal.quorum
                                                                  .required) *
                                                              100
                                                            ).toPrecision(3),
                                                            "% (",
                                                            Number(
                                                              proposal.quorum
                                                                .current,
                                                            ) / 1e18,
                                                            " /",
                                                            " ",
                                                            Number(
                                                              proposal.quorum
                                                                .required,
                                                            ) / 1e18,
                                                            " votes)",
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/src/app/dao/page.tsx",
                                                          lineNumber: 303,
                                                          columnNumber: 23,
                                                        },
                                                        this,
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex justify-between items-center mt-2 text-sm text-gray-400",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                children: [
                                                                  "Status:",
                                                                  " ",
                                                                  /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        proposal.status ===
                                                                        "Failed"
                                                                          ? "text-red-400"
                                                                          : "text-green-400",
                                                                      children:
                                                                        proposal.status,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        "[project]/src/app/dao/page.tsx",
                                                                      lineNumber: 316,
                                                                      columnNumber: 27,
                                                                    },
                                                                    this,
                                                                  ),
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  "[project]/src/app/dao/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 25,
                                                              },
                                                              this,
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                children: [
                                                                  "Created: ",
                                                                  proposal.createdAt,
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  "[project]/src/app/dao/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25,
                                                              },
                                                              this,
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/src/app/dao/page.tsx",
                                                          lineNumber: 313,
                                                          columnNumber: 23,
                                                        },
                                                        this,
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/src/app/dao/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21,
                                                  },
                                                  this,
                                                ),
                                              ],
                                            },
                                            proposal.id,
                                            true,
                                            {
                                              fileName:
                                                "[project]/src/app/dao/page.tsx",
                                              lineNumber: 285,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        )
                                      : /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "text-center text-white text-lg",
                                            children:
                                              "No active proposals at the moment.",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/app/dao/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/src/app/dao/page.tsx",
                                  lineNumber: 282,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/app/dao/page.tsx",
                            lineNumber: 277,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/dao/page.tsx",
                      lineNumber: 243,
                      columnNumber: 9,
                    },
                    this,
                  ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/dao/page.tsx",
            lineNumber: 212,
            columnNumber: 5,
          },
          this,
        );
      }
    }
  },
};

//# sourceMappingURL=src_app_dao_a3b66dd5._.js.map
