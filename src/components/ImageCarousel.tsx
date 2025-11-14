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
    <div className="w-full -mx-4 md:mx-0">
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
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
                  <div className="max-w-4xl mx-auto w-full space-y-3">
                    {slide.location && (
                      <p className="text-sm md:text-base font-medium text-mustard opacity-90">
                        {slide.location}
                      </p>
                    )}
                    <h2 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
                      {slide.caption}
                    </h2>
                    {slide.description && (
                      <p className="text-base md:text-xl text-white/90 max-w-2xl">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-none" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
