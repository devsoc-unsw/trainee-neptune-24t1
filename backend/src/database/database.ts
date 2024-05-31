import { MongoClient } from "mongodb";
import dotenv from "dotenv";

interface Monday {
  name: string;
  answer: string;
  time: number;
}

interface Wednesday {
  name: string;
  answer: string;
  time: number;
}

interface Friday {
  name: string;
  answer: string;
  time: number;
}

dotenv.config();

const url = process.env.MONGO_URL as string;
console.log(url);
let client = new MongoClient(url);
let puzzlesocDB = client.db("puzzlesoc");
let mondayEntry = puzzlesocDB.collection<Monday>("monday");
let wednesdayEntry = puzzlesocDB.collection<Wednesday>("wednesday");
let fridayEntry = puzzlesocDB.collection<Monday>("friday");

export { client, puzzlesocDB, mondayEntry, wednesdayEntry, fridayEntry };