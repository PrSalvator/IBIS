import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { useCesareCipherTextFormPresenter } from "./presenter";

export const CesareCipherTextForm = () => {
  const { form, handleSubmit, answer } = useCesareCipherTextFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">Шифр Цезаря для текста</h1>
      <form
        className="flex flex-col w-fit items-center space-x-3"
        onSubmit={handleSubmit}
      >
        <Input
          label="Текст"
          error={errors.text?.message}
          {...register("text")}
        />
        <Input label="Ключ" error={errors.key?.message} {...register("key")} />
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
};
