import { Request, Response } from 'express';
import { getProducts } from '../get-products';

export const getHandler = (req: Request, res: Response) => {
  if (req.query.ageRange && req.query.incomeRange && req.query.isStudent) {
    try {
      const toSend: string[] = getProducts(req.query.ageRange as string, req.query.incomeRange as string, req.query.isStudent as 'yes' | 'no' );
      res.json(toSend);
    } catch {
      res.status(400).send('Wrong query')
    }
  } else {
    res.status(400).send('Wrong query');
  }
}