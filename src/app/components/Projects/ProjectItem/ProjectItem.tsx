import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Video } from "lucide-react";
import { Button } from "antd";
export const ProjectItem = ({ item }: {
    item: {
        thumbImg: StaticImageData;
        title: string;
        discription: JSX.Element
    }
}) => {
    return (
        <Card className="w-full border-borderColor backdrop-blur-sm">
            <CardHeader>
            </CardHeader>
            <CardContent className="flex items-center justify-center md:flex-col pl-10">
                <div className="grid grid-cols-3 gap-5">
                    {/* <div className="col-span-3 md:col-span-1 h-full flex flex-col items-center justify-center gap-3 ">
                        <img height={300} width={300} alt='access web' src={item.thumbImg.src} className="hidden transition-transform duration-300 max-h-[400px] w-max-[300px] object-contain"
                        />
                        <button className="flex hidden gap-3 hover:text-primaryColor ">Play demo <Video /> </button>

                    </div> */}
                    <div className="col-span-3 md:col-span-3 ">
                        {item.discription}

                    </div>
                </div>

            </CardContent>
        </Card>
    )
}