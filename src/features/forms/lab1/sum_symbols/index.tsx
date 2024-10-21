import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { useSumSymbolsFormPresenter } from "./presenter";

export const SumSymbolsForm = () => {
  const { form, handleSubmit, answer } = useSumSymbolsFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">Сумма символов</h1>
      <form
        className="flex flex-col items-center w-fit"
        onSubmit={handleSubmit}
      >
        <Input
          label="Символ №1"
          error={errors.symbolA?.message}
          {...register("symbolA")}
        />
        <Input
          label="Символ №2"
          error={errors.symbolB?.message}
          {...register("symbolB")}
        />
        <Button type="submit">Сложить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
};
