import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body: { checked },
  } = req;

  console.log(id, checked);

  if (method === "PATCH") {
    // checked 수정
    if (checked === undefined) res.status(400).json({ message: "Bad Request" });
    const result = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { checked },
    });
    res.status(200).json({ result });
  } else if (method === "PUT") {
    // todo 전체 수정
  } else if (method === "DELETE") {
    // 삭제
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}
