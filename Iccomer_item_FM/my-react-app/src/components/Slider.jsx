import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const Slider = ({imageOne,imageTwo,imageThree}) => {

  const prevClick = () => {
    
  }
  const nextClick = () => {
    
  }
  return (
        <Carousel className="flex">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex min-h-[500px] max-h-[400px] items-center justify-center p-0">
                      {index === 0 && (
                        <img
                        src={imageOne}
                        alt={`Carousel image ${index + 1}`}
                        className="w-full max-h-[500px] object-fit:cover rounded-lg"
                        />
                    )}
                    {index === 1 && (
                        <img
                        src={imageTwo}
                        alt={`Carousel image ${index + 2}`}
                        className="w-full max-h-[500px] object-fit:cover rounded-lg"
                        />
                    )}
                    {index === 2 && (
                        <img
                        src={imageThree}
                        alt={`Carousel image ${index + 3}`}
                        className="w-full max-h-[500px] object-cover rounded-lg"
                        />
                    )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious id="CarouselPrevious" className="hidden md:flex" />
          <CarouselNext id="CarouselNext" className="hidden md:flex"/>
        </Carousel>
      );
      
  
}

export default Slider
