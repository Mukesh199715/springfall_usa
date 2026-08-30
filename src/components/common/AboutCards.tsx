import styled from "styled-components";

const missionValues = [
  {
    id: 1,
    title: "Clarity & Transparency",
    description:
      "We demystify the complex visa process with clear, accurate information, helping students make informed decisions.",
  },
  {
    id: 2,
    title: "Community Support",
    description:
      "We foster a supportive environment where students can learn from each other's experiences and find encouragement.",
  },
  {
    id: 3,
    title: "Practical Guidance",
    description:
      "We provide actionable advice and resources that students can directly apply to strengthen their visa applications.",
  },
];

const AboutCards = () => {
  return (
    <StyledWrapper>
      <div className="heading">
        <span className="card_title">Our Mission & Values</span>
        <p className="card_paragraph">
          We're driven by a simple belief: every qualified student deserves
          clear guidance and support in pursuing educational opportunities in
          the United States.
        </p>
      </div>

      <div className="cards__container">
        {missionValues.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__border" />

            <ul className="card__list">
              <li className="card__list_item">
                <span className="check">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="check_svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="list_text pb-2 font-semibold">{item.title}</h3>
                  <span>
                    <hr className="line" />
                  </span>
                  <p className="text-sm text-gray-400 pt-5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* === Changed: Full background to deep blue === */
  background: #0000; /* Deep navy blue */
  padding: 6rem 2rem;
  text-align: center;

  .heading {
    margin-bottom: 6rem;
  }

  .card_title {
    font-size: clamp(2rem, 5vw, 5rem);
    color: white; /* Keep white for contrast */
    display: block;
    margin-bottom: 0.5rem;
  }

  .card_paragraph {
    margin: 0 auto;
    max-width: 700px;
    font-size: 1rem;
    color: #a0bffa; /* Soft blue-white for text */
  }

  .cards__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
  }

  .card {
    --white: #ffffff;
    --black: #000000;
    --paragraph: #d0d8f0;
    --line: #334155;
    --primary: #3b82f6; /* Tailwind blue-500 */

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 4rem;
    width: 23rem;

    /* === Changed: Card background to dark blue === */
    background-color: #0f172a; /* Slate-900 (blue-ish dark) */
    background-image: radial-gradient(
        at 88% 40%,
        #0f172a 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, #0f172a 0px, transparent 85%),
      radial-gradient(at 14% 26%, #0f172a 0px, transparent 85%),
      radial-gradient(at 0% 64%, #1d4ed8 0px, transparent 85%), /* blue-800 glow */
      radial-gradient(at 41% 94%, #60a5fa 0px, transparent 85%), /* blue-400 */
      radial-gradient(at 100% 99%, #3b82f6 0px, transparent 85%); /* blue-500 */

    border-radius: 1rem;
    box-shadow: 
      0px -16px 24px 0px rgba(255, 255, 255, 0.1) inset,
      0 4px 20px rgba(59, 130, 246, 0.1); /* subtle outer glow */
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      white -50%,
      #93c5fd 100% /* Light blue gradient border */
    );
    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;
    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: left;
    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      #60a5fa 40%,    /* blue-400 */
      #3b82f6 60%,    /* blue-500 */
      hsla(0, 0%, 40%, 0) 100%
    );
    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);
    border: none;
  }

  .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card__list_item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    background-color: var(--primary); /* blue-500 */
    border-radius: 50%;
  }

  .check_svg {
    width: 1rem;
    height: 1rem;
    fill: white; /* Clean white check */
  }

  .list_text {
    font-size: 1.3rem;
    color: var(--white);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .card {
      width: 100%;
      max-width: 24rem;
      padding: 3rem;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;

    .heading {
      margin-bottom: 4rem;
    }

    .card_title {
      font-size: 2.5rem;
      color: white;
    }

    .card {
      width: 100%;
      max-width: 20rem;
      padding: 2.5rem;
    }

    .list_text {
      font-size: 1.1rem;
    }
  }

  /* Extra small devices */
  @media (max-width: 480px) {
    padding: 3rem 1rem;

    .card {
      padding: 2rem;
    }

    .card_title {
      font-size: 2rem;
    }

    .card_paragraph {
      font-size: 0.95rem;
      color: #a0bffa;
    }

    .list_text {
      font-size: 1rem;
    }
  }
`;

export default AboutCards;