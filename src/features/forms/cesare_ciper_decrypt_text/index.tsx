import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { useCesareCipherDecryptTextFormPresenter } from "./presenter";

export const CesareCipherDecryptTextForm = () => {
  const { form, handleSubmit, answer } = useCesareCipherDecryptTextFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">Шифр Цезаря для расшифровки текста</h1>
      <form className="flex flex-col w-fit items-center space-x-3" onSubmit={handleSubmit}>
        <Input
          label="Зашифрованный текст"
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