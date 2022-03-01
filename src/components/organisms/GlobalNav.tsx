import { Box } from "@mui/material";
import { GlobalNavProps } from "../../constants";
import GlobalNavItem from "../molecules/GlobalNavItem";
type Props = {
  data: GlobalNavProps[];
};
export default function GlobalNav({ data }: Props) {
  return (
    <>
      <Box sx={{ width: 300 }} />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 300,
          height: "100%",
          borderRight: "1px solid rgba(255, 224, 194, 0.08)",
          borderTopColor: "rgba(255, 224, 194, 0.08)",
          borderBottomColor: "rgba(255, 224, 194, 0.08)",
          borderLeftColor: "rgba(255, 224, 194, 0.08)",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            mt: 1,
            pl: 1.25,
            pr: 1.25,
          }}
        >
          {data.map((item, index) => (
            <GlobalNavItem key={index} item={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}
