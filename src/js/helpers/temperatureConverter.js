// simple function to convert Kelvin to Fahrenheit

const tempConvert = (Kelvin) => {
    let convert = (KelvinTemp) => {
        // (272K − 273.15) × 9/5 + 32 = 29.93°F

        const newTemp = ((KelvinTemp - 273.15) * 9) / 5 + 32;

        return newTemp;
    };

    return convert(Kelvin);
};

export default tempConvert;
