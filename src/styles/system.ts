import { ButtonVariant } from '@/types/style';

export const sizeStyle: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
  full: 'w-full',
};

export const colorStyle: Record<string, string> = {
  blue: 'bg-blue-500 text-white hover:bg-blue-600',
  red: 'bg-red-500 text-white hover:bg-red-600',
  green: 'bg-green-500 text-white hover:bg-green-600',
  gray: 'bg-gray-500 text-white hover:bg-gray-600',
};

export const variantStyle = (variant: ButtonVariant, color: string): string => {
  const baseColor = colorStyle[color] || colorStyle.blue;
  const variantClasses: Record<ButtonVariant, string> = {
    contained: `${baseColor} shadow hover:shadow-lg`,
    outlined: `border border-${color}-500 text-${color}-500 bg-transparent hover:bg-${color}-100`,
    text: `bg-transparent text-${color}-500 hover:bg-${color}-100`,
  };
  return variantClasses[variant];
};
