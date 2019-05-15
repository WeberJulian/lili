import Settings from "../Screens/Settings";

// ACTION TYPE

export const UPDATE_FONT_SIZE = "UPDATE_FONT_SIZE"
export const UPDATE_SWITCH_TEACHER_MODE = "UPDATE_SWITCH_TEACHER_MODE"
export const UPDATE_SPACE_WORDS = "UPDATE_SPACE_WORDS"
export const UPDATE_SPACE_LETTERS = "UPDATE_SPACE_LETTERS"
export const UPDATE_SPACE_LINES = "UPDATE_SPACE_LINES"
export const UPDATE_RATE = "UPDATE_RATE"

// ACTION CREATORS

export const settingsActions = {
    updateFontSize(value){
        return { type: UPDATE_FONT_SIZE, value }
    },
    updateSwitchTeacherMode(){
        return { type: UPDATE_SWITCH_TEACHER_MODE }
    },
    updateSpaceWords(spaceWords){
        return { type: UPDATE_SPACE_WORDS, spaceWords }
    },
    updateSpaceLetters(spaceLetters){
        return { type: UPDATE_SPACE_LETTERS, spaceLetters }
    },
    updateSpaceLines(spaceLines){
        return { type: UPDATE_SPACE_LINES, spaceLines }
    },
    updateRate(rate){
        return { type: UPDATE_RATE, rate }
    }
}