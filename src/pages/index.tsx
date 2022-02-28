import { useRouter } from "next/router";
import { Button } from "@mui/material";
export default function Home() {
  const router = useRouter();
  const handleClickRouter = (page: string) => {
    router.push(page);
  };
  return <Button onClick={() => handleClickRouter("resume")}>이력서로</Button>;
}
