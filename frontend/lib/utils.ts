import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Base API URL - change this for production deployment
// export const BASE_URL = "http://127.0.0.1:8000"
export const BASE_URL = "https://wfl-api.vercel.app"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
