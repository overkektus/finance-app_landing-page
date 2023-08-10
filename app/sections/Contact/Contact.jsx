import React from 'react'
import Button from '@/app/components/Button'
import TitleSection from '@/app/components/TitleSection'
import Input from './components/Input'

const Contact = () => (
  <section id="contact" className="bg-color-primary-light">
    <div className="container py-20">
      <TitleSection title="Get In Touch" subTitle="Have a Questation" />
    </div>

    <form>
      <div class="w-full m-auto text-center md:w-2/3">
        <div class="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Phone" />
          <Input type="text" placeholder="Company" />
        </div>
        <textarea
          rows="4"
          class="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
          placeholder="Message"
        ></textarea>
        <div className="mt-10">
          <Button>Send Message</Button>
        </div>
      </div>
    </form>
  </section>
)

export default Contact
