import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const contactData = JSON.parse(req.body);

      const savedContact = await prisma.contact.create({
        data: contactData,
      });
      res.status(200).json(savedContact);

    case "DELETE":
      return prisma.contact.delete({
        where: {
          id: JSON.parse(req.body),
        },
      });
  }

  return res.status(404).json({ message: "not found" });
}
