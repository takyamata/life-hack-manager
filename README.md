# Life Hack Manager

Next.js (App Router) + TypeScript + Sass(CSS Modules) + Jotai + Firebase(Auth/Firestore) スタータープロジェクト

## セットアップ手順

### 1. 依存関係のインストール
```
npm install
```

### 2. Firebase プロジェクトの準備
- [Firebaseコンソール](https://console.firebase.google.com/)で新規プロジェクトを作成
- 「プロジェクトの設定」→「マイアプリ」→「Firebase SDK snippet（構成）」から設定値を取得
- `src/lib/firebase.ts` の `firebaseConfig` を自分の値に書き換え

### 3. 開発サーバー起動
```
npm run dev
```

## 主なディレクトリ構成

```
src/
  app/           ... Next.js App Router 構成
    layout.tsx   ... Jotai Provider組み込み済み
    page.tsx     ... Googleログイン・Firestore・Jotaiサンプル
    providers.tsx... Providerラッパー
  atoms/         ... Jotaiのatom置き場
  lib/           ... Firebase初期化・認証/Firestoreユーティリティ
  styles/        ... グローバルSass
```

## 実装済みサンプル
- Googleログイン（`src/lib/useGoogleAuth.ts`）
- Firestore CRUD（`src/lib/firestoreSample.ts`）
- Jotaiでのユーザー管理（`src/atoms/userAtom.ts`）
- サンプルページ（`src/app/page.tsx`）

## 注意点
- Firebaseの設定値は必ずご自身のものに書き換えてください
- Firestoreのセキュリティルールも適切に設定してください
- Storybookは導入していません

---

### 開発のヒント
- UIコンポーネントは `src/components/` や `src/features/` などに追加していくと良いです
- 状態管理はJotai、認証・DBはFirebaseで統一しています
- Sass(CSS Modules)でスコープ付きスタイルが利用できます

---

## ライセンス
MIT
