const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,

        }
    },
    methods: {
        attackMonster() {
            const attackValue = this.getRandomValue(12,5);
            this.monsterHealth -= attackValue
        },
        
        attackPlayer() {
            const attackValue = this.getRandomValue(15,8);
            this.playerHealth -= attackValue
        },
        getRandomValue(max,min){
            return Math.floor(Math.random()*(max-min))+min
        }
    }
})