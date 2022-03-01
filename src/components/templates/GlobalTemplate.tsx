import { Box } from "@mui/material";
import { globalNav } from "../../constants";
import GlobalNav from "../organisms/GlobalNav";
type Props = {
  children?: React.ReactNode;
};
export default function GlobalTemplate({ children }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <GlobalNav data={globalNav} />
      {children}
    </Box>
  );
}
