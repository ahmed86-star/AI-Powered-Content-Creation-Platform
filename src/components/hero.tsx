import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent2-100 opacity-80" />

      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent2-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-100 text-brand-800 font-medium text-sm tracking-wide">
              AI-Powered Content Creation Platform
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent2-600">
                AI-Powered
              </span>{" "}
              Content in Minutes
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Generate high-quality marketing content with our AI platform.
              Perfect for freelancers and small businesses looking to scale
              their content creation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Creating Free
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Check className="w-5 h-5 text-brand-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Check className="w-5 h-5 text-brand-500" />
                <span>Generate 5 free templates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Check className="w-5 h-5 text-brand-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
