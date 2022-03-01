import { alpha } from "@mui/lab/node_modules/@mui/system";
import { amber } from "@mui/material/colors";
import { Box } from "@mui/material";
import { GlobalNavTitleItemProps } from "../../constants";
import Icon from "./Icon";
type Props = {
  item: GlobalNavTitleItemProps;
};
export default function GlobalNavTitleItem({ item }: Props) {
  return (
    <Box
      onClick={item.onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: 1,
        mt: 1,
        mb: 1,
        pt: 0.5,
        pb: 0.5,
        pl: 0.25,
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: "700",
        verticalAlign: "center",
        "@media (min-width: 900px)": {
          pt: 0.25,
          pb: 0.25,
        },
        "&:hover": {
          backgroundColor: alpha(amber[900], 0.1),
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          mr: 1.5,
        }}
      >
        <Icon name={item.name} weight="fas" color="primary" fontSize="small" />
      </Box>
      {item.children}
      <Icon
        name="chevron-right"
        weight="fas"
        color="primary"
        fontSize="small"
        sx={{
          width: "1em",
          height: "1em",
          ml: "auto",
          mr: 1,
          transform: item.checked ? "rotate(90deg)" : "initial",
        }}
      />
    </Box>
  );
}
