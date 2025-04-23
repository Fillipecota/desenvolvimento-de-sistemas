import { Dialog } from "@mui/material";

type ModalNewTransactionProps = {
    open: boolean;
    handleClose:(value:boolean)=>void;
}

export default function ModalNewTransaction({open,handleClose}:ModalNewTransactionProps){

    return(
        <Dialog open ={open} onClose={handleClose}>
            <h1>Modal Nem Transaction</h1>
        </Dialog> 
    )
}