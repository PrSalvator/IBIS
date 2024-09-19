import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { useGetSymbolByCodeFormPresenter } from "./presenter";

export const GetSymbolByCodeForm = () => {
    const {form, handleSubmit, answer} = useGetSymbolByCodeFormPresenter();
    const {register, formState: {errors}} = form

  return (
    <div>
      <form className="flex items-center space-x-3" onSubmit={handleSubmit}>
        <Input label="Получить символ по номеру" error={errors.number?.message} {...register("number")}/>
        <Button type="submit">Получить!</Button>
      </form>
      <h1 className="text-[20px]">Ответ: {answer}</h1>
    </div>
  );
}