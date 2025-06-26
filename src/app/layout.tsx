import type { Metadata } from 'next';
import { Providers } from '@app/providers';
import styles from './layout.module.scss'
import '@styles/global.scss';
import '@styles/variables.scss';
import Header from '@/components/Header/Header';

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
                <Providers>
                    <div className={styles.layout}>
                        <Header/>
                        <main className={styles.main}>
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
