import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-semibold text-green-600">Better</h1>
          <p className="mt-3 text-sm text-gray-400">
            Simplifying homeownership, one step at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>Home Affordability Calculator</li>
            <li>Mortgage Calculator</li>
            <li>Rent vs Buy Calculator</li>
            <li>HELOC Payment Calculator</li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-2 text-gray-400" /> hello@better.com
          </p>
          <p className="flex items-center text-sm mt-2">
            <Phone className="w-4 h-4 mr-2 text-gray-400" /> 415-523-8837
          </p>

          <h2 className="text-lg font-semibold text-white mt-6 mb-3">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Better.com. All Rights Reserved.
      </div>
    </footer>
  );
}
