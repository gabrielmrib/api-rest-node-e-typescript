/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
interface IParamsProps {
    id?: number,

}



export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0),
    })),
}));


export const getById = async (req: Request<IParamsProps>, res: Response) => {

    if (Number(req.params.id) === 90909090) {
        return res.status(StatusCodes.NOT_FOUND).json([
            {
                errors: {
                    default: 'Id não encontrado'
                }
            }
        ])
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("não implementado!")
}
