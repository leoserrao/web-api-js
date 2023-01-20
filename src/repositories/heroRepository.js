//Será o responsável por manipular os dados do nosso banco de dados
const { readFile, writeFile } = require('fs/promises')

class HeroRepository {
    constructor({ file }) {
        this.file = file
    }

    async _currentFileContent() {
        return JSON.parse(await readFile(this.file))
    }

    async find(itemId) {
        const all = await this._currentFileContent()
        if(!itemId) return all

        return all.find(({ id }) => itemId === id)
    }
}

module.exports = HeroRepository

const heroRepository = new HeroRepository({
    file: './../../database/data.json'
})

heroRepository.find().then(console.log).catch(error => console.log('error', error))