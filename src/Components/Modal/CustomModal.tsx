"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@/lib/hooks";
import { updatePopUpState } from "@/lib/popupSlice";
import { useDispatch } from "react-redux";
import styles from "./CustomModal.module.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  boxShadow: 24,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "12px",
  p: 4,
};

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const { popUpState, popUpComponent } = useAppSelector(
    (state) => state.popupReducer
  );
  const [open, setOpen] = React.useState(popUpState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => dispatch(updatePopUpState(false));

  React.useEffect(() => {
    setOpen(popUpState);
  }, [popUpState]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={popUpState}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        // className={styles.Wrapper}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>{popUpComponent}</div>
            <Button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "5%",
                right: "0",
                margin: "2px",
              }}
            >
              x
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

// export type AddTransactionButtonProps = { :  }
// export const AddTransactionButton: React.FC<AddTransactionButtonProps> = ({  }) => {
//     const [, set] = React.useState();
//     React.useEffect(() => {}, [])
//     return (

//     )
// };

// export default AddTransactionButton;
