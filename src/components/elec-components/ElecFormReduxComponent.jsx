import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ElecProductReduccomponent = ({ isOpen, onclose}) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product);
    const title = useSelector ((state) => state.product.title);
    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({
      nama: "",
      gambar:"",
      deskripsi:"",
    });

    useEffect(()=>{
        resetForm();
        handleFormUpdate();
    }, [isOpen]);

}

export default ElecProductReduccomponent;