const timeConvert = (TimeStamp) => {
    let convert = (time) => {
        const dateTime = new Date(time);
        return dateTime;
    };

    return convert(TimeStamp);
};

export default timeConvert;
