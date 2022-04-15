import { FC, useState } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const QAndASection: FC = () => {
  const [summaryDetailIndex, setSummaryDetailIndex] = useState(0);

  const summaryDetails = [
    {
      title: 'Question Test 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur, obcaecati facilis mollitia maxime? Asperiores eius at dolores!',
    },
    {
      title: 'Question Test 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur, obcaecati facilis mollitia maxime? Asperiores eius at dolores!',
    },
    {
      title: 'Question Test 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur, obcaecati facilis mollitia maxime? Asperiores eius at dolores!',
    },
    {
      title: 'Question Test 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur, obcaecati facilis mollitia maxime? Asperiores eius at dolores!',
    },
    {
      title: 'Question Test 5',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur, obcaecati facilis mollitia maxime? Asperiores eius at dolores!',
    },
  ];

  return (
    <ParallaxLayer offset={1.8} className="qa-section">
      <div className="container">
        <h1 className="text-white text-5xl text-center mb-10">Frequently Asked Questions</h1>
        <div>
          {summaryDetails.map(({ title, content }, index) => (
            <details
              key={title}
              open={summaryDetailIndex === index}
              onClick={(e) => {
                e.preventDefault();
                setSummaryDetailIndex(index);
              }}
            >
              <summary>{title}</summary>
              <div>{content}</div>
            </details>
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default QAndASection;
