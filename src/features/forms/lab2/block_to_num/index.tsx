import { CesareCipherLab2 } from "../../../../shared/classes/cesare_cipher_lab2";
import { ConverterLab2 } from "../../../../shared/classes/converter_lab2";
import { HCLCG } from "../../../../shared/classes/HCLCG";
import { LCG } from "../../../../shared/classes/LCG";
import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";

export const BlockToNumForm = () => {
  const converter = new ConverterLab2();
  const ces = new CesareCipherLab2();
  //_____
  const seed = converter.BlockToNum("ЛУЛУ");
  const lcg = new LCG(seed, 723482, 8677, 983609);
  //-----
  const s1 = converter.SeedToNums(["АПЧХ", "Ч_ОК", "ШУРА"]);
  const hclcg = new HCLCG(s1, [
    [723482, 8677, 983609],
    [252564, 9109, 961193],
    [357630, 8971, 948209],
  ]);
  // const res = converter.BlockToNum("_ЯЗЬ");
  // const b_res = converter.NumToBlock(res);

  // const res = converter.DecToBin(1048575);
  // const b_res = converter.BinToDec(res);

  //const res = ces.oneSideFunction("ВАСЯ", "ББББ", 2);

  //const res = converter.NumToBlock(lcg.Next());
  //const res = hclcg.countUnityBits(1231);
  //const res = hclcg.composeNum(1231, 723482, 14);
  let res = hclcg.Next();
  //console.log(hclcg.set);
  const t_out = [];
  const i_out = [];
  t_out[0] = converter.NumToBlock(res);
  i_out[0] = res;
  for (let i = 1; i < 10; i++) {
    res = hclcg.Next();
    i_out[i] = res;
    t_out[i] = converter.NumToBlock(res);
  }

  //console.log((352893).toString(2));
  console.log((253715).toString(2), "253715");
  console.log((630685).toString(2), "630685");
  console.log(converter.DecToBin(253715), "253715");
  console.log(converter.DecToBin(630685), "630685");
  console.log(t_out);
  console.log(i_out);
  console.log(hclcg.composeNum(1231, 723482, 10), "");

  return (
    <form>
      <Input label="4 символа" placeholder="АБВГ" />
      <Button>Конвертировать</Button>
    </form>
  );
};
