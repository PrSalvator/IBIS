//import { CesareCipherLab2 } from "../../../../shared/classes/cesare_cipher_lab2";
import { ConverterLab2 } from "../../../../shared/classes/converter_lab2";
//import { HCLCG } from "../../../../shared/classes/HCLCG";
import { CesareCipherLab2 } from "../../../../shared/classes/cesare_cipher_lab2";
import { WrapHCLCG } from "../../../../shared/classes/wrapHCLCG";
//import { LCG } from "../../../../shared/classes/LCG";
import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { WrapCHCLCGM } from "../../../../shared/classes/wrapCHCLCGM";

export const BlockToNumForm = () => {
// const converter = new ConverterLab2();

  //const s1 = converter.SeedToNums(["АПЧХ", "Ч_ОК", "ШУРА"]);
// const cesare = new CesareCipherLab2();
//   for (let i = 1; i < 7; i++){
//     console.log(cesare.oneSideFunction('____','ЗЕЛЕНЫЙ_ШАР',i));
//   } 

  // const set = [
  //   [723482, 8677, 983609],
  //   [252564, 9109, 961193],
  //   [357630, 8971, 948209],
  // ] 
  // const hclcg = new HCLCG(s1, [
  //   [723482, 8677, 983609],
  //   [252564, 9109, 961193],
  //   [357630, 8971, 948209],
  // ]);

  // const seed = 'АБВГДЕЖЗИЙКЛМНОП';

  // const wrap = new WrapHCLCG(seed, set);

  // const wrap_intern = wrap.Next();

  // for (let i = 1; i < 9;i++){
  //   console.log(wrap.Next());
  // }

  // console.log("niger")

  // console.log(converter.CheckSeed('ВВВВГГГГАААААААА'))
  // const seed = 'ААААББББВВВВГГГГ';
  // const wrap = new WrapCHCLCGM(seed, set);

  // for (let i = 0; i< 9;i++){
  // console.log(wrap.Next())
  // }

 
  return (
    <form>
      <Input label="4 символа" placeholder="АБВГ" />
      <Button>Конвертировать</Button>
    </form>
  );
};
