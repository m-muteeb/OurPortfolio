import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "framer-motion";
import "../scss/_stats.scss";

// Import Award Images
import badge1 from '../assets/images/Achievements Section.png';
import badge2 from '../assets/images/badge 2.png';
import badge3 from '../assets/images/badge3.webp';
// Using logo placeholders for "Awards/Recognition" ticker as requested
import eduLogo from '../assets/images/edunexus.png';
import healthLogo from '../assets/images/health (2).png';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 75, label: "Projects Delivered" },
    { number: 25, label: "Satisfied Clients" },
    { number: 26, label: "Strategic Consultations" },
  ];

  // Counter animation logic
  useEffect(() => {
    if (isInView) {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const increment = target / (duration / 16);

        let count = 0;
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  }, [isInView]);

  return (
    <section className="stats-section-stylish" ref={ref}>
      <Container>
        <Row className="align-items-center">

          {/* Stats Column (Left) */}
          <Col lg={5} md={12} className="mb-5 mb-lg-0">
            <div className="stats-content-left">
              <h4 className="text-uppercase text-muted letter-spacing-2 mb-4 small fw-bold">Our Impact</h4>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item-stylish">
                    <h3 className="stat-number text-gradient" data-target={stat.number}>0</h3>
                    <p className="stat-label text-dark">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Awards Ticker Column (Right - Double Row) */}
          <Col lg={7} md={12}>
            <div className="awards-display-wrapper">
              <h4 className="text-uppercase text-muted letter-spacing-2 mb-4 small fw-bold text-center text-lg-start">
                Recognition & Partners
              </h4>

              {/* Row 1 - Moving Left */}
              <div className="marquee-wrapper-stylish mb-3">
                <div className="marquee-content-scroll left">
                  {[badge1, badge2, badge3, eduLogo, healthLogo, badge1, badge2, badge3].map((img, index) => (
                    <div key={index} className="marquee-card">
                      <img src={img} alt="Award" loading="lazy" />
                    </div>
                  ))}
                  {/* Duplicates for seamless loop */}
                  {[badge1, badge2, badge3, eduLogo, healthLogo, badge1, badge2, badge3].map((img, index) => (
                    <div key={`clone-${index}`} className="marquee-card">
                      <img src={img} alt="Award" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Moving Right (Slower) */}
              <div className="marquee-wrapper-stylish">
                <div className="marquee-content-scroll right">
                  {[healthLogo, eduLogo, badge3, badge2, badge1, healthLogo, eduLogo, badge3].map((img, index) => (
                    <div key={index} className="marquee-card">
                      <img src={img} alt="Award" loading="lazy" />
                    </div>
                  ))}
                  {/* Duplicates for seamless loop */}
                  {[healthLogo, eduLogo, badge3, badge2, badge1, healthLogo, eduLogo, badge3].map((img, index) => (
                    <div key={`clone-${index}`} className="marquee-card">
                      <img src={img} alt="Award" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Stats;
