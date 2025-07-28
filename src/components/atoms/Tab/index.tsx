import React from "react";

interface TabProps {
  children: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => {
  return (
    <div className="w-[325px] h-[920px] shrink-0 rounded-l-[40px] bg-[var(--color-blue-200)] shadow-tab">
      {children}
    </div>
  );
};
