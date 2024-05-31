import express from "express";
import dotenv from "dotenv";
import { client, mondayEntry, wednesdayEntry, fridayEntry } from "./database/database";
import cors from 'cors';
import path from 'path'
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(bodyParser.json());

const PORT = process.env.BACKEND_PORT || 5005;

// Route handler for submitting answers
app.post("/comp/submit", async (req, res) => {
  // Extract data from the request body
  const { name, userAnswer, day, time } = req.body;
  if (day === "M") {
    const existingEntry = await mondayEntry.findOne({ name });
    if (existingEntry) {
      return res.status(400).json({ message: "An entry with this name already exists" });
    }
    await mondayEntry.insertOne({ name, answer: userAnswer, time: time });
  } else if (day === "W") {
    const existingEntry = await wednesdayEntry.findOne({ name });
    if (existingEntry) {
      return res.status(400).json({ message: "An entry with this name already exists" });
    }
    await wednesdayEntry.insertOne({ name, answer: userAnswer, time: time });
  } else if (day === "F") {
    const existingEntry = await fridayEntry.findOne({ name });
    if (existingEntry) {
      return res.status(400).json({ message: "An entry with this name already exists" });
    }
    await fridayEntry.insertOne({ name, answer: userAnswer, time: time });
  }
  res.status(200).json({ message: "Answer submitted successfully" });
});

app.get("/leaderboard/:day", async (req, res) => {
  const { day } = req.params;
  let names;
  if (day === "F") {
    names = await fridayEntry.find().sort({ time: 1 }).toArray();
    names = names.map(doc => doc.name);
  } else if (day === "W") {
    names = await wednesdayEntry.find().sort({ time: 1 }).toArray();
    names = names.map(doc => doc.name);
  } else {
    names = await mondayEntry.find().sort({ time: 1 }).toArray();
    names = names.map(doc => doc.name);
  }
  try {
    res.status(200).json({ names });
  } catch (error) {
    console.error("Error fetching names:", error);
    res.status(500).json({ message: "Error fetching names" });
  }
});

app.listen(PORT, async () => {
  await client.connect();
  console.log("puzzsoc web up!");   
  console.log(`listening on port ${PORT}`);
});