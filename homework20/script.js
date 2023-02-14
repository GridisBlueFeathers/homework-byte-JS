function PublicService() {
    this.services = {
        hotWater: 0,
        coldWater: 0,
        gas: 0,
        electricity: 0,
    }
}

PublicService.prototype.addMeterReadings = function(amount, service) {
    if (this.services[service]) {
        throw new Error(`Service ${service} is already included`)
    }

    if (this.services[service] === undefined) {
        throw new Error(`Service ${service} is unavailble`)
    }

    this.services[service] = amount;
}

PublicService.prototype.deleteMeterReadings = function(service) {
    delete this.services[service];
}

PublicService.prototype.getSum = function() {
    const values = Object.values(this.services);
    let res = 0;

    values.forEach(value => {
        res += value
    });

    return res
}

const someService = new PublicService();
someService.addMeterReadings(4, "hotWater");
someService.addMeterReadings(5, "gas");
someService.addMeterReadings(6, "electricity");
someService.deleteMeterReadings("coldWater");

const sum = someService.getSum()
console.log(sum);