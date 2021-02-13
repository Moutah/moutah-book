import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../services/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  // get data
  const project = await database.get("projects", query.id as string);

  res.status(200).json(project);
};
