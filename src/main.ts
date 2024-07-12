import express, { Request, Response } from "express";
import { PrismaClient } from "prisma/prisma-client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/contact", async (request: Request, response: Response) => {
  const contacts = await prisma.contact.findMany({});
  return response.json(contacts);
});

app.post("/contact", async (request: Request, response: Response) => {
  const { name, phone, email, adress } = request.body;
  const contacts = await prisma.contact.create({
    data: {
      name,
      phone,
      email,
      adress,
    },
  });
  return response.json(contacts);
});

app.get("/contact/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const contacts = await prisma.contact.findUnique({
    where: {
      id: Number(id),
    },
  });
  return response.json(contacts);
});

app.put("/contact/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, phone, email, adress } = request.body;

  const contact = await prisma.contact.update({
    data: {
      name,
      phone,
      email,
      adress,
    },
    where: {
      id: Number(id),
    },
  });
  return response.json(contact);
});

app.delete("/contact/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  await prisma.contact.delete({
    where: {
      id: Number(id),
    },
  });
  return response.send("deleted");
});

app.listen(3333, () => console.log("Runnning on port 3333"));
