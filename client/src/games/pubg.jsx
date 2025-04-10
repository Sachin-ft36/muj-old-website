import React, { useEffect, useRef } from 'react';
import '../CSS/treasure_hunt.css';
import gameImage from '../assets/pubg.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Sujal Das",
    role: "Frontend Developer",
    description: "Passionate about building interactive UIs and seamless user experiences.",
    image: "https://i.pinimg.com/originals/a2/f4/92/a2f4921b5992b535f9cd21744b25fe6e.jpg",
    linkedin: "https://www.linkedin.com/in/sujaldas/",
    overlayColor: "overlay-lavender ",
  },
  {
    name: "Ananya Roy",
    role: "UI/UX Designer",
    description: "Designing intuitive user interfaces with a focus on aesthetics and usability.",
    image: "https://www.corysanders.com/wp-content/uploads/2012/10/highres-pic-of-Cory-from-Biltmore2-682x1024.jpg",
    linkedin: "https://www.linkedin.com/in/ananyaroy/",
    overlayColor: "overlay-mint",
  },
  {
    name: "Ritwik Sen",
    role: "Backend Developer",
    description: "Loves crafting scalable backend systems and clean APIs.",
    image: "https://i.pinimg.com/originals/7c/33/f0/7c33f06c02c7b7cb9eabc150cdd2f764.jpg",
    linkedin: "https://www.linkedin.com/in/ritwiksen/",
    overlayColor: "overlay-peach ",
  },
  {
    name: "Ishita Sharma",
    role: "Data Analyst",
    description: "Transforms raw data into valuable business insights with smart analytics.",
    image: "https://i.pinimg.com/474x/1c/e7/e5/1ce7e5699f19e422fc14f82d0e158dfd--corporate-portrait-business-portrait.jpg",
    linkedin: "https://www.linkedin.com/in/ishitasharma/",
    overlayColor: "overlay-lavender2",
  },
  {
    name: "Aditya Verma",
    role: "DevOps Engineer",
    description: "Ensures smooth CI/CD pipelines and reliable system performance.",
    image: "https://profile-images.xing.com/images/4056a561547d31e9be578fa93b31ec95-8/marcel-milde.1024x1024.jpg",
    linkedin: "#",
    overlayColor: "overlay-yellow",
  },
  {
    name: "Nisha Mehra",
    role: "AI Engineer",
    description: "Builds intelligent systems using machine learning and neural nets.",
    image: "https://img.freepik.com/premium-photo/corporate-professional-profile-photo-successful-brunette-man-ceo-man_954305-1266.jpg",
    linkedin: "#",
    overlayColor: "overlay-pink",
  },
  {
    name: "Rohan Tiwari",
    role: "Security Analyst",
    description: "Keeps our data safe and secure from threats.",
    image: "https://th.bing.com/th/id/OIP.rzkmjJNEKz9mFbvx9P7jkAHaHa?rs=1&pid=ImgDetMain",
    linkedin: "#",
    overlayColor: "overlay-blue",
  }
];

const TeamMembers = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="team-section">
      <h2 className="team-title" data-aos="fade-up">
      Organizing <span style={{ color: "#f26522" }}>Team</span>
      </h2>
      <div ref={scrollRef} className="team-scroll-container hide-scrollbar">
        <div className="team-cards-wrapper">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card group"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-image group-hover:scale-110"
              />
              <div className={`team-overlay ${member.overlayColor}`}>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-linkedin"
                >
                  <FaLinkedin className="text-xl" /> Connect
                </a>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TreasureHunt = () => {
  return (
    <main>
      {/* Game Header */}
      <section className="game-header">
        <div className="container">
          <h1>PUBG</h1>
          <p>Crack clues. Race the clock. Find the treasure!</p>
        </div>
      </section>

      {/* Game Details */}
      <section className="game-details">
        <div className="container game-details-container">
          <div className="game-image">
            <img src={gameImage} alt="Treasure Hunt" />
          </div>
          <div className="game-info">
            <h2>About the <span className="highlight">game</span></h2>
            <p>Are you ready to drop into the battlefield and fight for victory? The MUJ PUBG Competition brings the ultimate survival experience to all PUBG enthusiasts! Whether you're a seasoned PUBG player or new to the battle, this event will challenge your skills in strategy, teamwork, and reflexes. Join us for a thrilling tournament where you'll compete against the best players to claim the title of PUBG champion.</p>
            <div className="registration-cta">
              <a href="#" className="btn btn-primary">Register Now</a>
              {/* <button className="btn btn-outline">Play Now</button> */}

            </div>
          </div>
        </div>
      </section>

      {/* Game Instructions */}
      <section className="game-instructions">
        <div className="container instructions-container">
          <div className="instructions-header">
            <h2>Game <span className="highlight">Instructions</span></h2>
          </div>
          <div className="instructions-content">
            <div className="instruction-col">
              <h3><span>01</span> How to play</h3>
              <ul>
                <li>Team-based competition – Players can participate as solo, duo, or squad (4 players).</li>
                <li>The competition will be held on [Map name, e.g., Erangel or Miramar].</li>
                <li>Players or teams will join a custom match where the goal is to survive until the end by outlasting other competitors.</li>
                <li>The match will follow the standard battle royale rules:
                  <ul>
                    <li>Players must fight to be the last one standing while avoiding the shrinking play zone.</li>
                    <li>Players must use strategic looting, combat skills, and teamwork (if in a squad) to secure weapons, gear, and resources.</li>
                    <li>The last player or team standing wins the match and the round.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="instruction-col">
              <h3><span>02</span> Game rules</h3>
              <ul>
                <li>No teaming in solo mode: Players in solo mode should not form alliances or team up with other solo players.</li>
                <li>Team communication: If you're playing in a duo or squad, using voice communication (e.g., Discord or in-game voice chat) is allowed and encouraged for coordination.</li>
                <li>Rounds: The competition will consist of [number] rounds. Points will be awarded based on:
                  <ul>
                    <li>Placement: The higher your position in each round, the more points you earn.</li>
                    <li>Kills: Each kill will give you additional points.</li>

                  </ul>
                </li>
                <li>Misconduct: Any inappropriate behavior, offensive language, or disruption of the event will result in disqualification.</li>
                <li>For tech support, contact <a href="mailto:support@mujunityfest.in" style={{ color: '#f26522', textDecoration: 'none' }}>support@mujunityfest.in</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamMembers />
    </main>
  );
};

export default TreasureHunt;
