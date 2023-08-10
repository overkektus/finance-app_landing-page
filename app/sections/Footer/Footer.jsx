import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <section id="footer">
    <div className="bg-color-primary-dark relative">
      <div className="container py-10">
        <div className="grid gap-10 md:grid-cols-3 pb-10">
          <div className="space-y-6">
            <h4 className="font-bold text-lg">About App</h4>
            <p>
              This Should Be Used To Tell A Story nad include any testimonials
              you might have about you product or service for your clients
            </p>
            <div className="flex gap-5 items-center">
              <p>Follow Us</p>
              <FontAwesomeIcon
                icon={faFacebook}
                className="cursor-pointer hover:text-color-secondary"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="cursor-pointer hover:text-color-secondary"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="cursor-pointer hover:text-color-secondary"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="cursor-pointer hover:text-color-secondary"
              />
            </div>
          </div>
          <div className="flex justify-between md:justify-around">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Home</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Features</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Testimonial</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Pricing</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Blog</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Contact</a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg">Help</h4>
              <ul className="space-y-3">
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">About Us</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Pertners</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Career</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Reviews</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Terms & Conditions</a>
                </li>
                <li className="underline hover:no-underline hover:text-color-secondary">
                  <a href="#home">Help</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h4>Newsletter</h4>
            <p>Subscribe With Email And Loads Of News Will Be Sent To You</p>
            <div className="flex items-center">
              <input
                type="text"
                className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3-rounded-l-md focus:outline-none"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10 border-t border-color-gray">
          <p>
            {new Date().getFullYear()} &copy; LightCode. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Footer
