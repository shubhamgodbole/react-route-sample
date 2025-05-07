import type { FC } from 'react';
import { LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const MiniLoader: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn('flex h-full w-full items-center justify-center text-primary', className)} {...props}>
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default MiniLoader;
