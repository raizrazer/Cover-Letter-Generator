import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Tooltip, Typography, Box } from "@mui/material";

import { deleteOutput } from "../app/slicers/outputsSlice";
import { useDispatch, useSelector } from "react-redux";

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

  const messages = useSelector((state) => state.outputs.value);

  var docDefinition = {
    pageSize: "A5",
    pageMargins: [30, 60, 30, 60],
    info: {
      title: `Cover Letter ${messages[id].companyname}`,
      author: "Cover Letter generator by Monkie",
      subject: `Cover Letter for ${messages[id].companyname}`,
      keywords: "cover letter, resume letter",
    },
    content: [
      {
        text: [`Cover Letter - ${messages[id].companyname}`],
        style: "head",
      },
      {
        text: [content],
        style: "header",
      },
    ],
    styles: {
      head: {
        fontSize: 14,
        bold: true,
        alignment: "center",
        margin: [0, 20, 0, 80],
      },
      header: {
        fontSize: 10,
        bold: false,
        alignment: "left",
      },
    },
  };

  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
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
          borderRadius: "6px",
        }}
      >
        <Typography variant="body1">{companyName}</Typography>
        <Box>
          <Tooltip title="Copy">
            <IconButton
              aria-label="copy"
              onClick={() => {
                // Copy the text inside the text field
                navigator.clipboard.writeText(messages[id].message);
                copyToClipboard(messages[id].message.toString())
                console.log(messages[id].message);
                // console.log("Clicked Copy");
                // console.log(messages[id].companyname);
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download">
            <IconButton
              aria-label="download"
              onClick={() => {
                pdfMake.createPdf(docDefinition).open();
                // console.log("Clicked Download");
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
                // console.log("Delete");
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
