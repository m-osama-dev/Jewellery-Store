import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ;

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ loggedIn: false });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ loggedIn: true, user: decoded });
  } catch (error) {
    return NextResponse.json({ loggedIn: false });
  }
}
