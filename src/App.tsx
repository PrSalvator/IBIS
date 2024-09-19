//import { useCallback } from "react";
//import {GetCodeBySymbol, GetSymbolByCode, SumSymbols, SubtractSymbols} from './shared/algorithms/converters';
import { DecryptText, EncryptText } from "./shared/algorithms/text_crypt";
import { BackSBlock, StraightSBlock } from "./shared/algorithms/S_blocks/encryption_wrapper";
//import { ReinforceSBlockDecrypt, ReinforceSBlockEncrypt } from "./shared/algorithms/S_blocks/reinforce_s_blocks";
import { PolyAlphabatCesareDecrypt, PolyAlphabatCesareEncrypt } from "./shared/algorithms/modified_cipher";
import { ReinforceSBlockDecrypt, ReinforceSBlockEncrypt } from "./shared/algorithms/S_blocks/reinforce_s_blocks";

function App() {


  console.log(ReinforceSBlockEncrypt('МАКАКА_СУПЕР','ЧУВАК',6),ReinforceSBlockDecrypt('МАКАКА_СУПЕР','ЧЛОПК',2));
  console.log(StraightSBlock('ЗВеЗДНАЯ_НОЧЬ','БЛОК',11),BackSBlock('ЗВЁЗДНАЯ_НОЧЬ','Щ_КЙ',11));
  console.log(PolyAlphabatCesareEncrypt('хуй','гондон',1),PolyAlphabatCesareDecrypt('хуй','чмбмах',1));
  console.log(EncryptText('сьешь_же_еще_этих_мягких_французских_булок_да_выпей_чаю','я'), DecryptText('РЫДЧЫЯЕДЯДШДЯЬСЗФЯЛЮВЙЗФЯУП_МХТЖРЙЗФЯАТКНЙЯГ_ЯБЩОДИЯЦ_Э','я'));

  return (
    <>
      {/* {getcode("Ч")}
      {getsymb(0)}
      {sumsymbs("А","б")}
      {subctsymbs("г","Б")} */}
    </>
  )
}

export default App
