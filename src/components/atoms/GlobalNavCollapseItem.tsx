import { alpha } from "@mui/lab/node_modules/@mui/system";
import { amber, grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { GlobalNavCollapseItemProps } from "../../constants";
type Props = {
  item: GlobalNavCollapseItemProps;
};
export default function GlobalNavCollapseItem({ item }: Props) {
  const router = useRouter();
  const selected = router.asPath.split("/")[3]
    ? router.asPath.split("/")[3] === item.value
    : false;
  const handleClick = () => {
    router.push(
      `/${router.asPath.split("/")[1]}/${item.title?.value}/${item.value}`
    );
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        borderRadius: 1,
        pt: 0.25,
        pb: 0.25,
      }}
    >
      <Typography
        sx={{
          borderRadius: 1,
          pt: 0.5,
          pb: 0.5,
          pl: 3.75,
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
          color: selected ? amber[800] : grey[500],
          backgroundColor: selected ? alpha(amber[900], 0.2) : "initial",
        }}
      >
        {item.children}
      </Typography>
    </Box>
  );
}
