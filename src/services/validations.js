// TODO: Add here the function to validate

const checkGamerTag = (gamerTag) => {
    if(gamerTag.length < 8)return false;
    if(!gamerTag.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))return false;
    if(!gamerTag.match(/[0-9]/))return false;
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, checkGamerTag };

