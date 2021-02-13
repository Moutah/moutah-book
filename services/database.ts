import fs from "fs";
import path from "path";
import { DATA_PATH } from "../config";

/**
 * Minimalistic database provider. Reads data from files in the `./data`
 * directory.
 */
export const database = {
  /**
   * Get the data identified by given `key` and interprets it as given
   * `format`. `"json"` format will return an object while `"html"` format
   * will return a string.
   * @param table Path of the file in the `./data` directory
   * @param id Defaults to `"json"`
   */
  async get(table: string, id?: string): Promise<any> {
    // validate table
    if (!fs.lstatSync(`${DATA_PATH}/${table}`).isDirectory()) {
      throw new Error(`Unknown table: "${table}"`);
    }

    // get entry
    if (id) {
      const data = fs.readFileSync(`${DATA_PATH}/${table}/${id}.json`, "utf-8");
      return JSON.parse(data);
    }

    // get entries recursively
    const files = fs.readdirSync(`${DATA_PATH}/${table}`);
    return await Promise.all(
      files.map(async (file) => {
        const id = path.basename(file, ".json");
        return await database.get(table, id);
      })
    );
  },
};
