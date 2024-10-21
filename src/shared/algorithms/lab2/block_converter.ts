// //тут 4 функции из первого задания по порядку

// import { ConvertTextToNumArray, ConvertNumArrayToText } from "../algorithms/converters";
// import { isCyrillicLetter, isCyrillicText } from "../validators/cyrillic_validator";

// export function blockToNum(block: string)
// {
// 	if (!isCyrillicText(block))
// 	{
// 		throw new Error('Функция принимает на вход текст, содержащий только русские заглавные буквы, не включая "Ъ" и "Ё".');
// 	}

// 	else if (block.length != 4)
// 	{
//     	throw new Error('Длина блока должна быть равна 4');
// 	}

// 	let pos = 1;
// 	let temp = ConvertTextToNumArray(block);
// 	let i = 3;
// 	let out = 0;
// 	for (i; i>=0; i--)
// 	{
// 		out = out + pos*temp[i];
// 		pos = pos * 32;
// 	}
// 	return out;
// }

// export function numToBlock(num: number)
// {

// 	// тут нужно выбрасывать ошибку если число не в диапазоне от 0 до 1048575

// 	let rem = num;
// 	let i = 3;
// 	let arr = [];
// 	for (i; i>=0; i--)
// 	{
// 		arr[i] = rem % 32;
// 		rem = parseInt(rem / 32);
// 	}
// 	return ConvertNumArrayToText(arr);
// }

// export function (num: number)
// {
	
// 	// тут нужно выбрасывать ошибку если число не в диапазоне от 0 до 1048575

// 	let rem = num;
// 	let i = 0;
// 	let out = [];
// 	for (i; i<20; i++)
// 	{
// 		out[19-i] = rem%2;
// 		rem = parseInt(rem/2);
// 	}
// 	return out;
// }

// export function numToDec(binNum: array)
// {
// 	//тут нужно выбрасывать ошибку если массив не из 20 элементов или какой-то элемент не 0 или не 1


// 	let out = 0;
// 	let i = 0;
// 	for (i; i<20; i++)
// 	{
// 		out = 2*out + binNum[i];
// 	}
// 	return out;
// }