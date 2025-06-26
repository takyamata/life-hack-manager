// サンプルページ: Googleログイン・Firestore・Jotaiの利用例
'use client';
import { useGoogleAuth } from '../lib/useGoogleAuth';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';
import { addSample, getSamples } from '../lib/firestoreSample';
import styles from './page.module.scss';

export default function Page() {
    const { user, loading, login, logout } = useGoogleAuth();
    const [, setUserAtom] = useAtom(userAtom);

//   useEffect(() => {
//     setUserAtom(user);
//   }, [user, setUserAtom]);

    const handleAdd = async () => {
        await addSample({ text: 'Hello Firestore', createdAt: new Date() });
        alert('追加しました');
    };

    const handleGet = async () => {
        const samples = await getSamples();
        alert(JSON.stringify(samples));
    };

    if (loading) return <div>Loading...</div>;

    return (<>
        <h1>Life Hack Manager サンプル</h1>
        {user ? (
            <>
            <div>ログイン中: {user.displayName}</div>
            <button onClick={logout}>ログアウト</button>
            <button onClick={handleAdd}>Firestoreに追加</button>
            <button onClick={handleGet}>Firestore一覧取得</button>
            </>
        ) : (
            <button onClick={login}>Googleでログイン</button>
        )}
    </>);
}
