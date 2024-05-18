"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

type ContextType = {
  myMonsterId: number | undefined;
  setMyMonsterId: (id: number) => void;
};

const Context = createContext<ContextType>({} as ContextType);

export function MonsterProvider({ children }: { children: ReactNode }) {
  // const [myMonsterId, setMyMonsterId] = useState<number>();

  const [myMonsterId, setMyMonsterId] = useLocalStorageState<number>(
    "myMonsterId",
    {
      defaultValue: undefined,
    }
  );

  return (
    <Context.Provider
      value={{
        myMonsterId,
        setMyMonsterId,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMonster = () => useContext(Context);
