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
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
}

const ImageCarousel = ({ slides }: ImageCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                  {slide.caption}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-none shadow-lg" />
      <CarouselNext className="right-4 bg-white/90 hover:bg-white border-none shadow-lg" />
    </Carousel>
  );
};

export default ImageCarousel;
