"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Coffee,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Menu,
  X,
  Leaf,
  Heart,
  Users,
  Star,
} from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("espresso");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuCategories = {
    espresso: [
      { name: "Espresso", description: "Pure, bold, and intense" },
      { name: "Americano", description: "Espresso with hot water" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk" },
      { name: "Flat White", description: "Velvety microfoam over espresso" },
      { name: "Cappuccino", description: "Classic foam-topped espresso" },
      { name: "Latte", description: "Smooth espresso with steamed milk" },
    ],
    brewed: [
      { name: "Pour Over", description: "Single origin, brewed to order" },
      { name: "Cold Brew", description: "Steeped 18 hours for smoothness" },
      { name: "Drip Coffee", description: "Fresh batch brewed hourly" },
      { name: "French Press", description: "Full-bodied and rich" },
    ],
    specialty: [
      { name: "Honey Oat Latte", description: "Local honey and oat milk" },
      { name: "Lavender Fog", description: "Earl grey with lavender and vanilla" },
      { name: "Mocha", description: "House-made chocolate with espresso" },
      { name: "Chai Latte", description: "Spiced chai with steamed milk" },
      { name: "Matcha Latte", description: "Ceremonial grade matcha" },
    ],
    pastries: [
      { name: "Almond Croissant", description: "Flaky layers with almond cream" },
      { name: "Banana Bread", description: "House-baked, served warm" },
      { name: "Blueberry Scone", description: "Buttery with fresh berries" },
      { name: "Avocado Toast", description: "Sourdough with seasonal toppings" },
    ],
  };

  const testimonials = [
    {
      initials: "SM",
      text: "The pour over here changed my relationship with coffee. You can taste the care in every cup.",
      role: "Regular Guest",
    },
    {
      initials: "JC",
      text: "Brew and Co feels like a second living room. Great coffee, better atmosphere, and the baristas remember your order.",
      role: "Neighborhood Regular",
    },
    {
      initials: "MR",
      text: "Finally, a coffee shop that takes sourcing seriously without being pretentious about it. My go-to spot.",
      role: "Coffee Enthusiast",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold text-brown">
            Brew <span className="text-gold">&</span> Co
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-brown hover:text-gold transition-colors">
              Our Story
            </a>
            <a href="#menu" className="text-brown hover:text-gold transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-brown hover:text-gold transition-colors">
              Gallery
            </a>
            <a href="#location" className="text-brown hover:text-gold transition-colors">
              Visit Us
            </a>
            <Button className="bg-gold hover:bg-gold/90 text-cream rounded-full px-6">
              Order Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-t border-cream-dark px-6 py-4 space-y-4">
            <a href="#about" className="block text-brown hover:text-gold transition-colors">
              Our Story
            </a>
            <a href="#menu" className="block text-brown hover:text-gold transition-colors">
              Menu
            </a>
            <a href="#gallery" className="block text-brown hover:text-gold transition-colors">
              Gallery
            </a>
            <a href="#location" className="block text-brown hover:text-gold transition-colors">
              Visit Us
            </a>
            <Button className="w-full bg-gold hover:bg-gold/90 text-cream rounded-full">
              Order Online
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Split */}
      <section className="pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-cream-dark rounded-full px-4 py-2 text-sm text-taupe">
              <Coffee size={16} className="text-gold" />
              Specialty Coffee Roasters
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-brown leading-tight">
              Coffee crafted with{" "}
              <span className="text-gold">intention</span>
            </h1>
            <p className="text-lg text-taupe max-w-md">
              Every bean hand-selected. Every cup poured with care. Welcome to your
              neighborhood coffee sanctuary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gold hover:bg-gold/90 text-cream rounded-full px-8 py-6 text-lg">
                View Our Menu
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-brown text-brown hover:bg-cream-dark rounded-full px-8 py-6 text-lg"
              >
                Our Story
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Artisan coffee being poured at Brew and Co"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* About Split */}
      <section id="about" className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/feature.png"
              alt="Inside Brew and Co coffee shop"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-gold font-medium tracking-wide uppercase text-sm">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown">
              Where craft meets community
            </h2>
            <p className="text-taupe text-lg leading-relaxed">
              Brew and Co was born from a simple belief: great coffee brings people
              together. We source our beans directly from small farms, roast them
              in-house, and serve them with the kind of care that turns strangers
              into regulars.
            </p>
            <p className="text-taupe text-lg leading-relaxed">
              Our space is designed for lingering—whether you&apos;re here for a quick
              espresso before work or settling in for an afternoon with a good book.
              This is your place. Pull up a chair.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <Leaf className="text-gold mb-2" size={28} />
                <p className="font-display text-xl font-semibold text-brown">
                  Ethically Sourced
                </p>
                <p className="text-taupe text-sm">Direct trade relationships</p>
              </div>
              <div>
                <Heart className="text-gold mb-2" size={28} />
                <p className="font-display text-xl font-semibold text-brown">
                  Roasted Fresh
                </p>
                <p className="text-taupe text-sm">Small batch weekly</p>
              </div>
              <div>
                <Users className="text-gold mb-2" size={28} />
                <p className="font-display text-xl font-semibold text-brown">
                  Community First
                </p>
                <p className="text-taupe text-sm">A space for everyone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section id="menu" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-4">
              Our Menu
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown">
              Crafted with care
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all capitalize ${
                  activeCategory === category
                    ? "bg-gold text-cream"
                    : "bg-cream-dark text-brown hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories[activeCategory as keyof typeof menuCategories].map(
              (item, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl"
                >
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-brown mb-2">
                      {item.name}
                    </h3>
                    <p className="text-taupe">{item.description}</p>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <div className="text-center mt-12">
            <p className="text-taupe mb-4">
              Prices vary by size and customizations. Ask your barista for details.
            </p>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-cream rounded-full px-8"
            >
              Download Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-4">
              Gallery
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream">
              Moments at Brew & Co
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* CSS-styled gallery cards since we only have hero and feature images */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
              <Coffee size={48} className="text-gold/60" />
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cream/20 to-cream/5 flex items-center justify-center col-span-1 row-span-2 md:row-span-1 md:col-span-2">
              <div className="text-center px-6">
                <p className="font-display text-2xl text-cream/90 italic">
                  &quot;Coffee is a language in itself.&quot;
                </p>
                <p className="text-cream/60 mt-2 text-sm">— Jackie Chan</p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-taupe/30 to-taupe/10 flex items-center justify-center">
              <Leaf size={48} className="text-cream/40" />
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cream/10 to-cream/5 flex items-center justify-center">
              <Heart size={48} className="text-gold/50" />
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
              <Star size={48} className="text-cream/40" />
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-taupe/20 to-taupe/5 flex items-center justify-center col-span-2">
              <p className="font-display text-xl text-cream/70 px-6 text-center">
                Follow along @brewandco
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-cream text-brown hover:bg-cream/90 rounded-full px-8">
              <Instagram className="mr-2" size={20} />
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-cream">
                5+
              </p>
              <p className="text-cream/80 mt-2">Years of brewing</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-cream">
                12
              </p>
              <p className="text-cream/80 mt-2">Origin countries</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-cream">
                1000s
              </p>
              <p className="text-cream/80 mt-2">Happy regulars</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-cream">
                ∞
              </p>
              <p className="text-cream/80 mt-2">Cups of love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-4">
              Kind Words
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown">
              From our community
            </h2>
          </div>

          <div className="relative">
            <Card className="bg-cream-dark border-0 rounded-3xl">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl mx-auto mb-6">
                  {testimonials[testimonialIndex].initials}
                </div>
                <p className="font-display text-xl md:text-2xl text-brown leading-relaxed mb-6 italic">
                  &quot;{testimonials[testimonialIndex].text}&quot;
                </p>
                <p className="text-taupe font-medium">
                  {testimonials[testimonialIndex].role}
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-cream-dark hover:bg-gold/10 flex items-center justify-center text-brown transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      testimonialIndex === index ? "bg-gold w-6" : "bg-taupe/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-cream-dark hover:bg-gold/10 flex items-center justify-center text-brown transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-wide uppercase text-sm mb-4">
                Visit Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown mb-6">
                Find your way to great coffee
              </h2>
              <p className="text-taupe text-lg mb-8">
                We&apos;d love to see you. Stop by for a cup, stay for the atmosphere,
                and leave as part of the Brew & Co family.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brown">
                      Location
                    </h3>
                    <p className="text-taupe">
                      Contact us for directions to our cozy neighborhood spot
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Coffee className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brown">
                      Open Daily
                    </h3>
                    <p className="text-taupe">
                      Serving specialty coffee every day of the week
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-8 p-6 bg-white rounded-2xl">
                <h3 className="font-display text-xl font-semibold text-brown mb-4">
                  Get in Touch
                </h3>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-xl border-cream-dark"
                  />
                  <Textarea
                    placeholder="Your message"
                    className="rounded-xl border-cream-dark resize-none"
                    rows={3}
                  />
                  <Button className="w-full bg-gold hover:bg-gold/90 text-cream rounded-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[400px] lg:h-[600px] rounded-3xl bg-gradient-to-br from-brown to-brown/80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-cream" />
                <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-cream" />
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border border-cream" />
              </div>
              <div className="text-center z-10">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-cream" size={32} />
                </div>
                <p className="font-display text-2xl text-cream font-semibold">
                  Brew & Co
                </p>
                <p className="text-cream/70 mt-2">Your neighborhood coffee shop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-24 bg-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cream" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-cream mb-6">
            Ready for your next cup?
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re grabbing a quick espresso or settling in for the
            afternoon, we&apos;ve got a seat with your name on it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gold hover:bg-gold/90 text-cream rounded-full px-10 py-6 text-lg">
              Order Ahead
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream/10 rounded-full px-10 py-6 text-lg"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Full */}
      <footer className="bg-brown pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl font-semibold text-cream mb-4">
                Brew <span className="text-gold">&</span> Co
              </h3>
              <p className="text-cream/70 max-w-sm mb-6">
                Handcrafted coffee, warm atmosphere, and a dedication to quality in
                every cup. Your neighborhood coffee sanctuary.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold flex items-center justify-center text-cream transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-cream mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-cream mb-4">
                Stay Connected
              </h4>
              <p className="text-cream/70 mb-4">
                Sign up for updates on new roasts and special events.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-full bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50"
                />
                <Button className="bg-gold hover:bg-gold/90 text-cream rounded-full px-6 shrink-0">
                  Join
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 text-center">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Brew and Co. Crafted with love.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
