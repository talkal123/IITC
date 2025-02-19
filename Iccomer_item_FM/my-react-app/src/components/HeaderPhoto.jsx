import React from "react";
import Photo from "../assets/pawel-czerwinski-p2HouwZKIJQ-unsplash.jpg"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const HeaderPhoto = () => {
  return (
    <Card className="w-auto">
        <img className="w-[100%] object-cover max-h-[400px]" src={Photo} alt="" />
     
    </Card>
  );
};

export default HeaderPhoto;
