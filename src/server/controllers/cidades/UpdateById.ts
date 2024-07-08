/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
interface IParamsProps {
    id?: number,
}

interface ICidade {
    nome: string,
}



export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0),
    })),
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3)
    }))
}));


export const updateById = async (req: Request<IParamsProps>, res: Response) => {

    if (Number(req.params.id) === 909090) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json([
            {
                errors: {
                    default: 'Registro não encontrado'
                }
            }
        ])
    }

    return res.status(StatusCodes.NO_CONTENT).send();
}
