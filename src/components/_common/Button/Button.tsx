import { sizeStyle, variantStyle } from '@/styles/system';
import { ButtonVariant, Size } from '@/types/style';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  color?: string;
  size?: Size | 'full';
  round?: boolean;
  iconPosition?: 'start' | 'end';
  icon?: React.ElementType;
  className?: string;
}

const Button = ({
  label,
  variant = 'contained',
  disabled = false,
  color = 'blue',
  size = 'small',
  round = false,
  iconPosition = 'start',
  icon: Icon,
  className = '',
  ...props
}: Props) => {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all
        ${sizeStyle[size]} ${variantStyle(variant, color)}  ${
        round ? 'rounded-full' : 'rounded-md'
      }
        ${disabled && 'opacity-50 cursor-not-allowed'}
        ${className}
        `}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'start' && Icon && <Icon className="mr-2" />}
      {label}
      {iconPosition === 'end' && Icon && <Icon className="ml-2" />}
    </button>
  );
};

export default Button;
