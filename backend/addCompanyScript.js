// const a = new Company({ name: "makemytrip", address: "delhi" });
// a.save()

const Company = require("./models/company");

async function companylist() {
  await new Company({ name: "check", address: "delhi" }).save();

  await new Company({
    name: "amazon",
    address: "hyderabad",
    phoneNumber: 18002,
  }).save();
  await new Company({ name: "amdocs", address: "pune" }).save();
  await new Company({ name: "byju", address: "bangalore" }).save();
  await new Company({ name: "bloomberg" }).save();
  await new Company({ name: "cisco" }).save();
  await new Company({ name: "directi" }).save();
  await new Company({ name: "samsung" }).save();
  await new Company({ name: "flipkart" }).save();
  await new Company({ name: "google" }).save();
  await new Company({ name: "microsoft" }).save();
  await new Company({ name: "nvidia" }).save();
  await new Company({ name: "zoho" }).save();
  await new Company({ name: "tcs" }).save();
  await new Company({
    name: "deloitte",
    address: "indore",
    phoneNumber: 180010,
  }).save();
  await new Company({ name: "HP", address: "mumbai" }).save();
  await new Company({ name: "Grofers", address: "gurgoan" }).save();
  await new Company({ name: "Zomato", address: "noida" }).save();
}

module.exports = companylist;
