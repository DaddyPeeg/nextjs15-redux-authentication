"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface SliderImage {
  id: string;
  file: File;
  preview: string;
  title: string;
  description: string;
}

export default function ImageUploader() {
  const [images, setImages] = useState<SliderImage[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        preview: URL.createObjectURL(file),
        title: "",
        description: "",
      }));
      setImages([...images, ...newImages]);
    },
  });

  const updateImage = (
    id: string,
    field: "title" | "description",
    value: string
  ) => {
    setImages(
      images.map((img) => (img.id === id ? { ...img, [field]: value } : img))
    );
  };

  const removeImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center cursor-pointer hover:border-blue-500"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag and drop images here, or click to select images
        </p>
      </div>

      <div className="space-y-6">
        {images.map((image) => (
          <div key={image.id} className="flex gap-6 p-4 border rounded-lg">
            <div className="w-48 h-48 relative group">
              <Image
                src={image.preview}
                alt={image.title || "Preview"}
                fill
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(image.id)}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={image.title}
                  onChange={(e) =>
                    updateImage(image.id, "title", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter image title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={image.description}
                  onChange={(e) =>
                    updateImage(image.id, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  placeholder="Enter image description"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
