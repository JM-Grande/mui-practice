import React, { useState } from "react";
import {
  styled,
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: ".5em",
  marginBottom: "1em",
});

const Add = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={(e) => {
            setOpenModal(true);
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={openModal}
        onClose={(e) => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            {" "}
            Create Post{" "}
          </Typography>
          <UserBox>
            <Avatar sx={{ width: "30px", height: "30px", cursor: "pointer" }} />
            <Typography fontWeight={500} variant="span">
              JM Grande
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            variant="standard"
            placeholder="What's on your mind?"
            multiline
            rows={3}
          />
          <Stack direction="row" gap="1em" mt={2} mb={3}>
            <EmojiEmotionsIcon color="warning" />
            <ImageIcon color="success" />
            <VideoCameraBackIcon color="error" />
            <PersonAddIcon color="secondary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "5em" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
