import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import { useParam } from "../../utils";
type ModalProp = "" | "resume";
export default function Main() {
  const router = useRouter();
  const handleClickRouter = (page: string) => {
    console.log(router.asPath);
    router.push(`${router.asPath}${page}`);
  };
  const modal: ModalProp | null = useParam(1) as ModalProp | null;
  return (
    <Box>
      <Box
        sx={{
          width: 100,
          height: 100,
          display: modal === "resume" ? "block" : "none",
        }}
      />
    </Box>
  );
}
