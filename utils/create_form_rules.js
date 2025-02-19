import * as yup from "yup";

export const validation = yup.object().shape({
    title: yup.string().required().min(8),
    description: yup.string().required(),
    origin: yup.string().required(),
    destination: yup.string().required(),
    senderFullName: yup.string().required().min(5),
    senderPhone: yup.string().required().min(8),
    weight: yup.number().required(),
    lenght: yup.number().required(),
    height: yup.number().required(),
    value: yup.number().required(),
    

})