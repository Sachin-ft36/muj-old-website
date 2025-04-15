// EventPage.jsx
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "../components/TeamMembers";
import IntroVideo from "../components/IntroVideo";
import AboutSection from "../components/AboutSection";
import ScheduleSection from "../components/ScheduleSection";
import GallerySection from "../components/GallerySection";
import FAQSection from "../components/FAQSection";

const EventPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const answerRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFAQ = (index) => {
    setFaqOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMuteToggle = () => {
    const video = document.getElementById("introVideo");
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight = faqOpen === idx ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [faqOpen]);

  return (
    <main>
      <IntroVideo isMuted={isMuted} handleMuteToggle={handleMuteToggle} />
      <AboutSection />
      <Team />
      <ScheduleSection />
      <GallerySection />
      <FAQSection faqOpen={faqOpen} toggleFAQ={toggleFAQ} answerRefs={answerRefs} />
    </main>
  );
};

export default EventPage;