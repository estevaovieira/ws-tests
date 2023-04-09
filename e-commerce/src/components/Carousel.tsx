import { Carousel, Slide } from '@mui/material';

const Carousel = () => {
  return (
    <Carousel>
      <Slide
        key={1}
        direction="left"
        value={0}
      >
        {/* Conteúdo do slide 1 */}
      </Slide>
      <Slide
        key={2}
        direction="left"
        value={1}
      >
        {/* Conteúdo do slide 2 */}
      </Slide>
      <Slide
        key={3}
        direction="left"
        value={2}
      >
        {/* Conteúdo do slide 3 */}
      </Slide>
    </Carousel>
  );
};

export default Carousel;