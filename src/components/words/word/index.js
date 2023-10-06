import { Stack } from "@mui/system";
import React from "react";
import CharBox from "./charBox";

const Word = ({ length = 5 }) => {

  const boxes = [];
  for (let i = 0; i < length; i++) {
    boxes.push(<CharBox key={i} />);
  }
  return (
    <Stack direction="row" spacing={0.8}>
      {boxes}
    </Stack>
  );
};

export default Word;
