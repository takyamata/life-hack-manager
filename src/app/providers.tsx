// Jotai Providerをまとめてラップするコンポーネント
import { Provider as JotaiProvider } from 'jotai';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  // 必要に応じて他のProviderもここでラップ可能
  return <JotaiProvider>{children}</JotaiProvider>;
}
