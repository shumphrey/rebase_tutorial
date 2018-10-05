"use strict";

import { NextFunction, Request, Response } from 'express';
import request from 'request';

/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
  res.json(['ok']);
};
