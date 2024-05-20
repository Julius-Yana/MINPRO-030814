type User = {
    id: number
    role: string
    ownerReferral?: string;
  inputReferral?: string;
    
}

declare namespace Express {
    export interface Request {
        user?: User
    }
}