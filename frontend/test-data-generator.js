'use strict';

const fs = require('fs');
const _ = require('lodash');


let currentId = 0;
const surnameList = ['Алексеев', 'Александров', 'Андреев', 'Борисов', 'Викторов', 'Николаев'];
const nameList = ['Алексей', 'Александр', 'Андрей', 'Борис', 'Виктор', 'Николай'];
const patronymicList = ['Алексеевич', 'Александрович', 'Андреевич', 'Борисович', 'Викторович', 'Николаевич'];

function generateName() {
    const surName = surnameList[_.random(0, surnameList.length - 1)];
    const name = nameList[_.random(0, nameList.length - 1)];
    const patronymic = patronymicList[_.random(0, patronymicList.length - 1)];

    return `${surName} ${name} ${patronymic}`;
}

function generateRandomSubItems() {
    let subItems = [];
    const subItemsCount = _.random(1, 5);
    for (let i = 0; i < subItemsCount; i++) {
        subItems.push({id: ++currentId, name: generateName()});
    }

    return subItems;
}

let arTestData = [];

for (let i = 1; i <= 100; i++) {
    arTestData.push({id: i, name: 'Группа ' + i, items: generateRandomSubItems()});
}


const data = JSON.stringify({testData: arTestData});

fs.writeFileSync('test.json', data);