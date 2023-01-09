export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      PORT: number;  
      JWT_SECRET: string;    
      ENV: 'production' | 'development';
    }
  }

}