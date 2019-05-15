import { 
    UPDATE_FONT_SIZE, 
    UPDATE_SWITCH_TEACHER_MODE, 
    UPDATE_SPACE_WORDS,
    UPDATE_SPACE_LETTERS,
    UPDATE_SPACE_LINES,
    UPDATE_RATE
} from './action'

const initialState = {
    settings: {
        teacherMode: false,
        spaceWords: 0.5,
        spaceLetters: 0.4,
        spaceLines: 0.5,
        rate: 1,
        separationSyllabique: false,
        font: "openDyslexic",
        fonts: ["openDyslexic", "calibri", "comic"],
        size: 0.4,
        colors: ["black", "white", "red", "blue"],
        selectedColor: 0,
        colorPicker: false
    }
}

export default reducer = (state = initialState, action) => { 
    switch(action.type){
        case UPDATE_FONT_SIZE:
            return {...state, settings: {...state.settings, size: action.value}}
        case UPDATE_SPACE_WORDS:
            return {...state, settings: {...state.settings, spaceWords: action.spaceWords}}
        case UPDATE_SPACE_LETTERS:
            return {...state, settings: {...state.settings, spaceLetters: action.spaceLetters}}
        case UPDATE_SPACE_LINES:
            return {...state, settings: {...state.settings, spaceLines: action.spaceLines}}
        case UPDATE_RATE:
            return {...state, settings: {...state.settings, rate: action.rate}}
        case UPDATE_SWITCH_TEACHER_MODE:
            return {...state, settings: {...state.settings, teacherMode: !state.settings.teacherMode}}
    }
    return state 
}