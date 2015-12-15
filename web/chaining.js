/**
 * Created by gagsingh on 12/15/2015.
 */
var company = function() {

    this.name = 'Apple';
    this.sector = 'IT';
    this.location = 'USA';

};

company.prototype.setName = function(name) {
    this.name = name;
    return this;        //Returning 'this' is important, as this is what enables chaining
};
company.prototype.setSector = function(sector) {
    this.sector = sector;
    return this;
};
company.prototype.setLocation = function(location) {
    this.location = location;
    return this;
};

company.prototype.save = function() {
    console.log("Saving "+this.name+" which is into "+this.sector+" sector and is based in "+this.location);
    return this;
};

var saveCompany = function(name, sector, location) {
    new company().setName(name).setSector(sector).setLocation(location).save();   //chaining
}

//Read http://schier.co/blog/2013/11/14/method-chaining-in-javascript.html for details

