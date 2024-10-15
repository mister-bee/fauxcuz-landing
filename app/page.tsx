import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Braces, Lightbulb, Target, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center max-w-7xl mx-auto w-full">
        <Link className="flex items-center justify-center" href="#">
          <Braces className="h-6 w-6" />
          <span className="sr-only">FauxCuz</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Test Your Ideas with AI Focus Groups
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  FauxCuz creates AI-powered focus groups to test your products
                  and marketing concepts quickly and affordably.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Diverse AI Personas</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create focus groups with a wide range of AI-generated personas
                  to match your target audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Lightbulb className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Instant Feedback</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get immediate insights and opinions on your products or
                  marketing concepts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Customizable Scenarios</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tailor your focus group sessions with specific scenarios and
                  questions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-primary">1</span>
                <h3 className="text-xl font-bold">Define Your Audience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Specify the demographics and characteristics of your target
                  audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-primary">2</span>
                <h3 className="text-xl font-bold">Create Your Test</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Input your product details or marketing concepts and set up
                  your questions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-primary">3</span>
                <h3 className="text-xl font-bold">Analyze Results</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Review the AI-generated feedback and insights from your
                  virtual focus group.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  &ldquo;FauxCuz has revolutionized our product testing process.
                  We get valuable insights in hours instead of weeks!&rdquo;
                </p>
                <p className="text-sm font-bold">- Sarah J., Product Manager</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  &ldquo;The diversity of AI personas in FauxCuz&apos;s focus
                  groups has helped us uncover blind spots in our marketing
                  strategy.&rdquo;
                </p>
                <p className="text-sm font-bold">
                  - Mike T., Marketing Director
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  &ldquo;As a startup, FauxCuz has been a game-changer. We can
                  now iterate on ideas quickly without breaking the bank.&rdquo;
                </p>
                <p className="text-sm font-bold">- Emily R., Startup Founder</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing Plans:
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 border p-4 rounded-lg">
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-4xl font-bold">$49/mo</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>5 AI focus groups per month</li>
                  <li>Up to 10 participants per group</li>
                  <li>Basic analytics</li>
                </ul>
                <Button>Choose Plan</Button>
              </div>
              <div className="flex flex-col items-center space-y-4 border p-4 rounded-lg bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-4xl font-bold">$99/mo</p>
                <ul className="text-sm space-y-2">
                  <li>15 AI focus groups per month</li>
                  <li>Up to 25 participants per group</li>
                  <li>Advanced analytics</li>
                  <li>Custom scenarios</li>
                </ul>
                <Button variant="secondary">Choose Plan</Button>
              </div>
              <div className="flex flex-col items-center space-y-4 border p-4 rounded-lg">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-4xl font-bold">Custom</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>Unlimited AI focus groups</li>
                  <li>Custom number of participants</li>
                  <li>Advanced analytics & reporting</li>
                  <li>API access</li>
                </ul>
                <Button>Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to revolutionize your product testing?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join FauxCuz today and start getting valuable insights from
                  AI-powered focus groups.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t max-w-7xl mx-auto">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 FauxCuz. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
