import { ref } from 'vue';

export const storageKey = "jcs_lsh_todoslist"

export const currentLineSheet = ref(-1);

export let data = {
    lineSheets : [
        {
            id: 0,
            name: 'School Hobbies',
            Todos: [
                {
                    id: 0,
                    title: 'Some works to do...',
                    checked: false,
                    addonAttrs: [
                        {
                            name: 'details',
                            details: 'this is test...'
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: 'My Projects',
            Todos: [
                {
                    id: 0,
                    title: 'Some works to do about my projects...',
                    checked: false,
                    addonAttrs: [
                        {
                            name: 'details',
                            details: 'this is test...'
                        }
                    ]
                }
            ]
        }
    ]
}

export function StartStoring() {
    if (localStorage.getItem(storageKey) === null) {
        localStorage.setItem(storageKey, JSON.stringify(data));
    }
}

export function GetAllLineSheets() {
    Load();
    return data.lineSheets;
}

function Load() {
    StartStoring();
    data = JSON.parse(localStorage.getItem(storageKey))
}

export function setSelectedTab(id) {
    currentLineSheet.value = id;
}

export function getAllToDoLines(lineSheetId) {
    console.log(lineSheetId);
    console.log(data.lineSheets.find(c => c.id == lineSheetId));
    return data.lineSheets.find(c => c.id == lineSheetId).Todos;
}

