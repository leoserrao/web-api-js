class HeroService {
    constructor({ heroRepository }) {
        this.heroRepository = heroRepository
    }

    async find(itemId) {
        return this.heroRepository.find(itemId)
    }

    async find(data) {
        return this.heroRepository.find(data)
    }
}

module.exports = HeroService