import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Extract user registration data from the request body
  const { email, password } = await request.json();

  // Create a Supabase client instance
  const supabase = createClient();

  try {
    // Create a new user with the provided email and password
    const { data, error } = await supabase
      .from("users")
      .insert([{ some_column: "someValue", other_column: "otherValue" }])

    if (error) {
      // Handle error
      console.error("Error creating user:", error);
      return NextResponse.error();
    }

    // User created successfully, redirect to protected route
    const origin = new URL(request.url).origin;
    return NextResponse.redirect(`${origin}/protected`);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.error();
  }
}
