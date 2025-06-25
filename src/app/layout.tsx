import type { Metadata } from 'next';
import { Providers } from './providers';
import '../styles/global.scss';

export const metadata: Metadata = {
  title: 'Life Hack Manager',
  description: 'Next.js + Jotai + Firebase + Sass スターター',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
