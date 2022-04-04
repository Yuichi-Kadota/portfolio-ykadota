import React, { createRef } from 'react';

export interface ContextRefs {
  aboutRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  certificateRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export interface SiteRefContextProps {
  ContextRefs: ContextRefs;
}

export const SiteRefContext = React.createContext<
  SiteRefContextProps | undefined
>(undefined);

export const SiteRefProvider: React.FC<SiteRefContextProps> = ({
  children,
  ContextRefs,
}) => {
  return (
    <SiteRefContext.Provider value={{ ContextRefs }}>
      {children}
    </SiteRefContext.Provider>
  );
};
