// 开氏度 = 摄氏度 + 273.15
// 华氏度 = 摄氏度 * 1.80 + 32.00

function convertTemperature1(celsius: number): number[] {
    return [celsius + 273.15, celsius * 1.8 + 32];
};



const convertTemperature = convertTemperature1;

console.log(convertTemperature(36.50)); // [309.65000,97.70000]
console.log(convertTemperature(122.11)); // [395.26000,251.79800]
