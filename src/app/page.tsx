import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1>Hello, World!</h1>
      <Input placeholder="Digite seu nome" />
      <Button>Confirmar</Button>
    </div>
  );
};

export default HomePage;
