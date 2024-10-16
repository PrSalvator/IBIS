// import { StraightSBlock } from "../algorithms/S_Blocks/encryption_wrapper";
// import { blockToNum } from "./block_converter";
// import { SumSymbols } from "../algorithms/converters";
// import { ReinforceSBlockEncrypt } from "../algorithms/S_Blocks/reinforce_s_blocks";

// export function oneSideFunction(block: string, const_in: string, n: number)
// {

// 	//тут наверное нужно какую-то ошибку выбрасывать

// 	let data = block;
// 	let c = const_in.length;
// 	let C = "ТПУ" + const_in + const_in.substr(0, 4);
// 	let key = C.substr(3, 4);
// 	let i = 0;
// 	let temp = "";

// 	for(i; i<n; i++)
// 	{
// 		let q = ((i*4) % c) + 3;
// 		temp = ReinforceSBlockEncrypt(key, StraightSBlock(key, data, 0), 0);
// 		let s = blockToNum(temp) % 4;
// 		key = add_txt(temp, C.substr(q-s, 4));
// 	}
// 	return temp;
// }

// function add_txt(str1: string, str2: string)
// {

// 	//тут наверное тоже нужно ошибку выбрасывать какую-то

// 	if (str1.length == str2.length)
// 	{
// 		let i = 0;
// 		let out = "";
// 		for (i; i<str1.length; i++)
// 		{
// 			out = out + SumSymbols(str1[i], str2[i]);
// 		}
// 		return out;
// 	}
// 	return 0;
// }
