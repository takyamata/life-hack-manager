// ユーザー情報を管理するJotaiのatom
import { atom } from 'jotai';
import type { User } from 'firebase/auth';

export const userAtom = atom<User | null>(null);
