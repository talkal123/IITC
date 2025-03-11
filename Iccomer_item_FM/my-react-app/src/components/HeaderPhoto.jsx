import React from "react";
import Photo from "../assets/pawel-czerwinski-p2HouwZKIJQ-unsplash.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const HeaderPhoto = ({ image, title, paragraph }) => {
  return (
    <Card className="w-auto relative">
      <img className="w-[100%] opacity-85 object-cover max-h-[600px] min-h-[500px] " src={image} alt="" />
      <div className="absolute top-32 flex flex-col gap-5 max-w-[600px] p-10">
        <p className="text-white text-4xl font-bold">{title}</p>
        <p className="font-semibold">{paragraph}</p>
        <Button
          variant="outline"
          className="hover:bg-green-900 hover:text-white max-w-32"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default HeaderPhoto;
