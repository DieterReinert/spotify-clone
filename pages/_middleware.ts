import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  if (signedinPages.find((p) => p === pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect(`${origin}/signin`);
    }
  }
}
