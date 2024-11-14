import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function AddVideoPage() {
  const handleCreateVideo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    prisma.video.create({
      data: {
        name: formData.get("name") as string,
        url: formData.get("url") as string,
        votes: parseInt(formData.get("votes") as string),
        length: parseInt(formData.get("length") as string),
      },
    });
  };

  return (
    <div>
      <h1>Add New Video</h1>
      <form onSubmit={(e) => handleCreateVideo(e)} method="POST">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="url" />
        <input type="number" placeholder="votes" />
        <input type="number" placeholder="length" />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
}
