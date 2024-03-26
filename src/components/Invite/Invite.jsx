import React from 'react'
import { Link } from 'react-router-dom'

const Invite = () => {
    return (
        <div>
        <div
          className="hero rounded-2xl mt-12"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/mtb5KvK/rahul-mishra-o4-Szx-Pg-Mw-V8-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="p-6">
              <h1 className="mb-5 text-4xl font-bold">If You Are a Coder & Want Interactive Practice & Challenge, Come Visit Our Hackathon!</h1>
              <p className="mb-5 text-2xl">
              Working with your website’s or your application’s backend architecture is just as important as making sure that the wheelbase of your car is ok, before driving it. This is why we are sure that coding hackathon’s such as the Codathon is, provides awesome practice for all of these skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Invite