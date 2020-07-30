/* We have a business. Owner: Sam, director: Victor. Our budget: 87400. And our employers: alex,ludmila,viktor,oleg,inna,ivan,alex,olga,ann
And we have a sponsors: 
SRL PLO J&K RusAuto SBO unexpected sponsor
Note. Be careful with SRL. It's a huge risk. */

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((eachOne) => eachOne.length > 0)

employersNames = employersNames.map((eachOne) => eachOne.toLowerCase().trim())

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(sponsorsCash, own = 0) {
    const [...everyCash] = sponsorsCash
    let total = own;
    everyCash.forEach(element => {
        total += +element;
        });
    return total;
}

const money = calcCash(cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness('Sam', money, employersNames);