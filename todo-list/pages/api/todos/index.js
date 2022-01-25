import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method, body } = req;
  try {
    if (method === "GET") {
      const todos = await prisma.todo.findMany({ orderBy: [{ id: "desc" }] });
      res.status(200).json({ todos });
    } else if (method === "POST") {
      const createTodo = await prisma.todo.create({
        data: {
          ...body,
          completeDate: body.completeDate
            ? `${body.completeDate}T00:00:00.000Z`
            : null,
        },
      });
      res.status(200).json(createTodo);
    } else {
      res.status(404).json({ message: "404 Not Found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
