export default timestamp => {
    const time = new Date(timestamp * 1000);
    const now = new Date();
    const diff = Math.ceil((now - time) / (60 * 60 * 1000));
    return diff > 24
        ? `${Math.ceil(diff / 24)}d`
        : `${diff}h`;
};
