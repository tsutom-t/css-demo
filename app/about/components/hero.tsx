import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 flex items-center">
      <div className="container">
        <h1 className="font-bold text-4xl mb-5 sm:text-6xl">Hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          modi ducimus doloribus aut fuga temporibus nostrum, natus beatae,
          neque quod officiis vel quae reiciendis dolore, rerum similique omnis
          sit ipsa.
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
