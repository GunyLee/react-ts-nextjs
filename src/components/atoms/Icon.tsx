import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../../styles/theme";
import { Box, SxProps } from "@mui/system";
import { useState } from "react";
type Props = {
  name: any;
  weight: any;
  color?:
    | "inherit"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  fontSize?: "large" | "medium" | "small";
  sx?: SxProps;
};
export default function Icon({ name, weight, color, fontSize, sx }: Props) {
  const [fs, setFs] = useState<number>(0);
  const icon: IconLookup = { prefix: weight, iconName: name };
  const iconColor =
    color === "inherit"
      ? "inherit"
      : color === "disabled"
      ? theme.palette.text.disabled
      : color === "primary"
      ? theme.palette.primary.dark
      : color === "secondary"
      ? theme.palette.secondary.dark
      : color === "error"
      ? theme.palette.error.dark
      : color === "info"
      ? theme.palette.info.dark
      : color === "success"
      ? theme.palette.success.dark
      : color === "warning"
      ? theme.palette.warning.dark
      : undefined;
  const iconSize = fontSize === "large" ? 20 : fontSize === "small" ? 12 : 16;
  return (
    <Box
      sx={{
        ...sx,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: iconSize + 4,
        height: iconSize + 4,
        "& *": {
          fontSize: iconSize,
        },
      }}
    >
      <FontAwesomeIcon icon={icon} color={iconColor} />
    </Box>
  );
}
Icon.defaultProps = {
  weight: "far",
};
