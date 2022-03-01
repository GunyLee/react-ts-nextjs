import { useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import { GlobalNavProps } from "../../constants";
import GlobalNavTitleItem from "../atoms/GlobalNavTitleItem";
import GlobalNavCollapseItem from "../atoms/GlobalNavCollapseItem";
import { grey } from "@mui/material/colors";
type Props = {
  item: GlobalNavProps;
};
export default function GlobalNavItem({ item }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleClick = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box
      sx={{
        mt: 1,
        pl: 1.25,
        pr: 1.25,
      }}
    >
      <GlobalNavTitleItem
        item={{ ...item.title, onClick: handleClick, checked: checked }}
      />
      <Collapse in={checked}>
        {item.sections?.map((item, index) => (
          <Box key={index}>
            {item.subtitle && (
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  pl: 3.75,
                  fontSize: 11,
                  lineHeight: 1.5,
                  fontWeight: "700",
                  verticalAlign: "center",
                  "@media (min-width: 900px)": {
                    pt: 0.25,
                    pb: 0.25,
                  },
                  color: grey[700],
                }}
              >
                {item.subtitle}
              </Typography>
            )}
            <Box>
              {item.collapses?.map((item, index) => (
                <GlobalNavCollapseItem key={index} item={item} />
              ))}
            </Box>
          </Box>
        ))}
      </Collapse>
    </Box>
  );
}
