import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import Link from "next/link";
import { createClient } from "../../supabase/server";
import { ArrowUpRight, CheckCircle2, Zap, Shield, Users } from "lucide-react";
import { ErrorDisplay } from "@/components/error-display";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let plans = [];
  let fetchError = null;

  try {
    const response = await supabase.functions.invoke(
      "supabase-functions-get-plans",
    );

    if (response.error) {
      console.error("Error fetching plans:", response.error);
      fetchError = response.error;
    } else {
      plans = response.data || [];
    }
  } catch (error) {
    console.error("Exception fetching plans:", error);
    fetchError = error;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              ✨ Powerful Content Creation Tools ✨
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform helps you create high-quality content in
              minutes, not hours. 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "⚡ AI-Powered Generation",
                description:
                  "Create content 10x faster than writing from scratch 🔥",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "🧩 Customizable Templates",
                description:
                  "Dozens of pre-built templates for any marketing need 📝",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "🎭 Tone & Style Control",
                description:
                  "Adjust content to match your brand's unique voice 🎯",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "💾 Export Options",
                description:
                  "Download in multiple formats or copy directly to clipboard 📋",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              📚 Content Templates for Every Need 📚
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our library of templates designed for various marketing
              purposes. ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "📝 Blog Posts",
                description:
                  "SEO-optimized articles with engaging headlines and structured content 🔍",
              },
              {
                title: "📱 Social Media",
                description:
                  "Attention-grabbing posts optimized for each platform's unique format 🚀",
              },
              {
                title: "💰 Ad Copy",
                description:
                  "Compelling advertisements that drive clicks and conversions 🎯",
              },
              {
                title: "🛍️ Product Descriptions",
                description:
                  "Persuasive copy that highlights benefits and features ✅",
              },
              {
                title: "📧 Email Campaigns",
                description:
                  "Subject lines and body content that boost open and click rates 📈",
              },
              {
                title: "🏆 Landing Pages",
                description:
                  "Conversion-focused copy that turns visitors into customers 💸",
              },
            ].map((template, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <p className="text-gray-600">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-blue-100 mt-2">
              Our platform's impact by the numbers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-700/50 p-6 rounded-xl hover:bg-blue-700/70 transition-all">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100 mb-2">Templates Generated</div>
              <p className="text-sm text-blue-200">
                Based on our platform analytics from the last 12 months, with an
                average of 800+ new templates created monthly.
              </p>
            </div>
            <div className="bg-blue-700/50 p-6 rounded-xl hover:bg-blue-700/70 transition-all">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100 mb-2">Happy Customers</div>
              <p className="text-sm text-blue-200">
                Verified through customer reviews with an average satisfaction
                rating of 4.8/5 stars across review platforms.
              </p>
            </div>
            <div className="bg-blue-700/50 p-6 rounded-xl hover:bg-blue-700/70 transition-all">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 mb-2">Uptime Guaranteed</div>
              <p className="text-sm text-blue-200">
                Backed by our SLA and independently verified by our monitoring
                system with historical uptime logs available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              💰 Simple, Transparent Pricing 💰
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees. ✨
            </p>
          </div>

          {fetchError ? (
            <div className="max-w-md mx-auto">
              <ErrorDisplay
                title="Unable to load pricing plans"
                message="We're experiencing technical difficulties loading our pricing information. Please try again later."
                className="mb-8"
              />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {Array.isArray(plans) && plans.length > 0 ? (
                <>
                  {plans
                    .filter((item) => item && item.price !== 1500)
                    .map((item) => (
                      <PricingCard key={item.id} item={item} user={user} />
                    ))}
                  <div className="col-span-full text-center mt-6">
                    <p className="text-gray-600 italic">
                      Our premium plan is priced at $75/month to provide you
                      with unlimited access to our advanced AI content
                      generation tools, priority support, and exclusive
                      templates - delivering professional-grade content at a
                      fraction of the cost of hiring a copywriter.
                    </p>
                  </div>
                </>
              ) : (
                <div className="col-span-full text-center">
                  <p className="text-gray-600">
                    No pricing plans available at the moment.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their
            business.
          </p>
          <Link
            href="/sign-in"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
