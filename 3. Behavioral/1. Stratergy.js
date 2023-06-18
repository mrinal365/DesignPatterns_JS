// Stratergy pattern is a pattern in which you encapslate a group of  closely related agorithms

// These Algorithms are called stratergies 

// All a stratergy is a function 

// This pattern helps to swap stratergies in and out for each other


// Write a program that gives me some different shipping calculations for different companies and alculate shipping costs

//Company 1
function Fedex(){
    this.calculate=(package)=>{
        return 2.45
    }
}

//Company 2
function UPS(){
    this.calculate=(package)=>{
        return 1.56;
    }
}

//Company 3
function USPS(){
    this.calculate=(package)=>{
        return 4.5;
    }
}

// Creating instances of different companies
const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

//Creating a package Object
const package = {from: 'Alabama', to: 'Georgia', weight: 1.56}

// Without Stratergy pattern
// fedex.calculate(package)
// ups.calculate(package)
// usps.calculate(package)

//With Stratergy Pattern
function Shipping(){
    this.company="";
    this.setStratergy=(company)=>{
        this.company=company;
    }
    this.calculate=package=>{
        return this.company.calculate(package)
    }
}

const shipping = new Shipping()

shipping.setStratergy(fedex)
console.log(shipping.calculate(package))

shipping.setStratergy(ups)
console.log(shipping.calculate(package))

shipping.setStratergy(usps)
console.log(shipping.calculate(package))

