"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type NewItemFormProps = {
  onSubmit: (name: string, type: "file" | "folder") => void;
  onCancel: () => void;
};

export function NewItemForm({ onSubmit, onCancel }: NewItemFormProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<"file" | "folder">("file");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      onSubmit(name, type);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <Input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <RadioGroup
        value={type}
        onValueChange={(value) => setType(value as "file" | "folder")}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="file" id="file" />
          <Label htmlFor="file">File</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="folder" id="folder" />
          <Label htmlFor="folder">Folder</Label>
        </div>
      </RadioGroup>
      <div className="flex space-x-2">
        <Button type="submit">Create</Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
