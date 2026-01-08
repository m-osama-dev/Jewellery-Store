import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/dbConnection";
import User from "@/app/models/userModel";
import bcrypt from "bcryptjs";

// GET all users
export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch users" }, { status: 500 });
  }
}

// POST (Sign up user)
export async function POST(req) {
  try {
    await connectMongoDB();
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ success: false, message: "Error creating user" }, { status: 500 });
  }
}
