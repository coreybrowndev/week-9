"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";

export default function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { slug } = use(params);

  return (
    <div>
      <h1>Edit Video</h1>
      <form className="flex flex-col gap-4 px-10 mt-6">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="url" />
        <input type="number" placeholder="votes" />
        <input type="number" placeholder="length" />
        <button type="submit">Update Video</button>
      </form>
    </div>
  );
}
