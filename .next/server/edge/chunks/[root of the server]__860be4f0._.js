(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__860be4f0._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
const WORDPRESS_HOST = 'https://UCCryptoSocDao.org.nz';
const rewrites = new Map([
    [
        '/whitepaper',
        false
    ]
]);
async function middleware(request) {
    const path = request.nextUrl.pathname;
    if (rewrites.has(path) && rewrites.get(path) === true) {
        const originalResponse = await fetch(`${WORDPRESS_HOST}${path}`);
        const contentType = originalResponse.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
            const originalBody = await originalResponse.text();
            const replaceUrls = (body)=>{
                return body.replace(/((href|src)=["'])https?:\/\/cryptocurrency\.org\.nz(\/[^"']*)?(['"])/g, (match, p1, _, p3, p4)=>{
                    // Remove trailing slash and normalize the path
                    const urlPath = (p3 || '').replace(/\/+$/, '');
                    const fullPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
                    if (rewrites.has(fullPath) || fullPath === '') {
                        return `${p1}${fullPath}${p4}`;
                    }
                    // Return original match for other URLs (css, js, media)
                    return match;
                }).replace(/href="https:\/\/cryptocurrency\.org\.nz(\/)?"/g, 'href="/"');
            };
            const transformedBody = replaceUrls(originalBody);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](transformedBody, {
                status: originalResponse.status,
                headers: {
                    'Content-Type': 'text/html',
                    ...Object.fromEntries(Array.from(originalResponse.headers.entries()).filter(([key])=>[
                            'content-type',
                            'etag',
                            'cache-control'
                        ].includes(key.toLowerCase())))
                }
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`${WORDPRESS_HOST}${path}`, request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__860be4f0._.js.map