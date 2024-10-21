import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";

export const BlockToNumForm = () => {
  return (
    <form>
      <Input label="4 символа" placeholder="АБВГ" />
      <Button>Конвертировать</Button>
    </form>
  );
};
