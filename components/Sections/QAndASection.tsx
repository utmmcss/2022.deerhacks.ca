import { FC, useState } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const QAndASection: FC = () => {
  const [summaryDetailIndex, setSummaryDetailIndex] = useState(0);

  const summaryDetails = [
    {
      title: 'When and where is DeerHacks happening?',
      content:
        'DeerHacks will be happing from April 29th - May 1st, 2022. THe hackathon will fully online tis year.',
    },
    {
      title: 'Do I need to have a team?',
      content:
        'Nope! We welcome both individual and team submissions! Although if you are interested in finding teammates, you can indicate so in the registraion form.',
    },
    {
      title: 'How many hackers are allowed per team?',
      content: 'Each team can have up to 4 members',
    },
    {
      title: "What's the deadline to apply?",
      content: 'We will be closing applications on April 26th at 11:59pm.',
    },
    {
      title: 'I still have a question...',
      content: (
        <p>
          No problem! Feel free to reach out to us at&nbsp;
          <a className="text-cyan-600" href="mailto:mcss@utmsu.ca">
            mcss@utmsu.ca
          </a>
          &nbsp;and we will get back to you as soon as possible.
        </p>
      ),
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
