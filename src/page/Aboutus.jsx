import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import citi from "@/assets/citi.png";
import Ally from "@/assets/Ally.webp";
import SoftBank from "@/assets/SoftBank-Logo-2006.png";

const sponsorsImg = [
  {
    id: 1,
    path: citi,
    url: "https://ankit-chaubey.vercel.app/",
  },
  {
    id: 2,
    path: Ally,
    url: "https://ankit-chaubey.vercel.app/",
  },
  {
    id: 3,
    path: SoftBank,
    url: "https://ankit-chaubey.vercel.app/",
  },
];

const timelineEvents = [
  {
    year: "2014",
    text: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: "2015",
    text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: "2016",
    text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: "2017",
    text: "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: "2018",
    text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: "2019",
    text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: "Today",
    text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
  },
];

export function Aboutus() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-500 to-blue-700 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Our Mission</h1>
        <p className="mt-6 text-lg md:text-2xl max-w-2xl">
          We&apos;re making homeownership simpler, faster — and most
          importantly, more accessible for all Americans.
        </p>
        <Button
          className="mt-10 flex items-center gap-2 bg-white text-blue-700 hover:bg-gray-100"
          onClick={() =>
            document
              .getElementById("about-content")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More <ArrowDown size={20} />
        </Button>
      </section>

      {/* Content Section - Two Column Layout */}
      <section
        id="about-content"
        className="max-w-6xl mx-auto px-6 py-16 space-y-10"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              The Status Quo is Broken
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              The traditional processes around homeownership are opaque and
              stressful. Fees aren&apos;t transparent and some are simply
              outrageous in size. Traditional mortgage lending is rife with
              unnecessary fees and slow, painful processes. It&apos;s a system
              set up to benefit insiders — not you.
              <br />
              <br />
              <span className="font-semibold">Better.com CEO, Vishal Garg</span>
              , set out to change that.
            </p>
            <Button className="mt-4 flex items-center gap-2 bg-blue-600  hover:bg-blue-700">
              Read Vishal&apos;s Story
            </Button>
          </div>

          {/* Video Card */}
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-4">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/1KjYlLBM9j4?si=jAHKEi8ycw0JtJ2G"
                title="YouTube Video"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We’re Changing Things Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            How We&apos;re Changing Things
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers&apos;.
            <br />
            <br />
            That&apos;s why <span className="font-semibold">Better.com</span> is
            redefining the homeownership process from the ground up. We&apos;re
            using technology to make it faster and more efficient, and humans to
            help make it friendly and enjoyable.
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Backed by</h2>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
            {/* <img
              src={Sponsors}
              alt="Sponsor"
              width={150}
              height={50}
              className="grayscale hover:grayscale-0 transition"
            /> */}
            {sponsorsImg.map((data) => (
              <Link key={data.id} to={data.url}>
                <img
                  src={data.path}
                  alt="Sponsor"
                  width={150}
                  height={50}
                  className="grayscale hover:grayscale-0 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Company timeline
          </h2>
          <div className="mt-12 relative border-l-4 border-blue-500 pl-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-10">
                <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-semibold text-blue-600">
                  {event.year}
                </h3>
                <p className="mt-2 text-gray-700 text-lg leading-relaxed">
                  {event.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
