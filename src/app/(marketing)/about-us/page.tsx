import { Metadata } from "next";
import Image from "next/image";
import "./about-us.css";

export const metadata: Metadata = {
  title: "About Us - BeatByte",
  description:
    "Learn about our mission to provide high-quality products and exceptional service. Discover our story, values, and commitment to customer satisfaction.",
  keywords: "About Us, BeatByte, Mission, Story, Values, Customer Satisfaction",
};

const AboutUs = () => {
  return (
    <div className="aboutParent">
      <section className="aboutHero">
        <h1>About Us</h1>
        <p>Your trusted destination for quality products</p>
      </section>

      <section className="aboutStory">
        <div className="storyContainer">
          <div className="storyContent">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, we've been committed to bringing you the finest
              selection of products while providing an exceptional shopping
              experience.
            </p>
          </div>
          <div className="storyImage">
            <Image
              src="/assets/about-us.webp"
              alt="Our store journey"
              width={500}
              height={300}
              className="storyImg"
            />
          </div>
        </div>
      </section>

      <section className="aboutMission">
        <div className="missionContainer">
          <h2>Our Mission</h2>
          <p>
            To provide our customers with high-quality products, exceptional
            service, and an enjoyable shopping experience that exceeds
            expectations.
          </p>
        </div>
      </section>

      <section className="aboutValues">
        <div className="valuesContainer">
          <h2>Our Values</h2>
          <div className="valuesList">
            <div className="valueItem">
              <h3>Quality</h3>
              <p>We ensure every product meets our high standards</p>
            </div>
            <div className="valueItem">
              <h3>Trust</h3>
              <p>Building lasting relationships through transparency</p>
            </div>
            <div className="valueItem">
              <h3>Service</h3>
              <p>Dedicated to exceptional customer experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
