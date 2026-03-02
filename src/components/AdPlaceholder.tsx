import React from 'react';
import { cn } from '../utils/cn';

interface AdPlaceholderProps {
  className?: string;
  slot?: string;
}

export const AdPlaceholder = ({ className, slot = "General Ad" }: AdPlaceholderProps) => {
  return (
    <div className={cn(
      "bg-zinc-100 dark:bg-zinc-900 border border-dashed border-zinc-300 dark:border-zinc-800 flex items-center justify-center min-h-[100px] rounded-lg overflow-hidden",
      className
    )}>
      <div className="text-center p-4">
        <span className="text-[10px] uppercase tracking-widest opacity-30 font-bold block mb-1">Advertisement</span>
        <span className="text-xs opacity-20">{slot}</span>
      </div>
    </div>
  );
};
