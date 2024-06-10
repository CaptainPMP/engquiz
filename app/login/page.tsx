import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/homepage");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/assets/BG.png')" }}
    >
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4">LOGIN</h1>
        <form className="space-y-4" method="post">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <SubmitButton
              formAction={signIn}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              pendingText="Signing In..."
            >
              LOGIN
            </SubmitButton>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/register" legacyBehavior>
              <a className="font-medium text-indigo-600 hover:text-indigo-500">REGISTER</a>
            </Link>
          </div>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-red-100 text-red-700 text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}