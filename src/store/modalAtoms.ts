import { atom } from "jotai";

export const isUpdateUserModalOpenAtom = atom(false);
export const isUpdateRoleModalOpenAtom = atom(false);
export const isDeleteConfirmModalOpenAtom = atom(false);

export const selectedUserAtom = atom<{
  username: string;
  role: string;
} | null>(null);

export const selectedRoleAtom = atom<{
  role: string;
  permissions: string[];
} | null>(null);