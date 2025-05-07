// Text truncate component
import type { ReactNode } from 'react';
import type { TooltipContentProps, TooltipProps } from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface TextTruncateProps {
  /**
   * Whether to show the tooltip.
   */
  withTooltip?: boolean;
  /**
   * The content of the text truncate component.
   */
  children: ReactNode;
  /**
   * The tooltip content of the text truncate component.
   */
  tooltipContent?: ReactNode;
  /**
   * The side of the tooltip.
   */
  tooltipContentProps?: TooltipContentProps;

  /**
   * The props of the tooltip component.
   */
  tooltipProps?: TooltipProps;
  /**
   * The minimum length of the text to show the tooltip.
   */
  minLength?: number;

  /**
   * The class name of the text truncate component (p).
   */
  className?: React.ComponentProps<'p'>['className'];
}

const TextTruncate: React.FC<TextTruncateProps> = ({
  children,
  className,
  tooltipContent,
  tooltipContentProps,
  tooltipProps,
  withTooltip = true,
  minLength = 10
}) => {
  if (!withTooltip || (typeof children === 'string' && children.length < minLength)) {
    return <span className={cn('truncate', className)}>{children}</span>;
  }

  return (
    <Tooltip {...tooltipProps}>
      <TooltipTrigger asChild>
        <span className={cn('truncate', className)}>{children}</span>
      </TooltipTrigger>
      <TooltipContent {...tooltipContentProps}>{tooltipContent ?? children}</TooltipContent>
    </Tooltip>
  );
};

export default TextTruncate;
