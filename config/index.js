const dev = process.env.NODE_ENV !== "production";

export const serverUrl = dev
  ? "http://localhost:3000"
  : "https://aikya22.vercel.app/";


  