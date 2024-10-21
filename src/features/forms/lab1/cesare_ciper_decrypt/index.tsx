import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { useCesareCipherDecryptFormPresenter } from "./presenter";

export const CesareCipherDecryptForm = () => {
  const { form, handleSubmit, answer } = useCesareCipherDecryptFormPresenter();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h1 className="text-[20px] font-bold">
        Шифр Цезаря для расшифровки 1 символа
      </h1>
      <form
        className="flex flex-col w-fit items-center space-x-3"
        onSubmit={handleSubmit}
      >
        <Input
          label="Зашифрованный символ"
          error={errors.symbol?.message}
          {...register("symbol")}
        />
        <Input label="Ключ" error={errors.key?.message} {...register("key")} />
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
};
