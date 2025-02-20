import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="flex w-64 flex-col gap-2">
      <h1 className="text-4xl">Hello, World!</h1>
      <Input placeholder="Digite seu nome" />
      <Button>Confirmar</Button>
    </div>
  );
};

export default HomePage;
