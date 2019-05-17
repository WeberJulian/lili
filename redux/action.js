
// ACTION TYPE

export const UPDATE_FONT_SIZE = "UPDATE_FONT_SIZE"
export const UPDATE_SWITCH_TEACHER_MODE = "UPDATE_SWITCH_TEACHER_MODE"
export const UPDATE_SWITCH_BOLD = "UPDATE_SWITCH_BOLD"
export const UPDATE_SPACE_WORDS = "UPDATE_SPACE_WORDS"
export const UPDATE_SPACE_LETTERS = "UPDATE_SPACE_LETTERS"
export const UPDATE_SPACE_LINES = "UPDATE_SPACE_LINES"
export const UPDATE_RATE = "UPDATE_RATE"
export const UPDATE_SWITCH_SEPARATION_SYLLABIQUE = "UPDATE_SWITCH_SEPARATION_SYLLABIQUE"
export const UPDATE_FONT = "UPDATE_FONT"
export const UPDATE_BACKGROUND_COLOR = "UPDATE_BACKGROUND_COLOR"
export const UPDATE_DEFAULT_COLOR = "UPDATE_DEFAULT_COLOR"
export const UPDATE_SYLLAB1_COLOR = "UPDATE_SYLLAB1_COLOR"
export const UPDATE_SYLLAB2_COLOR = "UPDATE_SYLLAB2_COLOR"
export const UPDATE_SELECTED_COLOR = "UPDATE_SELECTED_COLOR"
export const UPDATE_COLOR = "UPDATE_COLOR"
export const CLOSE_COLOR_PICKER = "CLOSE_COLOR_PICKER"
export const OPEN_COLOR_PICKER = "OPEN_COLOR_PICKER"
export const UPDATE_TEXT = "UPDATE_TEXT"

// ACTION CREATORS

export const settingsActions = {
    updateFont(font){
        return { type: UPDATE_FONT, font }
    },
    updateFontSize(size){
        return { type: UPDATE_FONT_SIZE, size }
    },
    updateSwitchTeacherMode(){
        return { type: UPDATE_SWITCH_TEACHER_MODE }
    },
    updateSwitchBold(){
        return { type: UPDATE_SWITCH_BOLD }
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
    },
    updateSwitchSeparationSyllabique(){
        return { type: UPDATE_SWITCH_SEPARATION_SYLLABIQUE }
    },
    updateColor(color, index){
        return { type: UPDATE_COLOR, color, index }
    },
    updateBackgroundColor(color){
        return { type: UPDATE_BACKGROUND_COLOR, color }
    },
    updateDefaultColor(color){
        return { type: UPDATE_DEFAULT_COLOR, color }
    },
    updateSyllab1Color(color){
        return { type: UPDATE_SYLLAB1_COLOR, color }
    },
    updateSyllab2Color(color){
        return { type: UPDATE_SYLLAB2_COLOR, color }
    },
    updateSelectedColor(index){
        return { type: UPDATE_SELECTED_COLOR, index }
    },
    closeColorPicker(){
        return { type: CLOSE_COLOR_PICKER }
    },
    openColorPicker(){
        return { type: OPEN_COLOR_PICKER }
    },
    updateText(text){
        return { type: UPDATE_TEXT, text }
    }
}