import { useNavigate } from "react-router-dom";
import { Box, Card, Fab, Typography } from "..";
import AddIcon from "@mui/icons-material/Add";

const cardNewItem = ({ title, actionType, Icon, color }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Box>
        <Icon sx={{ color: color }} />
        <Typography>{title}</Typography>
      </Box>
      <Box>
        <Typography>Adicione algo</Typography>
      </Box>
      <Box>
        <Fab
          sx={{ color: color, background: "#fff" }}
          onClick={() => {
            navigate(`new/${actionType}`);
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Card>
  );
};

export default cardNewItem;
