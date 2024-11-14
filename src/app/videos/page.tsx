import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function VideosPage({}) {
  const videos = await prisma.video.findMany();

  return (
    <div>
      <h1>Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <Link href={`/videos/video/edit/${video.id}`}>{video.name}</Link>
            <form action={`/videos/video/delete`} method="POST">
              <input type="hidden" name="id" value={video.id} />
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
      <Link href="/videos/video/add">Add New Video</Link>
    </div>
  );
}
