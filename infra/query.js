import { Client } from "pg";

export async function query(queryObject) {
  const client = new Client();
  await client.connect();
  cont;
  result = await client.query(queryObject);
}
