import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
    id: string;
    role: string;
    iat: number;
    exp: number;
};