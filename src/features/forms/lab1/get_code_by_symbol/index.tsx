import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { useGetCodeBySymbolFormPresenter } from "./presenter";

export const GetCodeBySymbolForm = () => {
  const { form, handleSubmit, answer } = useGetCodeBySymbolFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <form className="flex items-center space-x-3" onSubmit={handleSubmit}>
        <Input
          label="Получить номер символа"
          error={errors.symbol?.message}
          {...register("symbol")}
        />
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
};
