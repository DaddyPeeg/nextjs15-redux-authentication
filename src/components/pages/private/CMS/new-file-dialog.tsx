"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";

type Props = {
  addItem: (name: string, type: "file" | "folder", url?: string) => void;
  isCreating: boolean;
};

const NewFileDialog = ({ addItem, isCreating }: Props) => {
  const [file, setFile] = useState({
    file_name: "",
    file_url: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    addItem(file.file_name, "file", file.file_url);
    setFile({
      file_name: "",
      file_url: "",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
      <DialogTrigger asChild>
        <Button className="items-center" disabled={isCreating}>
          New File <FilePlus className="shrink-0 size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New File</DialogTitle>
          <DialogDescription>
            Add a file by entering its name and Google Drive link. This file
            will be added to your current directory.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file_name" className="text-right">
              File Name
            </Label>
            <Input
              id="file_name"
              name="file_name"
              placeholder="File.pdf"
              className="col-span-3"
              onChange={handleValueChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file_url" className="text-right">
              File Url
            </Label>
            <Input
              id="file_url"
              name="file_url"
              placeholder="Google Drive Link"
              className="col-span-3"
              onChange={handleValueChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Add File
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewFileDialog;
