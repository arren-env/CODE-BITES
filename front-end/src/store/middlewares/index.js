import { authMiddleware } from "./auth.middleware";


export const coreMiddleware = [
    authMiddleware,
];