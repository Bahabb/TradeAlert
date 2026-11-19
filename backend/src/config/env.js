import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 5000;
export const reactUrl = process.env.REACT_APP_URL || "http://localhost:5173"; 
export const corsOrigins = process.env.CORS_ORIGINS?.split(",") || ["http://localhost:5173"];