import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";

const customText = ({ label, href }) => {
  return (
    <Box>
      <Link href={href}>
        <a>
          <Typography color="primary" variant="subtitle1">
            {label}
          </Typography>
        </a>
      </Link>
    </Box>
  );
};

export default customText;
