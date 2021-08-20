import { env } from "process";

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
