"use client";
import React, { memo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
} as const;

const socialLinks = [
  { icon: "mdi:linkedin", href: "https://linkedin.com/company/thegent", label: "LinkedIn" },
  { icon: "mdi:twitter", href: "https://twitter.com/thegent", label: "Twitter" },
  { icon: "mdi:github", href: "https://github.com/thegent", label: "GitHub" },
] as const;

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group" aria-label="TheGent Home">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <span className="text-xl font-bold text-white">TheGent</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              Empowering businesses with cutting-edge AI solutions and strategic consulting 
              to drive digital transformation and sustainable growth.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} TheGent. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon icon={icon} className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
