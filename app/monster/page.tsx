"use client";

import { Button } from "@/components/ui/button";
import Monster from "@/components/ui/monster";
import { monsters } from "@/lib/monster";
import Link from "next/link";
import { useMonster } from "../providers/monster";

export default function Page() {
  const { myMonsterId, setMyMonsterId } = useMonster();

  return (
    <main className="py-10 container">
      {myMonsterId && (
        <div>
          <h2>あなたのモンスターは</h2>
          {myMonsterId && (
            <div className="w-40">
              <Monster mode="none" id={myMonsterId} />
            </div>
          )}

          <Button asChild>
            <Link href="/battle">戦闘開始</Link>
          </Button>
        </div>
      )}

      <h2 className="font-bolx text-2xl">モンスターを選んでね</h2>
      <div className="grid gap-4 grid-cols-3">
        {monsters.map((monster, i) => {
          return (
            <Monster
              mode="select"
              onSelected={(id) => {
                setMyMonsterId(id);
              }}
              key={monster.id}
              id={monster.id}
            />
          );
        })}
      </div>
    </main>
  );
}
