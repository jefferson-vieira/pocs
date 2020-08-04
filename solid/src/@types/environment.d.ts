declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAIL_TRAP_HOST: string;
      MAIL_TRAP_PORT: number;
      MAIL_TRAP_USER: string;
      MAIL_TRAP_PASS: string;
    }
  }
}

export {};
