'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function PortalButton({ children = 'Open Portal', className = '' }: PortalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${className}`}
      >
        {children}
      </button>
      {isOpen && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Homepage Portal</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <iframe
                src="/"
                className="w-full h-96 border-0 rounded"
                title="Homepage Portal"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}