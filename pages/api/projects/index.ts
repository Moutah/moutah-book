import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../services/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // get data
  const projects = await database.get("projects");

  res.status(200).json(projects);
};
