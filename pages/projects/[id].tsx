import { useRouter } from "next/dist/client/router";

export type ProjectData = {
  title: string;
};

export default function Project(projectData: ProjectData) {
  const router = useRouter();
  const { id } = router.query;

  return <h1>{id}</h1>;
}
