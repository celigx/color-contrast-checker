import { useEffect, useState } from "react";
import "../App.sass";

export const Output = ({ textColor, backgroundColor }) => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const randomNumber = Math.random() * quotes.length;

    setNumber(Math.floor(randomNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quotes = [
    {
      title: "Quote n.1",
      text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
      author: "Nelson Mandela",
    },
    {
      title: "Quote n.2",
      text: "\"In the end, it's not the years in your life that count. It's the life in your years.\"",
      author: "Abraham Lincoln",
    },
    {
      title: "Quote n.3",
      text: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
      author: "Thomas A. Edison",
    },
    {
      title: "Quote n.4",
      text: '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
      author: "Dr. Seuss",
    },
    {
      title: "Quote n.5",
      text: '"Life is never fair, and perhaps it is a good thing for most of us that it is not." ',
      author: "Oscar Wilde",
    },
    {
      title: "Quote n.6",
      text: '"Go confidently in the direction of your dreams! Live the life you\'ve imagined."',
      author: "Henry David Thoreau",
    },
    {
      title: "Quote n.7",
      text: '"Life is really simple, but we insist on making it complicated."',
      author: "Confucius",
    },
    {
      title: "Quote n.8",
      text: '"But man is not made for defeat. A man can be destroyed but not defeated."',
      author: "Ernest Hemingway",
    },
    {
      title: "Quote n.9",
      text: '"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."',
      author: "Henry James",
    },
    {
      title: "Quote n.10",
      text: '"Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."',
      author: "Francis of Assisi",
    },
  ];

  return (
    <div className="outputContainer" style={{ background: backgroundColor }}>
      <h1 className="outputTitle" style={{ color: textColor }}>
        {quotes[number].title}
      </h1>
      <p className="outputText" style={{ color: textColor }}>
        {quotes[number].text}
      </p>
      <p className="outputAuthor" style={{ color: textColor }}>
        {quotes[number].author}
      </p>
    </div>
  );
};
