/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
interface IParamsProps {
    id?: number,
}




export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0),
    })),

}));


export const deleteById = async (req: Request<IParamsProps>, res: Response) => {

    if (Number(req.params.id) === 9999999) {
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: "usuario não existe para ser apagado"
            }
        })
    }
    


    return res.status(StatusCodes.NO_CONTENT).send();
}
