import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const [countStats, setCountStats] = useState({
    students: 0,
    countries: 0,
    experiences: 0,
    universities: 0,
  });

  const finalStats = {
    students: 100000,
    countries: 5,
    experiences: 1000,
    universities: 3,
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Track visibility using IntersectionObserver
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isVisible]);

  // Animate stat cards with GSAP
  useEffect(() => {
    if (!isVisible || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [isVisible]);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = {
      students: finalStats.students / (duration / interval),
      countries: finalStats.countries / (duration / interval),
      experiences: finalStats.experiences / (duration / interval),
      universities: finalStats.universities / (duration / interval),
    };

    let current = { ...countStats };

    const timer = setInterval(() => {
      current.students += steps.students;
      current.countries += steps.countries;
      current.experiences += steps.experiences;
      current.universities += steps.universities;

      setCountStats({
        students: Math.min(Math.floor(current.students), finalStats.students),
        countries: Math.min(Math.floor(current.countries), finalStats.countries),
        experiences: Math.min(Math.floor(current.experiences), finalStats.experiences),
        universities: Math.min(Math.floor(current.universities), finalStats.universities),
      });

      if (
        current.students >= finalStats.students &&
        current.countries >= finalStats.countries &&
        current.experiences >= finalStats.experiences &&
        current.universities >= finalStats.universities
      ) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { title: "Students Helped", value: countStats.students, suffix: "+" },
    { title: "Countries", value: countStats.countries, suffix: "+" },
    { title: "Visa Experiences", value: countStats.experiences, suffix: "+" },
    { title: "Universities", value: countStats.universities, suffix: "+" },
  ];

  return (
    <StyledWrapper ref={cardRef}>
      <div className="stats-container" aria-label="Key statistics">
        {stats.map((stat, index) => (
          <div
            className="outer"
            key={stat.title}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            aria-hidden="true"
          >
            <div className="dot" />
            <div className="card">
              <div className="ray" />
              <h3 className="text">
                {stat.value.toLocaleString()}
                <span className="suffix">{stat.suffix}</span>
              </h3>
              <p className="label">{stat.title}</p>
              <div className="line topl" />
              <div className="line leftl" />
              <div className="line bottoml" />
              <div className="line rightl" />
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Card;

// Styled Components
const StyledWrapper = styled.div`
  padding: 2rem 0;
  background: linear-gradient(135deg, #0a0a0a, #111111);
  border-radius: 12px;
  margin: 2rem auto;

  .stats-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .outer {
    position: relative;
    width: 280px;
    height: 220px;
    border-radius: 12px;
    padding: 1.5px;
    background: radial-gradient(
      circle at 0% 0%,
      rgba(255, 255, 255, 0.2),
      rgba(20, 20, 20, 0.8)
    );
    opacity: 0;
    transform: translateY(40px);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover .card {
      transform: scale(1.03);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.18);
    }
  }

  .dot {
    position: absolute;
    width: 6px;
    aspect-ratio: 1;
    background-color: #fff;
    box-shadow: 0 0 12px #ffffff;
    border-radius: 50%;
    z-index: 2;
    top: 12%;
    right: 12%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%, 100% {
      top: 12%;
      right: 12%;
    }
    25% {
      top: 12%;
      right: calc(100% - 40px);
    }
    50% {
      top: calc(100% - 36px);
      right: calc(100% - 40px);
    }
    75% {
      top: calc(100% - 36px);
      right: 12%;
    }
  }

  .card {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #2a2a2a;
    background: radial-gradient(
      circle at 0% 0%,
      rgba(80, 80, 80, 0.3),
      rgba(20, 20, 20, 0.9)
    );
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .ray {
    position: absolute;
    width: 200px;
    height: 40px;
    border-radius: 100px;
    background: rgba(200, 200, 200, 0.4);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
    filter: blur(8px);
    transform: rotate(38deg) translateY(-50px);
    opacity: 0.5;
    top: 0;
    left: 0;
    transform-origin: 10% 50%;
  }

  .text {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(45deg, #ddd, #fff, #aaa);
    background-clip: text;
    color: transparent;
    line-height: 1.2;
    text-align: center;
    margin: 0;
  }

  .suffix {
    font-size: 1.6rem;
    color: #fff;
  }

  .label {
    font-size: 0.95rem;
    color: #aaa;
    margin-top: 0.5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .line {
    position: absolute;
    background-color: #333;
  }

  .topl {
    top: 12%;
    width: 80%;
    left: 10%;
    background: linear-gradient(90deg, #777 30%, #222 70%);
  }

  .bottoml {
    bottom: 12%;
    width: 80%;
    left: 10%;
    background: linear-gradient(90deg, #777 30%, #222 70%);
  }

  .leftl {
    left: 12%;
    height: 80%;
    top: 10%;
    background: linear-gradient(180deg, #777 30%, #222 70%);
  }

  .rightl {
    right: 12%;
    height: 80%;
    top: 10%;
    background: linear-gradient(180deg, #777 30%, #222 70%);
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .stats-container {
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
      padding: 1rem;
    }

    .outer {
      width: 300px;
      height: 200px;
    }

    .text {
      font-size: 2rem;
    }

    .suffix {
      font-size: 1.4rem;
    }

    .label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1.5rem auto;

    .outer {
      width: 280px;
      height: 190px;
    }

    .text {
      font-size: 1.8rem;
    }

    .suffix {
      font-size: 1.2rem;
    }

    .label {
      font-size: 0.85rem;
    }

    .ray {
      width: 180px;
      height: 35px;
    }
  }

  @media (min-width: 1024px) {
    .outer:hover .ray {
      animation: pulseRay 2s infinite alternate ease-in-out;
    }
  }

  @keyframes pulseRay {
    from {
      transform: rotate(38deg) translateY(-45px);
      opacity: 0.5;
    }
    to {
      transform: rotate(42deg) translateY(-55px);
      opacity: 0.7;
    }
  }
`;