import React, { createRef } from 'react';

const aboutRef = createRef();
const skillRef = createRef();
const experienceRef = createRef();
const certificateRef = createRef();
const contactRef = createRef();

export interface refs {
  aboutRef: React.RefObject<unknown>;
  skillRef: React.RefObject<unknown>;
  experienceRef: React.RefObject<unknown>;
  certificateRef: React.RefObject<unknown>;
  contactRef: React.RefObject<unknown>;
}

const defaultRef: refs = {
  aboutRef: aboutRef,
  skillRef: skillRef,
  experienceRef: experienceRef,
  certificateRef: certificateRef,
  contactRef: contactRef,
};

export interface SiteRefContextProps {
  refs?: refs;
}

export const SiteRefContext = React.createContext<SiteRefContextProps>({
  refs: defaultRef,
});

export const SiteRefProvider: React.FC<SiteRefContextProps> = ({
  children,
  refs,
}) => {
  return (
    <SiteRefContext.Provider value={{ refs }}>
      {children}
    </SiteRefContext.Provider>
  );
};
