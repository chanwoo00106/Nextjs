import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).json({ todos });
  } else {
    res.status(404).json({ message: "404 Not Found" });
  }
}
