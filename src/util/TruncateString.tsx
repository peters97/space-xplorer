const truncateString = (str: string, words: number) => {
    return str.split(" ").splice(0, words).join(" ");
}

export default truncateString;