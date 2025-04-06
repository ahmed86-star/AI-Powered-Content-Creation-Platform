import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { signUpAction } from "@/app/actions";
import Navbar from "@/components/navbar";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Dashboard Description */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <h2 className="text-4xl font-bold mb-6 text-center animate-pulse">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                AI Content Generator
              </span>
            </h2>
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 shadow-xl border border-primary/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

              <div className="space-y-8 relative z-10">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-primary transform hover:scale-102 transition-all">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    ✨ Unleash Your Creative Potential ✨
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Generate high-quality marketing content in seconds with our
                    advanced AI technology. Perfect for freelancers and small
                    businesses looking to stand out! 🚀
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all">
                    <h4 className="font-bold text-accent flex items-center gap-2">
                      <span>📝</span> Smart Templates
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Access dozens of pre-built templates for blogs, ads, and
                      social media posts.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all">
                    <h4 className="font-bold text-accent flex items-center gap-2">
                      <span>🎨</span> Customizable Styles
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Adjust tone, length, and style to perfectly match your
                      unique brand voice.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all">
                    <h4 className="font-bold text-accent flex items-center gap-2">
                      <span>💾</span> Export Options
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Download in multiple formats or copy directly to clipboard
                      with just one click.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all">
                    <h4 className="font-bold text-accent flex items-center gap-2">
                      <span>👁️</span> Real-time Preview
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      See changes instantly as you customize your content for
                      maximum efficiency.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-5 rounded-lg text-center transform hover:scale-102 transition-all">
                  <p className="font-medium text-gray-800 flex justify-center items-center gap-2">
                    <span>🎉</span> Join thousands of content creators saving
                    hours every week! <span>⏱️</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-lg">
              <form className="flex flex-col space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Sign up
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                      className="text-primary font-medium hover:underline transition-all"
                      href="/sign-in"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Your password"
                      minLength={6}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <SubmitButton
                  formAction={signUpAction}
                  pendingText="Signing up..."
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
                >
                  Sign up
                </SubmitButton>

                <FormMessage message={searchParams} />
              </form>
            </div>
          </div>
        </div>
        <SmtpMessage />
      </div>
    </>
  );
}
