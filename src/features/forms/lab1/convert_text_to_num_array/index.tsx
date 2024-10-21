import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { useConvertTextToNumArrayFormPresenter } from "./presenter";

export const ConvertTextToNumArrayForm = () => {
  const { form, handleSubmit, answer } =
    useConvertTextToNumArrayFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">
        Коевертирование строки в массив номеров
      </h1>
      <form
        className="flex flex-col w-fit items-center space-x-3"
        onSubmit={handleSubmit}
      >
        <Input
          label="Текст"
          error={errors.text?.message}
          {...register("text")}
        />
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">
        Ответ:
        {answer?.map((item) => `${item} `)}
      </h1>
    </div>
  );
};
