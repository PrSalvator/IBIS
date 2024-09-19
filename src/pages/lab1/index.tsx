import { BackSBlockForm } from "../../features/forms/back_s_block";
import { CesareCipherDecryptForm } from "../../features/forms/cesare_ciper_decrypt";
import { CesareCipherDecryptTextForm } from "../../features/forms/cesare_ciper_decrypt_text";
import { CesareCipherForm } from "../../features/forms/cesare_cipher";
import { CesareCipherTextForm } from "../../features/forms/cesare_cipher_text";
import { ConvertNumArrayToTextForm } from "../../features/forms/convert_num_array_to_text";
import { ConvertTextToNumArrayForm } from "../../features/forms/convert_text_to_num_array";
import { GetCodeBySymbolForm } from "../../features/forms/get_code_by_symbol";
import { GetSymbolByCodeForm } from "../../features/forms/get_symbol_by_code";
import { ModifiedCesareCipherDecryptForm } from "../../features/forms/modified_cesare_ciper_decrypt";
import { ModifiedCesareCiphertForm } from "../../features/forms/modified_cesare_cipher";
import { ReinforceSBlockForm } from "../../features/forms/reinforce_s_block";
import { ReinforceSBlockDecryptForm } from "../../features/forms/reinforce_s_block_decrypt";
import { StraightSBlockForm } from "../../features/forms/straight_s_block";
import { SubstructSymbolsForm } from "../../features/forms/substruct_symbols";
import { SumSymbolsForm } from "../../features/forms/sum_symbols";

export const Lab1Page = () => {
  return (
    <div className="p-4 flex flex-col space-y-3 divide-y  divide-slate-300">
      <section>
        <h1 className="text-[32px]">Задание 1</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <GetCodeBySymbolForm />
            <GetSymbolByCodeForm />
          </div>
          <div className="flex space-x-4">
            <SumSymbolsForm />
            <SubstructSymbolsForm />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[32px]">Задание 2</h1>
        <div className="flex space-x-4">
          <CesareCipherForm />
          <CesareCipherDecryptForm />
        </div>
      </section>
      <section>
        <h1 className="text-[32px]">Задание 3</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <ConvertTextToNumArrayForm />
            <ConvertNumArrayToTextForm />
          </div>
          <div className="flex space-x-4">
            <CesareCipherTextForm />
            <CesareCipherDecryptTextForm />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[32px]">Задание 4</h1>
        <div className="flex space-x-4">
          <ModifiedCesareCiphertForm />
          <ModifiedCesareCipherDecryptForm />
        </div>
      </section>
      <section>
        <h1 className="text-[32px]">Задание 5</h1>
        <div className="flex space-x-4">
          <StraightSBlockForm />
          <BackSBlockForm />
        </div>
      </section>
      <section>
        <h1 className="text-[32px]">Задание 6</h1>
        <div className="flex space-x-4">
          <ReinforceSBlockForm />
          <ReinforceSBlockDecryptForm />
        </div>
      </section>
    </div>
  );
};
