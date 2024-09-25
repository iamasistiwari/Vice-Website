"use client";

import "@uploadthing/react/styles.css";
import Image from 'next/image';
import { generateUploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "../app/api/uploadthing/core";
import { useState, useEffect } from "react";

const UploadDropzone = generateUploadDropzone<OurFileRouter>();


export const UploadImage = () => {
    const [images, setImages] = useState<{ fileKey: string; fileName: string }[]>([]);
    const handleUploadError = (error: Error) => {
        console.error("Upload Error:", error);
        alert(`ERROR! ${error.message}`);
    };

    return (
        <main className="flex flex-col items-center justify-center mt-10">
            {images.length == 0 ? <UploadDropzone className="bg-slate-300 font-bold"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if (res && res.length > 0) {
                        const uploadedImages = res.map(file => ({
                            fileKey: file.appUrl || "",
                            fileName: file.name || ""
                        }));
                        setImages(uploadedImages);
                    }
                    console.log("Upload Complete:", res);
                    alert("Upload Completed");
                }}
                onUploadError={handleUploadError}
                
            /> : <div className="flex flex-col relative h-screen">
                    <div className="w-72 h-64">
                        {images.map((image, index) => (
                            <div className="mt-2 text-white">
                                <p className="font-medium">Uploaded Image</p>
                                <ImageLoader src={image.fileKey} alt={image.fileName} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-52 left-14 lg:left-16">
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href="#" title="Get quote now"
                                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">Get Response
                            </a>
                        </div>
                    </div>
                </div>
            }
            
        </main>
    );
}


const ImageLoader = ({ src, alt }: {src: string, alt: string}) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };
    return (
        <div className="relative min-w-72 max-w-72 ">
            {loading && (
                <div
                    className="absolute inline-block h-8 mt-32 ml-32 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            )}
            <Image className="absolute flex items-center mt-4 justify-center rounded-lg border-2 border-white w-[300] max-h-[300]"
                src={src}
                alt={alt}
                width={350}
                height={350}
                onLoad={handleLoad}
            />
        </div>
    );
};