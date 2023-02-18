import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      <Section>
        <Image src={`${process.env.PUBLIC_URL}/assets/image1.jpg`} alt="Image 1" />
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      </Section>

      <Section>
        <Image src={`${process.env.PUBLIC_URL}/assets/image2.jpg`} alt="Image 2" />
        <h2>Section 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      </Section>

      <Section>
        <Image src={`${process.env.PUBLIC_URL}/assets/image3.jpg`} alt="Image 3" />
        <h2>Section 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      </Section>
    </div>
  );
}

export default Portfolio;
