import { useContext } from 'react';
import { SiteRefContext } from './context';

export const useSiteRef = () => {
  const context = useContext(SiteRefContext);

  if (context === undefined) {
    throw new Error('useSiteRef must be used within a SiteRefContext');
  }
  return context;
};
