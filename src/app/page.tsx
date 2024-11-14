import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page() {
  const videos = await prisma.video.findMany();

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <p>{video.name}</p>
            <p>Length: {video.length} seconds</p>
            <p>Votes: {video.votes}</p>
            <a href={video.url}>Watch Video</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
