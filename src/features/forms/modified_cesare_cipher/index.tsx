import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { useModifiedCesareCipherFormPresenter } from "./presenter";

export const ModifiedCesareCiphertForm = () => {
  const { form, handleSubmit, answer } = useModifiedCesareCipherFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">Полиалфавитный шифр Цезаря</h1>
      <form className="flex flex-col w-fit items-center space-x-3" onSubmit={handleSubmit}>
        <Input
          label="Текст"
          error={errors.text?.message}
          {...register("text")}
        />
        <Input label="Ключ" error={errors.key?.message} {...register("key")} />
        <Input label="Холостой ход" error={errors.j_in?.message} {...register("j_in")} />
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
};
