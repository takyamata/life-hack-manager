import { Provider as JotaiProvider } from 'jotai';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <JotaiProvider>{children}</JotaiProvider>;
}
