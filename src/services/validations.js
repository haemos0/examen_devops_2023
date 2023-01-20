// TODO: Add here the function to validate

const checkGamerTag = (gamerTag) => {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const found = gamerTag.match(regex)
    if(gamerTag.length < 8)return false;
    if(!found)return false;
    return true;
}

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, checkGamerTag }

