"use client";

import Link from "next/link";
import { useMonster } from "../providers/monster";
import Monster from "@/components/ui/monster";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MonsterCount } from "@/lib/monster";
import { Dispatch, SetStateAction, useMemo, useRef } from "react";

export default function Page() {
  const { myMonsterId } = useMonster();

  const setMyHp = useRef<Dispatch<SetStateAction<number>>>();
  const setEnemyHp = useRef<Dispatch<SetStateAction<number>>>();

  // 25のモンスターからランダムに一つ選択
  const randomEnemyId = useMemo(() => {
    return Math.floor(Math.random() * MonsterCount) + 1;
  }, []);

  if (!myMonsterId) {
    redirect("/monster");
  }

  return (
    <div className="container py-10">
      <Button variant="outline" asChild className="mb-4">
        <Link href="/monster">戻る</Link>
      </Button>
      <Button
        onClick={() => {
          setMyHp.current?.(100);
          setEnemyHp.current?.(100);
        }}
        variant="outline"
        className="mb-4"
      >
        リセット
      </Button>

      <h2 className="font-bold text-2xl mb-6">戦闘開始</h2>
      <div className="grid gap-5 grid-cols-2">
        <div>
          <Monster
            onInit={(setter) => {
              setMyHp.current = setter;
            }}
            id={myMonsterId}
            mode="battle"
            onAttack={() => {
              setEnemyHp.current?.((prev) => Math.max(prev - 10, 0));
            }}
          />
        </div>
        <div>
          <Monster
            onInit={(setEnemeyHp) => {
              setEnemyHp.current = setEnemeyHp;
            }}
            id={randomEnemyId}
            mode="battle"
            onAttack={() => {
              setMyHp.current?.((prev) => Math.max(prev - 10, 0));
            }}
          />
        </div>
      </div>
    </div>
  );
}
