import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Register({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm_password") as string;

    if (password !== confirmPassword) {
      return redirect("/register?message=Passwords do not match");
    }

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/register?message=Could not register user");
    }

    return redirect("/register?message=Check email to continue registration process");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/assets/BG.png')" }}
    >
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4">REGISTER</h1>
        <form className="space-y-4" method="post">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
          </div>
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
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <SubmitButton
              formAction={signUp}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-footer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              pendingText="Registering..."
            >
              REGISTER
            </SubmitButton>
          </div>
          <div className="text-center text-sm">
            Have an account already?{" "}
            <Link href="/login" legacyBehavior>
              <a className="font-medium text-custom-footer hover:text-indigo-500">LOGIN</a>
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