import { 
    UPDATE_FONT_SIZE, 
    UPDATE_SWITCH_TEACHER_MODE, 
    UPDATE_SPACE_WORDS,
    UPDATE_SPACE_LETTERS,
    UPDATE_SPACE_LINES,
    UPDATE_RATE,
    UPDATE_SWITCH_SEPARATION_SYLLABIQUE,
    UPDATE_FONT,
    UPDATE_BACKGROUND_COLOR,
    UPDATE_DEFAULT_COLOR,
    UPDATE_SYLLAB1_COLOR,
    UPDATE_SYLLAB2_COLOR,
    UPDATE_COLOR,
    UPDATE_SELECTED_COLOR,
    CLOSE_COLOR_PICKER,
    OPEN_COLOR_PICKER,
    UPDATE_TEXT,
    UPDATE_SWITCH_BOLD
} from './action'

const initialState = {
    text: "",
    settings: {
        teacherMode: false,
        spaceWords: 0.3,
        spaceLetters: 0.2,
        spaceLines: 0.5,
        rate: 0.3,
        separationSyllabique: true,
        font: "openDyslexic",
        fonts: ["openDyslexic", "calibri", "comic"],
        size: 0.3,
        colorBackground: "black",
        colorDefault: "white",
        colorSyllab1: "red",
        colorSyllab2: "blue",
        colors: ["black", "white", "red", "blue"],
        selectedColor: 0,
        colorPicker: false,
        bold: false
    }
}

export default reducer = (state = initialState, action) => { 
    switch(action.type){
        case UPDATE_TEXT:
            return {...state, text: action.text}
        case UPDATE_FONT:
            return {...state, settings: {...state.settings, font: action.font}}
        case UPDATE_FONT_SIZE:
            return {...state, settings: {...state.settings, size: action.size}}
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
        case UPDATE_SWITCH_BOLD:
            return {...state, settings: {...state.settings, bold: !state.settings.bold}}
        case UPDATE_SWITCH_SEPARATION_SYLLABIQUE:
            return {...state, settings: {...state.settings, separationSyllabique: !state.settings.separationSyllabique}}
        case UPDATE_BACKGROUND_COLOR:
            return {...state, settings: {...state.settings, colorBackground: action.color}}
        case UPDATE_DEFAULT_COLOR:
            return {...state, settings: {...state.settings, colorDefault: action.color}}
        case UPDATE_SYLLAB1_COLOR:
            return {...state, settings: {...state.settings, colorSyllab1: action.color}}
        case UPDATE_SYLLAB2_COLOR:
            return {...state, settings: {...state.settings, colorSyllab2: action.color}}
        case UPDATE_SELECTED_COLOR:
            return {...state, settings: {...state.settings, selectedColor: action.index}}
        case CLOSE_COLOR_PICKER:
            return {...state, settings: {...state.settings, colorPicker: false}}
        case OPEN_COLOR_PICKER:
            return {...state, settings: {...state.settings, colorPicker: true}}
        case UPDATE_COLOR:
            let colors = [...state.settings.colors]
            colors[action.index] = action.color
            return {...state, settings: {...state.settings, colors}}
        default:
            console.log("No behaviours defined in reducer for action : " + action.type)
            break;
    }
    return state 
}