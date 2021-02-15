import { APP_URL } from "../config";
import { Project } from "../models/project";

/**
 * Get all projects in the database.
 */
export async function getAllProjects(): Promise<Project[]> {
  const response = await fetch(`${APP_URL}/api/projects`);
  return await response.json();
}

/**
 * Get project with given `id` from the database.
 * @param id {string}
 */
export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${APP_URL}/api/projects/${id as string}`);
  return await response.json();
}
