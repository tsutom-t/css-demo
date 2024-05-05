import Image from "next/image";
import image from "./Tsutomu-T_avatar.jpeg";

export default function Home() {
  return (
    <main className="p-10">
      <div className="group gap-6 flex transition duration-500 hover:shadow-2xl items-center rounded-xl shadow-sm bg-muted border p-6">
        <div
          className="aspect-square
          rounded-lg overflow-hidden border-2 border-primary-foreground w-20 relative
          group-hover:scale-125
          group-hover:-rotate-12
          group-hover:shadow-lg
          transition
          duration-500"
        >
          <Image src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-1">TsutomuT</h2>
          <p className="text-muted-foreground">Webアプリ開発が好きです</p>
        </div>
      </div>
      <div className="[perspective:2000px] w-fit mx-auto relative">
        <div className="bg-card border absolute bottom-4 left-4 w-ffull p-6 z-20 rounded shadow-md">
          ヒント
          <div className="opacity-0 group-has-[:hover(#hero)]:opacity-100">
            ここはヒーロセクションです
          </div>
        </div>
        <div
          className="border group w-80 mx-async function name(params:type) {
        } [transform:rotateY(-24deg)_rotateX(45deg)] [transform-style:preserve-3d] rounded-md shadow-ms mt-20"
        >
          <div className="flex gap-2 p-4 border-b *:size-2.5 *:rounded-full bg-muted/50">
            <div className=" bg-red-500"></div>
            <div className=" bg-green-500"></div>
            <div className=" bg-yellow-500"></div>
          </div>
          <div className="aspect-[3/4] p-4 [transform-style:preserve-3d]">
            <div
              id="hero"
              className="
            aspect-video rounded hover:[transform:translateZ(40px)]
            transition duration-500 hover:shadow-xl
            shadow bg-zinc-400 group"
            >
              <div className="p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                <h2>キャンペーン</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="h-4 rounded-full border overflow-hidden bg-muted my-10">
              <div
                className="size-full bg-lime-500 origin-left scale-x-0
              transition duration-500
              group-hover:scale-x-100"
              ></div>
            </div>
            <div
              className="border rounded-lg bg-muted shadow-sm w-1/2 aspect-video
            scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100
            transition duration-500"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
