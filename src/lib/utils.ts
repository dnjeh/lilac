import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStreak = () => {
  const start = new Date("2022-11-14");
  const today = new Date();
  const diffTime = today.getTime() - start.getTime();
  // 밀리초를 일(day) 단위로 변환
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}