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
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
