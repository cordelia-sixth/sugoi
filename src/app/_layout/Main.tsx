/**
 * メインコンポーネント
 */
export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex h-full flex-1 flex-col">{children}</main>;
};
