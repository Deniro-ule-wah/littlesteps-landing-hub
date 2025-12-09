import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselSlide {
  image: string;
  caption: string;
  description?: string;
  location?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
}

const ImageCarousel = ({ slides }: ImageCarouselProps) => {
  return (
    <div className="w-full h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full pl-0">
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 bg-destructive hover:bg-destructive/80 border-none text-white h-10 w-10 md:h-12 md:w-12" />
        <CarouselNext className="right-2 md:right-4 bg-destructive hover:bg-destructive/80 border-none text-white h-10 w-10 md:h-12 md:w-12" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
