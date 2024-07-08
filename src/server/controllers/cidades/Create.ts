
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
interface ICidade {
    nome: string,
}

//midware 02
interface Ifilter {
    filter?: string,
}
const queryValidation: yup.Schema<Ifilter> = yup.object().shape({
    filter: yup.string().required().min(3)
})

export const createBodyValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({ nome: yup.string().required().min(3) })),
}));


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const validateData: ICidade | undefined = undefined;

    return res.status(StatusCodes.CREATED).json({'id':1})
}