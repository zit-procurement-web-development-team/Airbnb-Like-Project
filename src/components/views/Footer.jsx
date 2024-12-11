import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const FooterPage = () => {
  const footerLinks = {
    support: [
      'Help Center',
      'Safety information',
      'Cancellation options',
      'Our COVID-19 Response'
    ],
    community: [
      'Airbnb.org: disaster relief housing',
      'Support Afghan refugees',
      'Combating discrimination'
    ],
    hosting: [
      'Try hosting',
      'AirCover: protection for Hosts',
      'Explore hosting resources',
      'Visit our community forum'
    ],
    about: [
      'Newsroom',
      'Learn about new features',
      'Letter from our founders',
      'Careers',
      'Investors'
    ]
  };

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold capitalize mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 hover:underline transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              © 2024 Airbnb, Inc.
            </a>
            <span className="text-gray-300">·</span>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </a>
            <span className="text-gray-300">·</span>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FiFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FiTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FiInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;