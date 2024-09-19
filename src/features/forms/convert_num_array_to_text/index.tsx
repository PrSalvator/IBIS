import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { useConvertNumArrayToTextFormPresenter } from "./presenter";

export const ConvertNumArrayToTextForm = () => {
  const { form, handleSubmit, answer } =
    useConvertNumArrayToTextFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">
        Коевертирование массива номеров в строку
      </h1>
      <form
        className="flex flex-col w-fit items-center space-x-3"
        onSubmit={handleSubmit}
      >
        <Input
          label="Текст в виде чисел, разделенных пробелом"
          error={errors.numbers?.message}
          {...register("numbers")}
        />
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
};
