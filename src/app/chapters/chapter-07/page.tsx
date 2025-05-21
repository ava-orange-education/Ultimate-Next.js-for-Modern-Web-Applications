// route.tsx for Chapter 07 Styling_in_Next.js
'use client'

import styled from 'styled-components';
import styles from './styles/Card.module.scss';

const TailwindCard = () => (
  <div className="p-4 bg-white rounded shadow-md">
    <h2 className="text-xl font-semibold text-gray-800">Tailwind Styled Card</h2>
    <p className="text-gray-600 text-sm mt-1">Styled using utility classes.</p>
  </div>
);

const SCSSCard = () => (
  <div className={styles.card}>
    <h2 className={styles.title}>SCSS Module Styled Card</h2>
    <p className={styles.text}>Styled using SCSS modules.</p>
  </div>
);

const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

export default function ChapterSevenStyling() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Chapter 7: Styling in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Tailwind CSS Example</h2>
        <TailwindCard />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. SCSS Module Example</h2>
        <SCSSCard />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Styled Components Example</h2>
        <StyledButton>Styled Button</StyledButton>
      </section>
    </div>
  );
}
