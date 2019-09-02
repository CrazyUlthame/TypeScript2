var	HealthComponent = function (initialHealth){
    this.health	= initialHealth;
    this.getHit	= function(amount){
        this.health -= amount;
    }
}

module.exports = HealthComponent;
