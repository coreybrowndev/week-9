import { PrismaClient } from "@prisma/client";

export default function AddVideoPage() {
  return (
    <div>
      <h1>Add New Video</h1>
      <form method="POST">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="url" />
        <input type="number" placeholder="votes" />
        <input type="number" placeholder="length" />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
}
