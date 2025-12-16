import { Request, Response, NextFunction } from "express";
import service from "./service";
import { z } from "zod";

const optionalNumber = (defaultValue: number) =>
  z
    .string()
    .optional()
    .transform((val) => {
      const num = Number(val);
      return isNaN(num) ? defaultValue : num;
    });

const querySchema = z.object({
  term: z.string().optional(),
  limit: optionalNumber(10),
  offset: optionalNumber(0),
});

class ItunesController {
    async getItunes(req: Request, res: Response, next: NextFunction) {
        try {
          const { term, limit, offset } = querySchema.parse(req.query); 
          const result = await service.getItunes({ term, limit, offset });
          
          if (result?.error) {
            return res.status(result.error.status || 500).json(result.error);
          }
          
          res.status(200).json(result);
        } catch (error) {
          if (error instanceof z.ZodError) {
            return res.status(400).json({ error: "Invalid parameters" });
          }
          
          res.status(500).json({ error: "Internal server error" });
        }
    }
}

export default new ItunesController();