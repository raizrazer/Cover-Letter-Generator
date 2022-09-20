import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Tooltip, Typography, Box } from "@mui/material";

import { deleteOutput } from "../app/slicers/outputsSlice";
import { useDispatch } from "react-redux";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const colors = [
  "#937DC2",
  "#FFABE1",
  "#FF9494",
  "#FBF2CF",
  "#B1B2FF",
  "#D2DAFF",
  "#ECC5FB",
  "#EBC7E8",
];
const len = colors.length;
const CompanyButton = ({ companyName, id, content }) => {
  const color = colors[id % len];
  const dispatch = useDispatch();
  const printContent = {
    content: [
      {
        stack: [content],
        style: "header",
      },
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: false,
        alignment: "left",
        margin: [0, 100, 0, 80],
      },
    },
  };
  return (
    <div>
      <Box
        variant="contained"
        sx={{
          backgroundColor: color,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "0px 0px",
          margin: "20px 0px",
          justifyContent: "space-evenly",
          borderRadius: "2px",
        }}
      >
        <Typography variant="body1">{companyName}</Typography>
        <Box>
          <Tooltip title="Copy">
            <IconButton
              aria-label="copy"
              onClick={() => {
                navigator.clipboard.writeText(content);
                console.log("Clicked Copy");
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download">
            <IconButton
              aria-label="download"
              onClick={() => {
                pdfMake.createPdf(printContent).open();
                console.log("Clicked Download");
              }}
            >
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(deleteOutput({ id }));
                console.log("Delete");
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
};

export default CompanyButton;
