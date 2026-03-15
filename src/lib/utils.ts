import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind 클래스 병합 유틸 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 숫자를 한국식 표기로 변환 (1200 → 1.2k) */
export function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
  return String(n);
}

/** 모집 중 여부 뱃지 색상 */
export function recruitingClass(isRecruiting: boolean) {
  return isRecruiting
    ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
    : 'bg-gray-100 text-gray-400 border-gray-200';
}

/** 분과별 색상 반환 */
export function categoryColor(cat: string): string {
  const map: Record<string, string> = {
    academic:  'bg-indigo-50 text-indigo-600',
    culture:   'bg-purple-50 text-purple-600',
    sports:    'bg-orange-50 text-orange-600',
    volunteer: 'bg-green-50 text-green-600',
    religion:  'bg-amber-50 text-amber-600',
    etc:       'bg-gray-100 text-gray-500',
  };
  return map[cat] ?? map.etc;
}
