import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;
  try {
    if (method === "PATCH") {
      // checked 수정
      if (body.checked === undefined)
        res.status(400).json({ message: "Bad Request" });
      const result = await prisma.todo.update({
        where: { id: parseInt(id) },
        data: { checked: body.checked },
      });
      res.status(200).json({ result });
    } else if (method === "PUT") {
      // todo 전체 수정
      const result = await prisma.todo.update({
        where: { id: parseInt(id) },
        data: {
          todo: body.todo,
          completeDate: `${body.completeDate}T00:00:00.000Z`,
        },
      });
      res.status(200).json(result);
    } else if (method === "DELETE") {
      // 삭제
      const result = await prisma.todo.delete({ where: { id: parseInt(id) } });
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}
