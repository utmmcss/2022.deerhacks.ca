import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const QAndASection: FC = () => {
  const details = document.querySelectorAll('details');

  // Add the onclick listeners.
  details.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Close all the details that are not targetDetail.
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open');
        }
      });
    });
  });

  return (
    <ParallaxLayer offset={1.8}>
      <h1>Frequently Asked Questions</h1>
      <div>
        <details open>
          <summary>
            Question Test
          </summary>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus
            eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur,
            obcaecati facilis mollitia maxime? Asperiores eius at dolores!
          </div>
        </details>
        <details>
          <summary>
            Question Test
          </summary>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus
            eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur,
            obcaecati facilis mollitia maxime? Asperiores eius at dolores!
          </div>
        </details>
        <details>
          <summary>
            Question Test
          </summary>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus
            eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur,
            obcaecati facilis mollitia maxime? Asperiores eius at dolores!
          </div>
        </details>
        <details>
          <summary>
            Question Test
          </summary>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus
            eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur,
            obcaecati facilis mollitia maxime? Asperiores eius at dolores!
          </div>
        </details>
        <details>
          <summary>
            Question Test
          </summary>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas distinctio minus
            eveniet sed numquam praesentium earum necessitatibus laborum possimus libero tenetur,
            obcaecati facilis mollitia maxime? Asperiores eius at dolores!
          </div>
        </details>
      </div>
    </ParallaxLayer>
  );
};

export default QAndASection;
