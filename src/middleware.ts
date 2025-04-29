import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const WORDPRESS_HOST = 'https://UCCryptoSocDao.org.nz'

const rewrites = new Map([
    ['/mission', false],
])

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    if (rewrites.has(path) && rewrites.get(path) === true) {
        const originalResponse = await fetch(`${WORDPRESS_HOST}${path}`)

        const contentType = originalResponse.headers.get('content-type')
        if (contentType && contentType.includes('text/html')) {
            const originalBody = await originalResponse.text()

            const replaceUrls = (body: string) => {
                return body
                    .replace(/((href|src)=["'])https?:\/\/cryptocurrency\.org\.nz(\/[^"']*)?(['"])/g, (match, p1, _, p3, p4) => {
                        // Remove trailing slash and normalize the path
                        const urlPath = (p3 || '').replace(/\/+$/, '')
                        const fullPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`

                        if (rewrites.has(fullPath) || fullPath === '') {
                            return `${p1}${fullPath}${p4}`
                        }

                        // Return original match for other URLs (css, js, media)
                        return match
                    })
                    .replace(/href="https:\/\/cryptocurrency\.org\.nz(\/)?"/g, 'href="/"')
            }
            const transformedBody = replaceUrls(originalBody)

            return new NextResponse(transformedBody, {
                status: originalResponse.status,
                headers: {
                    'Content-Type': 'text/html',
                    ...Object.fromEntries(Array.from(originalResponse.headers.entries()).filter(([key]) => ['content-type', 'etag', 'cache-control'].includes(key.toLowerCase())))
                }
            })
        }

        return NextResponse.rewrite(new URL(`${WORDPRESS_HOST}${path}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
