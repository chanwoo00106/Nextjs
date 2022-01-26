import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body: { checked },
  } = req;
  try {
    if (method === "PATCH") {
      // checked 수정
      if (checked === undefined)
        res.status(400).json({ message: "Bad Request" });
      const result = await prisma.todo.update({
        where: { id: parseInt(id) },
        data: { checked },
      });
      res.status(200).json({ result });
    } else if (method === "PUT") {
      // todo 전체 수정
      prisma.todo.update({ where: { id }, data: { ...body } });
    } else if (method === "DELETE") {
      // 삭제
      const result = await prisma.todo.delete({ where: { id: parseInt(id) } });
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (e) {
    res.status(500).json(e);
  }
}
